//We need to create a app that calls json data internally and displays in on the DOM
//We need to create a function that will randomize the data being called
//We want this to happen on some type of event (button click)

let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let house = document.getElementById("house");
let summonBtn = document.getElementById("summonBtn");

//We need to create a function that will grab the JSON data
// .then()is a method that waits for a promise to be fufilled
function getData(){
    return fetch("../data/data.json")
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        return data.students;
    });
}

getData();

//We need to create a function that will randomize the data being called
function randomizeData(students){
    // Math.Random will give the random number but it will be a decimal
    // Math.floor will round down the decimal to the nearest whole number
    let randomIndex = Math.floor(Math.random() * students.length);
    console.log([randomIndex]);
    return students[randomIndex];
}

//Create a function that will summon the randomized wizard with a button click
summonBtn.addEventListener("click",  () => {
  getData().then((students)=> {
    let randomStudent = randomizeData(students);
    console.log(randomStudent);
    firstName.innerText = randomStudent.firstName;
    lastName.innerText = randomStudent.lastName;
    house.innerText = randomStudent.house;

  })
});

