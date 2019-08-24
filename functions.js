console.log("Functions in-class code along");

let firstName = 'George';
let lastName = 'Weasley';

console.log(`${firstName} ${lastName}`)

firstName = 'Fred';
lastName = 'Weasley';

console.log(`${firstName} ${lastName}`)

firstName = 'Ginny';
lastName = 'Weasley';

console.log(`${firstName} ${lastName}`)

//es6
const sayMyName = (first, last) => {
    //do something
    return (`${first} ${last}`);
}

console.log(sayMyName('Harry', 'Potter'));
//es5
//const sayMyName = function (first, last) {
    //do something
  //  console.log(${first} ${last})

  // NUG TIME
  const nuggetizer = (animal) => {
        return `nugget ${animal}`;
  }
  const humaneNuggetizer = (animal) => {
        return animal;
  }

  const spamFactory = (anythingImaginable) => {
        return 'spam ${lunch}';
  }

  console.log(nuggetizer('chicken'));
  console.log(nuggetizer('octopus'));
  console.log(nuggetizer('John Wark'));

  console.log(humaneNuggetizer('chicken'));
  console.log(humaneNuggetizer('octopus'));
  console.log(humaneNuggetizer('John Wark'));
  
  console.log(spamFactory('chicken'));
  console.log(spamFactory('octopus'));
  console.log(spamFactory('John Wark'));

  const printToDOM = (toPrint) => {

    document.getElementById('output').innerHTML += toPrint;

}

  let bandNumber = 1
  
  const takeNumber = (bandName) => {

      printToDOM(`<h3>${bandNumber}. ${bandName} </h3>`);
      bandNumber++;

  };

  takeNumber("Galactic Scum");
  takeNumber("Underdogs");
  takeNumber("Blastoids");