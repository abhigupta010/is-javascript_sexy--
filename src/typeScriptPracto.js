var age = 30; // Declare a number variable
age = 31;
var fname = 'John'; // Declare a string variable
var array = ['red', 'green', 'blue']; //Declare a string array
var object = {
    fname: fname,
    age: age
};
var person = {
    fname: "Abhik",
    age: 2
};
var tsFunction = function (diameter) {
    return diameter * Math.PI;
};
var tsObject = {
    name: "Abhik",
    age: 23,
    belt: "black"
};
var mixedTSArray = [];
mixedTSArray.push('Number');
mixedTSArray.push(900);
mixedTSArray.push(true);
//classes
var Invoice = /** @class */ (function () {
    function Invoice(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    Invoice.prototype.format = function () {
        return "".concat(this.client, " Owes Rs.").concat(this.amount, " for ").concat(this.details);
    };
    return Invoice;
}());
var invOne = new Invoice('Abhi', 'Works as React Developer', 4000);
var invTwo = new Invoice('Abhik', 'Works as React Developer', 40000);
var invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach(function (inv) {
    console.log(inv.client, /*inv.details,*/ inv.amount, inv.format());
});
console.log(invoices);
var form = document.querySelector('.new-item-form');
var type = document.querySelector('#type');
var toFOrm = document.querySelector('#tofrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(type.value, toFOrm.value, details.value, amount.value);
});
// console.log("mixedTSArray~~~~~~>",mixedTSArray);
// console.log("tsObject~~~~~>",tsObject);
// console.log(tsFunction(60));
// console.log("name~~~~>",age);
// console.log("Fname~~~~>",fname);
// console.log("array~~~~>",array);
// console.log("object~~~~>",object);
// console.log("Person~~~~>",person);
