//Question 1 --> split into 2 objects with odd keys in one and even in another.

let a = { a: 'a', b: 'b', c: 'c', d: 'd', e: 'e', f: 'f', g: 'g' };
let even ={};
let odd = {};
let b = 0;
for(key in a)
{   

    if(b % 2 ==0)
    {
    even[key] = a[key] ;
    }else
    {
        odd[key] = a[key]
    }
    b++;
}
console.log('Even: ',even);
console.log('Odd: ',odd);



//Question 2: 
//array functions in Javascript with example.
//array.findIndex() :- findIndex()  returns the index of the first element in an array that satisfies the provided condition.
/*const numbers = [2,4,5,6,15,0];
const result = numbers.findIndex((number)=> number>10);
console.log(result);*/

//array.fill():- fill() changes element in an array from start index (0) to end index (arr.length).It returns the modified array
//const numbers = [1,2,3,4,5];
//console.log(numbers.fill(0,2,4)); // Fill with 0 from position 2 until position 4
//console.log(numbers.fill(0,2)); //   Fill with 0 from position 2
//console.log(numbers.fill(1)); //  Fill 1 in all positions

//array.at() :- at() takes an integer value and returns the item at that index, allowing for positive and negative integers. Negative integers count back from the last item in the array.
//let numbers = [1,2,3,4,5];
//console.log(numbers.at(1)); // Using an index of 1 the item returned is 2
//console.log(numbers.at(-2)); //Using an index of -2 the item returned is 4

//array.join() :- join() function join the array element and return string value.
/*const numbers = ['U','t','p','a','n','a'];
const result = numbers.join("");
console.log(result);*/


//Question 3
/*const items = [
    { name: 'apples', qty: 30 },
    { name: 'bananas', qty: 40 },
    { name: 'apples', qty: 50 }
];*/

// output 
 /*[
    { name: 'apples', qty: 80 },
    { name: 'bananas', qty: 40 }    
];*/


/*const  newItems =[];
items.forEach((item)=> {
    const result = newItems.find((elm) => elm.name == item.name)
    if (result) {
    result.qty += item.qty;
  } else {
    newItems.push(item);
  }
    
});
console.log(newItems);*/
   

/*const movies = [
    { title: "a", year: 2018, rating: 4.5 },
    { title: "b", year: 2018, rating: 4.7 },
    { title: "c", year: 2018, rating: 3 },
    { title: "d", year: 2017, rating: 4.5 }
  ];*/
  
  //a) get all the movies in 2018 with rating > 4
  /*let result = movies.filter((elm) => elm.rating > 4 && elm.year == 2018);
  console.log(result);/*

  //b) Sort them by their rating  in decending order
   /*let desOrder = movies.sort((a,b) => b.rating - a.rating);
   console.log(desOrder); */

 // c) pick their title
 /*let movieTitle = movies.map((elm) => elm.title);
 console.log(movieTitle);*/

//with function chaining
 /*let newMovies = movies
.filter((elm) => elm.rating > 4 && elm.year == 2018)
.sort((a,b) => b.rating - a.rating)
.map((elm) => elm.title);
console.log(newMovies);*/

 /*const orders = [
    { id: "1", status: "pending" },
    { id: "2", status: "pending" },
    { id: "3", status: "cancelled" },
    { id: "4", status: "shipped" },
  ];
  */
  // output should be (count of occurences )
  /*{
  pending: 2, cancelled: 1, shipped: 1
  }*/
   
  /*const result =  orders.reduce((acc,order) =>
  {
    acc[order.status] = (acc[order.status] || 0 )+1;
    return acc;
  },{});
  console.log(result);
*/
  