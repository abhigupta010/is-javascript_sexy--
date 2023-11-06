let age: number = 30; // Declare a number variable
age = 31; 
let fname: string = 'John'; // Declare a string variable
let array : string[] = ['red', 'green', 'blue']; //Declare a string array
let object : {age?:number;fname:string}={
    fname:fname,
    age:age
};

type person = {
    fname:string;
    age:number;
}
const person : person={
    fname:"Abhi",
    age:2
};

console.log("name~~~~>",age);
console.log("Fname~~~~>",fname);
console.log("array~~~~>",array);
console.log("object~~~~>",object);
console.log("Person~~~~>",person);

