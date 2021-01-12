
//Github 3,2,1...Write Functions
// Coding time!
// Let's put your brand new coding skills into practice.
//
// Presentation
// Write a program that displays your name and age. Here's the result for mine.
function nameAge (word1,word2){
  let details = 'stef' + '31'
  console.log(details)
}
//
//
// Minimalistic calculator
// Write a program that displays the results of adding, subtracting, multiplying and dividing with 6 and 3.
let total = 0

document.querySelector('#pumpkin').addEventListener('click', makeZero)
document.querySelector('#dominosPizza').addEventListener('click', add3)
document.querySelector('#zebra').addEventListener('click', add6)
document.querySelector('#cantThinkOfAnything').addEventListener('click', sub3)
document.querySelector('#Oreos').addEventListener('click', sub6)
document.querySelector('#Three').addEventListener('click', mult3)
document.querySelector('#Six').addEventListener('click', mult6)
document.querySelector('#Nine').addEventListener('click', divide3)
document.querySelector('#Twelve').addEventListener('click', divide6)


function makeZero() {
  total = 0
  document.querySelector('#placeToPutResult').innerText = total
}

function add3() {
  total = total + 3
  document.querySelector('#placeToPutResult').innerText = total
}

function add6() {
  total = total + 6
  document.querySelector('#placeToPutResult').innerHTML = total
}

function sub3() {
  total = total - 3
  document.querySelector('#placeToPutResult').innerHTML = total
}

function sub6() {
  total = total - 6
  document.querySelector('#placeToPutResult').innerHTML = total
}

function mult3() {
  total = total * 3
  document.querySelector('#placeToPutResult').innerHTML = total
}

function mult6() {
  total = total * 6
  document.querySelector('#placeToPutResult').innerHTML = total
}
function divide3() {
  total = total / 3
  document.querySelector('#placeToPutResult').innerHTML = total
}

function divide6() {
  total = total / 6
  document.querySelector('#placeToPutResult').innerHTML = total
}

// Values prediction
// Observe the following program and try to predict the values it displays.
//
// console.log(4 + 5);
console.log(9)
// console.log("4 + 5");
console.log("9")
// console.log("4" + "5");
console.log(45)


//Github create first objects
//*Adding character experience
Improve our example RPG program to add an experience property named xp to the character. Its initial value is 0. Experience must appear in character description.

// TODO: create the character object here
const aurora = {
  name: "Aurora",
  health: 150,
  strength: 25,
  xp: 0

  // Return the character description
  describe() {
    return `${this.name} has ${this.health} health points and ${this
      .strength} as strength and this experience ${this.xp} `;
  }
};

console.log(aurora.describe());

// Aurora is harmed by an arrow
aurora.health -= 20;

// Aurora equips a strength necklace
aurora.strength += 10;

// Aurora learn a new skill
aurora.xp += 15;

console.log(aurora.describe());
Execution result

Modeling a dog
Complete the following program to add the dog object definition.

// TODO: create the dog object here
const dog = {
  name: "Puppy",
  species: "cute",
  size: "small"
}

console.log(`${dog.name} is a ${dog.species} dog measuring ${dog.size}`);
console.log(`Look, a cat! ${dog.name} barks: ${dog.bark()}`);
Execution result

Modeling a circle
Complete the following program to add the circle object definition. Its radius value is input by the user.

const r = Number(prompt("Enter the circle radius:"));

// TODO: create the circle object here
function Circle(x, y, r) {

    this.x = x;
    this.y = y;
    this.r = r;

    this.translate = function(h, v) {
        this.x += h;
        this.y += v;
    };

    this.intersect = function(circle) {
        var centerDistance = Math.pow(this.x - circle.x, 2) + Math.pow(this.y - circle.y, 2);
        return Math.pow(this.r - circle.r, 2) <= centerDistance && centerDistance <= Math.pow(this.r + cirle.r, 2);
    };

}

console.log(`Its circumference is ${circle.circumference()}`);
console.log(`Its area is ${circle.area()}`);
Modeling a bank account
Write a program that creates an account object with the following characteristics:

A name property set to "Alex".
A balance property set to 0.
A credit method adding the (positive or negative) value passed as an argument to the account balance.
A describe method returning the account description.
Use this object to show its description, crediting 250, debiting 80, then show its description again.

const account = {
  name: "Alex",
  balance: 0,
  credit:250,
  debit: 80

  describe() {
    return `${this.name} has ${this.balance} balance and this ${this
      .credit} credit`;
  }
};
}

console.log(`${this.name} has ${dog.credit} credit and ${dog.debit}`);

Execution result
