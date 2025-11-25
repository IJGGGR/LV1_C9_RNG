//We need to create a app that calls json data internally and displays in on the DOM
//We need to create a function that will randomize the data being called
//We want this to happen on some type of event (button click)

let buf = [];

//We need to create a function that will grab the JSON data
// .then()is a method that waits for a promise to be fufilled
function getData() {
  return fetch("/data/data.json")
    .then(some => some.json())
    .then(data => {
      console.log(data);
      return data["members"];
    });
}

function randomizeMember(members) {
  let randomIndex = Math.floor(Math.random() * members.length);
  return members[randomIndex];
}

//Create a function that will summon the randomized wizard with a button click
document.getElementById("randomize").addEventListener("click", () => {
  getData().then(members => {
    let randomMember = randomizeMember(members);
    buf.unshift(randomMember);
    if (buf.length > 6) { buf.pop(); }

    for (let i = 0; i < buf.length; i++) {
      for (let j = 0; j < 4; j++) {
        let key;
        if (j == 0) { key = "firstName"; }
        if (j == 1) { key = "lastName"; }
        if (j == 2) { key = "schoolEmail"; }
        if (j == 3) { key = "personalEmail"; }
        const temp = document.querySelector(`#m-${i} > #i-${j}`);
        temp.innerHTML = buf[i][key];
      }
    }
  })
});
