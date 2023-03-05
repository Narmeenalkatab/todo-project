let name = prompt("What is your name?");

let gender = prompt("What is your gender?");

if (gender !== "male" && "female") {
  alert(" please enter  male or female");
}

let age = prompt("What is your age?");

age <= 0
  ? alert("THERE IS SOME THING WRONGE. the is not your real age. ")
  : confirm("if you want to skip welcoming message, you can press CANCEL");

gender == "female"
  ? alert("welcome Ms " + name)
  : gender == "male"
  ? alert("welcome Mr " + name)
  : alert("welcome " + name);

/* js2 branch*/

var array = [];

let codeingLove = prompt("Do you love coding?");

function codeLove() {
  if (codeingLove == "yes" || codeingLove == "no") {
    return codeingLove;
  } else if (codeingLove == "") {
    return "invalid";
  } else {
    return "";
  }
}

let codeingLevel = prompt("Do you think coding is hard?");

function codeLevel() {
  if (codeingLevel == "yes" || codeingLevel == "no") {
    return codeingLevel;
  } else if (codeingLevel == "") {
    return "invalid";
  } else {
    return "";
  }
}

let courseComplement = prompt(
  "Do you intend to complet the coursee till the end ?"
);

function courseLevel() {
  if (courseComplement == "yes" || courseComplement == "no") {
    return courseComplement;
  } else if (courseComplement == "") {
    return "invalid";
  } else {
    return "";
  }
}

array.push(codeLove());
array.push(codeLevel());
array.push(courseLevel());
console.log(array);
