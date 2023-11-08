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
    fname:"Abhik",
    age:2
};

const tsFunction = (diameter:number) =>{
    return diameter * Math.PI;
}

let tsObject = {
    name:"Abhik",
    age:23,
    belt:"black"
}

let mixedTSArray :(string|number|true) [] = [];
mixedTSArray.push('Number');
mixedTSArray.push(900);
mixedTSArray.push(true);

//classes

class Invoice{
    constructor(
        readonly client:string,
        private details:string,
        public amount:number,
        ){}
    format() {
        return `${this.client} Owes Rs.${this.amount} for ${this.details}`;
    }
}

const invOne = new Invoice('Abhi','Works as React Developer',4000);
const invTwo = new Invoice('Abhik','Works as React Developer',40000);

let invoices:Invoice[] =[]
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach(inv => {
    console.log(inv.client, /*inv.details,*/ inv.amount, inv.format());
  })
console.log(invoices);

const form = document.querySelector('.new-item-form') as HTMLInputElement;
const type = document.querySelector('#type') as HTMLInputElement;
const toFOrm = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit',(e:Event)=>{
    e.preventDefault();

    console.log(
        type.value,
        toFOrm.value,
        details.value,
        amount.value,
    );
    
})

// console.log("mixedTSArray~~~~~~>",mixedTSArray);
// console.log("tsObject~~~~~>",tsObject);
// console.log(tsFunction(60));
// console.log("name~~~~>",age);
// console.log("Fname~~~~>",fname);
// console.log("array~~~~>",array);
// console.log("object~~~~>",object);
// console.log("Person~~~~>",person);

 