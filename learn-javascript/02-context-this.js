function myFunction() {
  console.log(this); //window
}

// Simple invocation
myFunction(); // logs global object (window)

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

function myFunction() {
  "use strict";
  console.log(this); //undefined
}

// Simple invocation
myFunction(); // logs global object (window)

//XXXXXXXXXXXXXXXXXXXXX Function Bind XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

const person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

const member = {
  firstName: "Hege",
  lastName: "Nilsen",
};

let fullName = person.fullName.bind(member);

console.log(fullName()); // Hege Nilsen

//XXXXXXXXXXXXXXXXXXXXXXXXX Function Call XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
const person1 = {
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

const person2 = {
  firstName: "John",
  lastName: "Doe",
};

let per = person1.fullName.call(person2);

// Return "John Doe":
console.log(per);
