// *******************  Question-1 *******************
var multiarr=[[ ] ,[ ] ,[ ]]


// *******************  Question-2 *******************

var matrix=[[0,1,2,3],[1,0,1,2],[2,1,0,1]]

document.write(matrix[0] +"<br/>"+ matrix[1]+"<br/>"+matrix[2]) 


// *******************  Question-3*******************

for (let num = 1; num <= 10; num++) {
    console.log(num);
}

// *******************  Question-4 *******************

let tableNumber = +prompt("Enter the number to print the multiplication table: ");
let tableLength = +prompt("Enter the length of the multiplication table: ");

for (let i = 1; i <= tableLength; i++) {
    document.write(tableNumber+"x"+i+"="+ tableNumber*i+"<br/>");
}

// *******************  Question-5 *******************

let fruits = ["apple", "banana", "mango", "orange", "strawberry"];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// *******************  Question-8 *******************

var number = [24, 53, 78, 91, 12];
var largestnum = number[0]; 

for (let i = 1; i < number.length; i++) {
    if (number[i] > largestnum) {
        largestnum= number[i]; 
    }
}

console.log("The largest number is: " + largestnum);

// *******************  Question-9 *******************

var number = [24, 53, 78, 91, 12];
var smallestnum = number[0]; 

for (let i = 1; i < number.length; i++) {
    if (number[i] < smallestnum) {
        smallestnumnum= number[i]; 
    }
}

console.log("The largest number is: " + smallestnumnum);

// *******************  Question-6 *******************
        // a Counting
for(var i = 1; i<=15; i++)
{document.write(`${i},`)}
        // b  Reverse counting
for(var i = 20; i >= 1; i--)
    {document.write(`${i},`)}
        // c Even Number
for(var i = 1; i <= 20; i++)
{if (i%2 === 0){document.write(`${i} <br>`)}}
        //  d odd Number
for(var i = 1; i <= 20; i++)
    {if (i%2 !== 0){document.write(`${i} <br>`)}}
    
            // e Series Number
 for(var i = 1; i <= 20; i++)
{if (i%2 === 0){document.write(`${i}k <br>`)}}

// *******************  Question-7 *******************

var backeryitems = ['cake', 'apple pie', 'cookie', 'chips', 'patties']
var searchitems = prompt('Wlcome to my backery Please enter backery items do you wanna search')
var avalable = ("No")
var index_value;

for(var i = 0; i<= backeryitems.length; i++)
{ if(backeryitems[i] == searchitems){avalable = "Yes", index_value = i }}
if(avalable == "Yes") 
    {document.write(`Your search item.. ${searchitems} avalable at index No..${index_value}`)
}
else{document.write(`Sorry!... ${searchitems} is not available`)}

// *******************  Question-10 *******************

for( var i = 1; i <= 100; i++)
     {if(i%5 == 0){document.write(i)}}
    





















