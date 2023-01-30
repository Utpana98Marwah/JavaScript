//Object Destructuring:  object destructuring is used to get all the values in single line.
/*const student = {firstName: 'Utpana', 
                 lastName: 'Marwah', 
                 rollno: 7,
                 state : 'Himachal Pradesh'};  
const rollno = 20;
const {firstName,lastName,rollno:rollNo,state} = student;  
console.log(firstName,rollNo);
*/

//Array Destructuring:
/*var studentName = ["Utpana", "Riya", "Rashmi", "Aastha","Archana"]; 
const [name1,name2,name3,name4,name5] = studentName;
console.log(name1,name5);
*/


// Spread Operator: Spread operator allow us to copy all part of an array or object.
/* const employee = {
                  id : 1,
                  firstName:'Gulshandeep',
                  lastName:'Kaur',
                  city:'Baijnath',
                  state:'HP'
};
                
const employee1 = {... employee}; // copy employee object in employee1
const employee2 = {...employee1, firstName:'Utpana', lastName:'Marwah',
                                pincode:175032, country:'India'};
console.log(employee2);
*/
 // modify attributes of employee1 object (firstName, lastName) and add new attributes (country and pincode)


// for of loop: iterate over array
/* const students = ['utpana', 'sheetal', 'rashmi']
for ( let item of students ) {
console.log(item);
}
*/
//get the sum of an array
/*
const arr = [1,2,3,4];
let sum = 0;
for( item of arr)
{
 sum = sum + item;
}
console.log(sum);
*/


//for in loop:  iterate over the property key of an object. 
/* Syntax: for (key in object) {
Console.log(key);
}*/

 //iterate all the values in the object.
/*const employee = {
        firstName: 'Utpana',
        lastName: 'Marwah',
        id: 367,
        city: 'Palampur'
}
for (const key in employee) {
         console.log(key + ' : ' + employee[key] )
} */



//String / Template literal:  Template literals provide an easy way to insert variables and expressions into strings.

const student = { name : 'utpana',
                  city : 'palampur',
                  state : 'HP'
};
for(let key in student)
{
    //const result = "Student " + key + " " + "is = " + student[key] ;
   // const result = `key = ${key}, value = ${student[key]}`; 
    const result = `Student ${key} is ${student[key]}`;
    console.log(result);
}


//Rest Operator:  
// in this example the values 7,5,8 is assigned to a, b, c respectively and rest of the values stored in argument (args) i.e. [9,5,7,9]
/*function add(a,b,c, ...args){
    let sum = a + b+c;
    console.log(args);
    for(let i of args){
        sum += i;
    }
    return sum;
    }
let result = add(7,5,8,9,5,7,9);
console.log(result);
*/



//Ternary Operator: Ternary operator can be used to replace an if else statement in certain situation.
//Syntax: condition ? exprIfTrue : exprIfFalse
/*let a = prompt("Enter a number : ");
let result = (a%2==0)?'Number is even':'Number is odd'; */

