//Adding elements in array (first/last/any specific index)
const array = [5,6,7,9,3];
array.unshift(1);
// unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
array.push(18,20);
// push() method adds one or more elements to the end of an array and returns the new length of the array
array.splice(2,0,"u",5);
// The splice() method adds and removes array elements to the specific index of an array.
console.log(array);


//Removing elements from an array (first/last/any specific index)
const arr = [5,6,7,9,3,4,8];
arr.pop();
//The pop() method removes the last element from an array
arr.shift();
//The shift() method removes the element at the zeroth index
arr.splice(4,2);
console.log (arr);


//find/filter elements in array (primitives data types)
//Find the value of the first element with a value over 18.
/*
const ages = [3,19, 10, 18, 20,21];
let result = ages.find(function(element,index,array)
{
    return array[index] > 18;
});
console.log(result);
          
*/

//return all numbers that are greater than 7
/*  let numbers = [1, 3, 6, 8, 11];
  let greaterThan = numbers.filter(function(number) {
    return number > 7;
  });
  console.log(greaterThan);
*/    

//find/filter elements in array (reference types/ array of objects)
//return all creatures with a habitat that is equal to Ocean:

/*let creatures = [
    {name: "Shark", habitat: "Ocean"},
    {name: "Lion", habitat: "Savanna"},
    {name: "Deer", habitat: "Jungle"},
    {name: "Whale", habitat: "Ocean"},
    {name: "Monkey", habitat: "Jungle"}
  ];
  let oceanCreatures =  creatures.find(function(creature) {
    return creature.habitat == "Ocean";
  });
  console.log(oceanCreatures);
                   
let creatures = [
    {name: "Shark", habitat: "Ocean"},
    {name: "Lion", habitat: "Savanna"},
    {name: "Deer",  habitat: "Jungle"},
    {name: "Whale", habitat: "Ocean"},
    {name: "Monkey", habitat: "Jungle"}
  ];
  let oceanCreatures =  creatures.filter(function(creature) {
    return creature.habitat == "Ocean";
  });
console.log(oceanCreatures);
*/
