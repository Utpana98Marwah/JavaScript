//slice() :- slice() function return selected elements in array as a new array. It include first index and exclude last index.
/*const numbers = [7,2,8,4,9,5];
const result = numbers.slice(1, 3);
console.log(result);
*/


//reverse() :-  reverse() function mutate the original array and also reverse the array.
/*const numbers = [1,2,3,4,5];
numbers.reverse();
console.log(numbers);
*/


//join() :- join() function join the array element and return string value.
/*const numbers = ['U','t','p','a','n','a'];
const result = numbers.join("");
console.log(result);
*/


/*const numbers = ['delhi', 'mumbai', 'chandigarh'];
const result = numbers.join(":");
console.log(result);
*/

//split() :- The split() function splits a string into an array and return new array.

/*let text = "How are you doing today?";
let newText = text.split(" ");
console.log(newText);*/

//join & split :-

/*let page = "online compiler";
const arr = page.split(" ");
const result = arr.join('-');
console.log(result);
*/


//indexOf() :-  indexOf() is an alternative to the include() function. If value exists in the array, it returns the index value; else, it returns -1.

/*const numbers = [2,4,6,8,9];
const index = numbers.indexOf(6);  // return index 1
const index = numbers.indexOf(1); // return -1
console.log(index);
*/


//concat() :- The concat() function join two or more arrays together.

/*const numbers1 = [1,2,3];
const numbers2 = [4,5,6];
const result = numbers1.concat(numbers2);
console.log(result);
String and its methods: - 
const str = 'My name is Utpana';
console.log(str);
console.log(str.length);
console.log(str[0]);
console.log(str.includes('Utpana'));
console.log(str.indexOf('is'));
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.length);
result = (str.trim()); //remove spaces from left and right
console.log(result.length);
result1 = (str.trimLeft()); //remove space from left
console.log(result1.length);
result2 = (str.trimRight()); //remove space from right
console.log(result2.length);
console.log(str.split(" "));
console.log(str.replace('Utpana', 'Uttu'));  
console.log(str.startsWith('My'));
*/



//Arrow function: - Arrow function allow us to write shorter function.If the function has only one statement, and the statement returns a value, you can remove the brackets and the return keyword.
/*let show = (fname, lname) => {
            console.log(`Hi ${fname} ${lname}`);
            }
*/

/*let show = fname => console.log(`Hi ${fname}`);

             show('Utpana','Marwah');
*/

/*
High Order Functions:

forEach():-  

let arr = [1,2,5,6];
let result = arr.forEach(function(element,index)
{
    return arr[index] = element*10;
});
console.log(arr);
with Arrow function :-
let arr = [1,2,5,6];
const res = arr.forEach((elm,index) => arr[index] = elm * 10);
console.log(arr);
map():- 
let arr = [2,7,9,7,5];
let result = arr.map(function(elm,i)
{
return arr[i] = elm +3;
});
console.log(result);
with Arrow function :-
let arr = [2,7,9,7,5];
let result = arr.map((elm,i) => arr[i] = elm + 3 );
console.log(result);


filter() :- 
const numbers = [8,2,3,4,5];
const result = numbers.filter(function(number)
{
    return number % 2 == 0; //return even number
});
console.log(result);
with Arrow function :-
const numbers = [8,2,3,4,5];
const result = numbers.filter((number) => number % 2 == 0);
console.log(result);
reduce ():-
const numbers = [1,2,3,4,5];
const result = numbers.reduce(function(sum, i){
    return sum + i
},0);
console.log(result);
with Arrow function: -
const numbers = [1,2,3,4,5];
const result = numbers.reduce((sum, i) => sum + i,0);
console.log(result);

*/

/*
IIFE: - (Immediately Invoked Function Expression)
1.	let result = (function(a,b){
            console.log('hello',a*b);
            })(2,3);

2.	var result = function (state) {
   console.log("Welcome to ", state)
   };
result("Himachal Pradesh!");

*/

//Anonymous Function: - anonymous function is a function without a name.
/*let show = function() {
    console.log('Anonymous function');
};
show();
*/






