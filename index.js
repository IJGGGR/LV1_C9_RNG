let buf = [];
let map = ["firstName", "lastName", "schoolEmail", "personalEmail"];

document.getElementById("randomize").addEventListener("click", () => {
  getData().then(members => {
    buf.unshift(randomizeMember(members));
    if (buf.length > 6) { buf.pop(); }
    for (let i = 0; i < buf.length; i++) {
      for (let j = 0; j < 4; j++) {
        const element = document.querySelector(`#d-${i} > #p-${j}`);
        element.innerHTML = buf[i][map[j]] ?? "n/a";
      }
    }
  })
});

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
