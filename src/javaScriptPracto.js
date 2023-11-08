//******* Write a program to make const array empty *******//
// Input: const a = [1,2,3,4,5,6];
// Output: a=[];

//Method 1:
// const a = [10, 20, 30, 40];
// console.log(a.length);
// a.length = 0;
// console.log(a.length);

//Method 2:
// const a = [10,20,30,40];
// a.splice(0,a.length);
// console.log(a);



//***** Write a program to shift the last element first in array ******//
//Input: let a = [1,2,3,4,5,6,7];
//Output: let a = [7,,2,3,4,5,6];

//Method 1:
// let a = [1,2,3,4,5,6,7];
// let popedElement = a.pop();
// let newArray = [popedElement,...a];
// console.log(newArray);

//Method 2:
// let a = [1,2,3,4,5,6,7];
// console.log(a.unshift(a.pop()));
// console.log(a);

//Method 3:
// let a = [1, 2, 3, 4, 5, 6, 7];
// let lastElement = a[a.length - 1];
// for (let i = a.length - 1; i > 0; i--) {
//     a[i] = a[i - 1];
// }
// a[0] = lastElement;
// console.log(a);





    
