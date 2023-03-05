let name = prompt("What is your name?");

let gender = prompt("What is your gender?");

if (gender !== "male" && gender !== "female") {
  alert(" please enter  male or female");
} else {
}

let age = prompt("What is your age?");

age <= 0 ? alert("THERE IS SOME THING WRONGE. the is not your real age. ")
  : document.write("");

let confirm = confirm("if you want to skip welcoming message, you can press CANCEL");

if (confirm == true) {
  gender == "female"
    ? alert("welcome Ms " + name)
    : gender == "male"
    ? alert("welcome Mr " + name)
    : alert("welcome " + name);
} else {
}
/*
var array = [];

let codeingLove = prompt("Do you love coding?");

function cLove() {
  if (codeingLove == null) {
    return "invalid";
  } else {
    return codeingLove;
  }
}

let codingLevel = prompt("Do you think coding is hard?");

function cLevel() {
  if (codingLevel == null) {
    return "invalid";
  } else {
    return codingLevel;
  }
}

let courseComplement = prompt(
  "Do you intend to complet the course till the end ?"
);

function ccLevel() {
  if (courseComplement == null) {
    return "invalid";
  } else {
    return courseComplement;
  }
}

let a = cLove();

let b = cLevel();

let cc = ccLevel();

array.push(a);
array.push(b);
array.push(c);

console.log(array);
*/