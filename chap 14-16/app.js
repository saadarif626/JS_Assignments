// *******************  Question-1 *******************

var stdNames = [];

// *******************  Question-2 *******************

var stdNames = new Array();

// *******************  Question-3 *******************

var stdNames = ["Ali", "Asad", "Umar", "Daud"];

// *******************  Question-4 *******************

var nums = [1, 2, 3, 4, 5];


// *******************  Question-5 *******************

var values =[true, false];


// *******************  Question-6 *******************

var mixedval = ["Ali", 2, true, [1, 2, 3]];


// *******************  Question-7 *******************

var degrees= ["SSC", "HSC", "BCS","BS","BCOM", "MS", "M.Phil", "PhD"]

document.write("1)"+degrees[0]+'</br>') 
document.write("2)"+degrees[1]+'</br>') 
document.write("3)"+degrees[2]+'</br>') 
document.write("4)"+degrees[3]+'</br>') 
document.write("5)"+degrees[4]+'</br>') 
document.write("6)"+degrees[5]+'</br>') 
document.write("7)"+degrees[6]+'</br>') 
document.write("8)"+degrees[7]+'</br>') 


// *******************  Question-8 *******************

var std_names=["Abu Bakar","Umar","Usman","Ali"]

var score1= +prompt('Enter your marks')
var score2= +prompt('Enter your marks')
var score3= +prompt('Enter your marks')

var scores=[score1,score2,score3]
var totmarks= 500

var result1= scores[0]*100/totmarks
var result2= scores[1]*100/totmarks
var result3= scores[2]*100/totmarks

document.write(`

    <p>Score of ${std_names[0]} is ${scores[0]} and result is ${result1}</p>
    
    <p>Score of ${std_names[1]} is ${scores[1]} and result is ${result2}</p>
    
    <p>Score of ${std_names[2]} is ${scores[2]} and result is ${result2}</p>

    `)


// *******************  Question-10 *******************


var studentScores = [320,230,480,120];

studentScores.sort(function(a, b) {
  return a - b;
});

console.log("Order scores of stuedents:", studentScores);


document.write("Order scores of students:", studentScores)



// *******************  Question-11 *******************

var cities=["karachi","Lahore","Islamabad","Multan","Quetta"]

 var selectedcities=cities.slice(3,5)
 console.log(selectedcities)
document.write=(selectedcities)


*******************  Question-12 *******************

var arr = ['This',' is ',' my','cat'];
var arrresult= arr.join("");
console.log(arrresult)

// *******************  Question-13 *******************

var devices = [];
devices.push("Keyboard");
devices.push("Mouse"); 
devices.push("Printer");
devices.push("Monitor");

var first = devices.shift(); 
console.log(first);         

var second = devices.shift(); 
console.log(second);        

var third = devices.shift();  
console.log(third);         


var fourth= devices.shift();  
console.log(fourth);         

// *******************  Question-14 *******************


var devices = [];

devices.push("Keyboard"); 
devices.push("Mouse"); 
devices.push("Printer");
devices.push("Monitor");

var first = devices.pop(); 
console.log(first);       
var second = devices.pop(); 
console.log(second);      

var third = devices.pop();  
console.log(third);      

var fourth = devices.pop();  
console.log(fourth);      


// *******************  Question-15 *******************

var mobcomp = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

document.write('<select>');

for (var i = 0; i < mobcomp.length; i++) {
    document.write(`'<option value= ${mobcomp[i]}> ${mobcomp[i]} </option>`);
}
        
document.write('<select>');