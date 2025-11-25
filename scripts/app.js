let buf = [];

function getData() {
  return fetch("/data/data.json")
    .then(some => some.json())
    .then(data => {
      return data["members"];
    });
}

function randomizeMember(members) {
  let randomIndex = Math.floor(Math.random() * members.length);
  return members[randomIndex];
}

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
        const element = document.querySelector(`#m-${i} > #i-${j}`);
        element.innerHTML = buf[i][key];
      }
    }
  })
});
