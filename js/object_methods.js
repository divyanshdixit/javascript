// ECMA SCRIPT 5 object methods:

// Changing or adding a property value => Object.defineProperty(object, property, {value: 'value'})

var person = {
    fname : 'Divyansh',
    lname : 'Dixit',
    city : 'Kanpur'
}

// change a city property

Object.defineProperty(person, "city", {value: "Lucknow"})

console.log(person.city);


// Make a property read only: using {writeable:false}

Object.defineProperty(person, "fname", {writable:false})
person.fname = "new name";
console.log(person.fname);



// List all the properties of an object:

var prpties = Object.getOwnPropertyNames(person);
console.log(prpties);
console.log(Object.keys(person))


// Accessing the prototype of object

console.log(Object.getPrototypeOf(person))


// Object.preventExtensions(person);