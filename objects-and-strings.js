const bouncer = (age) => {

    if (age >= 21) {
        console.log('Drink (at the bar)');
    } 
    else {
        console.log('Shame');
    }
}

bouncer(12);
bouncer(93);


const me = 'martin';
console.log(me.length);

const myPerson = {
    name: 'John',
    age: '41'
}

console.log(myPerson.name);







console.dir(myPerson);




//challenge



const findAndLogEmployeeStatus = (employee) => {
    if (employee.name.charAt(0).toLowerCase() === 'm') {
        employee.status = 'VIP'
    } else {
        employee.status = 'peasant'
    }

    console.log(`${employee.name} is a total ${employee.status}`);

    return employee;
}

const person = {
    name: 'Michael',
    status: ''

}


findAndLogEmployeeStatus(person);
console.log(findAndLogEmployeeStatus);

findAndLogEmployeeStatus({
    name: prompt("what is your name?"),
});