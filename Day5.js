//Question 1:
const people = [
  {id: "1", name: "Leigh", age: 35 },
  {id: "2", name: "Jenny", age: 40 },
  {id: "3", name: "Heather", age: 28 },
];
// 1. count number of people
//console.log('number of people: ',people.length);


// 2. sum of ages

/*sumAge = people.reduce((acc, value) => acc + value.age, 0);
console.log(sumAge);*/

/*let add =0;
for (i of people)
{
  add += i.age;
}
console.log('sum of ages: ',add);*/

//3.  get array of names

let names = people.map((elm) => elm.name);
console.log(names);
/*let names = [];
for (let i of people)
{
   names.push(i.name);
}
console.log(names);
*/


// 4. find max age

/*const maxValue = people.reduce((acc, val) => (acc.age > val.age ? acc : val ),0);
console.log("Max age: ",maxValue.age);*/

/*let maxAge =0;
for ( i of people )
{
  if (i.age >maxAge)
  {
    maxAge = i.age;
  }
}
console.log('Maximum age: ',maxAge); */

// 5. find min age
/* const minValue = people.reduce((acc, val) => (acc.age < val.age ? acc : val),0);
console.log("Min age: ",minValue.age); */

/*let minAge = people[0].age;

for ( i of people )
{
  if (i.age < minAge)
  {
    minAge = i.age;
  }
}
console.log('Minimum age: ',minAge);*/

// 6. find by name
/*let res1 = people.find((elm) => elm);
console.log(res1);*/

//Question 2:
// find count occurences
/*const orders = [
  { id: "1", status: "pending" },
  { id: "2", status: "pending" },
  { id: "3", status: "cancelled" },
  { id: "4", status: "shipped" },
];
const count = orders.reduce(function(acc,curr){
   acc[curr.status] = (acc[curr.status] || 0) + 1;
    return acc;
},{});
console.log(count);*/
/*let result = orders.reduce(function(acc,value) {  
    return {acc,order.status == order.value };
})
console.log(result);*/

//Question 3:
//const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
// Get 21 and older
/*let result = ages.filter((elm) => elm >=21);
  console.log(result.sort());*/

//Question 4: Learn about sorting an array in Javascript.
//const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
// sort ages
/*let res = ages.sort((c,d) => c-d);
console.log(res);*/

//Question 5:
/*const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];*/



// Filter Retail companies

//let retailCompany = companies.filter((company)=> company.category =='Retail');
//console.log(retailCompany);

//Get companies that lasted for 10 or more years

//let result = companies.filter((company) => company.end - company.start >=10);  
//console.log(result); 


// create array of company names

//let companyName = companies.map((company)=>company.name);
//console.log(companyName);

// Get total years for all companies

//let totalYears = companies.map((company) => company.end-company.start);
//console.log(totalYears);

//Sort companies by sort year

//let result = companies.sort((a,b) => a.start - b.start);
//console.log(result);

