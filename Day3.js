//Function declaration and expression: 
//Function declaration: function declaration must have a function name.
/*function show()
{
    console.log('Declare something');
}
show();
*/


//Function expression: Function expressions can be stored in a variable.
/*let show2 = function()
{
    console.log('Express something');
}
show2();
*/
// function expression has been stored in a variable, the variable can be used as a function. Functions stored in variables do not need function names. They are always called (invoked) using the variable name.


//Array functions – some and every: -

//Every function: every () function is used to check whether all the elements of the array satisfy the given condition or not. If even a single value does not satisfy the element the output will be false otherwise it will return true.
//Example 1:
//check positive values
/*
const numbers = [1,-1,2,3];
const result = numbers.every(function(number){
    return number >= 0;
})
if(result)
{
    console.log('positive values');
}else
{
    console.log('negative values');
}
console.log(result);
*/
//Example 2:
//check odd numbers
/*
const arr = [1,3,7,9,8,6];
let result = arr.every(function(item){
    return item % 2 == 1;
    })
    if(result){
        console.log('odd number');
    }else{
        console.log('not odd');
    }
    console.log(result);
*/


//Some function: some () function is used to check whether at least one of the elements of the array satisfies the given condition or not.
//Example 1:
//check positive values
/*const numbers1 = [1,-1,2,3];
const result1 = numbers1.some(function(number){
    return number >= 0;
})
if(result1)
{
    console.log('positive values');
}else
{
    console.log('negative values');
}
console.log(result1);

*/

//Example 2:
//check odd numbers
/*const arr = [1,3,7,9,8,6];
let result = arr.some(function(item){
    return item % 2 == 1;
    })
    if(result){
        console.log('odd number');
    }else{
        console.log('not odd');
    }
console.log(result);
*/




//Empty an array:  These are the following ways to empty an array is to set its length to zero:

//let num = [7,8,5,9,0];
//1.	Assigning it to a new empty array: This code assigned the array num to a new empty array.

//num = [];

//2.	Setting its length to zero: the length property is set to zero, all elements of the array are automatically deleted.

//num.length =0; 

//3.	Using splice() method: the splice() method removed all the elements of the num  array and returned the removed elements as an array.

//num.splice(0,numbers.length);

//4.	Using pop() method: 

/*while(num.length>0){
     num.pop();
 }     

    console.log(num);
*/



//Array reduce:  reduce() method is used to reduce the array to a single value: the function's accumulated result.
/* array.reduce(function(accumulator,currentValue){
  },defaultValue);
  */
//Example: sum of all the elements in array
/*const numbers = [1,2,3,4,5];
const result = numbers.reduce(function(sum, i){
    return sum + i
},0);
console.log(result);
*/


//Only true condition execute:
//let age=(prompt("Enter age : "));
//let result = age > 18 && 'Eligible to cast vote';
//console.log(result);
//console.log(age >= 18 && 'Eligible to cast vote');
//console.log(age < 18 && 'not Eligible to cast vote');










