        //Question-1

var city=prompt("Enter your city ")  
if(city==="karachi"){ 
alert("Welcome to the city of lights")
}  else{
    alert("Welcome")
}

        //QUestion-2

var gender=prompt("Enter your gender")
if(gender==="male"){
    alert ("Good Morning Sir")
}  else if(gender==='female')
    {
        alert("Good Morning Ma'am")
    }      

        //Question-3

var color=prompt("Enter the Indicated Traffic Color") 
if(color==="red"){
    alert('Must Stop')
}   else if( color==='yellow'){
    alert('Ready to Move')
} else if(color==="green"){
alert("Move Now")
}
   
        //Question-4

var fuel=+prompt('Enter remaining fuel in liters')   
if(fuel <0.25) {
    alert('Please refill the fuel in your car')
}    


        //Question-6

var obtmark=+prompt('Enter obtained marks out of 300')
var totmark=300
var result=(obtmark*100/totmark)

document.write("<h1> MARKS SHEET <h1>  </br>")
document.write  ("Total Marks:"+" "+totmark+"</br> </br>")
document.write   ("Marks obtained:"+" "+obtmark+"</br> </br>")
document.write   ("Percenetage:"+" "+result +"%"+"</br> </br>")

if(result >=80){
 document.write   ('Grade:A-one</br> </br>')
document.write   ('Remarks:Excellent </br> </br>')
} else if(result >=70){
    document.write   ('Grade:A</br> </br>')
   document.write   ('Remarks:Good </br> </br>')
} else if(result >=60){
    document.write   ('Grade:B</br> </br>')
   document.write   ('Remarks:You need to improve </br> </br>')
} else if(result <60){
    document.write   ('Grade:Fail</br> </br>')
   document.write   ('Remarks:Sorry </br> </br>')
}


        // Question no 5


var a = 4;
if (++a === 5) {
  alert("given condition for variable a is true")
}
var b = 82
if (b++ === 83) {
  alert("given condition for variable b is true")              
}
var c = 12
if (c++ === 13) {
  alert("condition 1 is true")
} else if (c === 13) {
  alert("condition 2 is true")
} else if (++c < 14) {
  alert("condition 3 is true")
} else if (c === 14) {
  alert("condition 4 is true")
}
var materialCost = 20000
var laborCost = 2000
var totalCost = materialCost + laborCost
if (totalCost === laborCost + materialCost) {
  alert("The cost equals")
}
if (true) {
  alert("True")
} else if (false) {
  alert("False")
}
if ("car" < "cat") {
  alert("car is smaller than cat")
}


                // Question no 7


var x = +prompt("Guess the secret number")
var y = 6
if (x === y) {
  alert("Bingo! Correct answer")
} else if (x === ++y) {
  alert("Close enough to the correct answer")
}

        // Question no 9


var number = +prompt("Enter any number to check if its even or odd")
if (number % 2 === 0) {
  alert("The number " + number + " is even.")
} else {
  alert("The number " + number + " is odd.")
}

        // Question no 8


var number = +prompt("Enter a number to check if it is divisible by 3:")
if (number % 3 === 0) {
  alert("The number " + number + " is divisible by 3.")
} else if (number % 3 !== 0) {
  alert("The number " + number + " is not divisible by 3.")
}

        // Question no 10


var t = +prompt("Enter your Temperature")
if (t >= 40) {
  var output = "It is too hot outside."
} else if (t >= 30) {
  output = "The Weather today is Normal."
} else if (t >= 20) {
  output = "The Weather today is Cool."
} else if (t >= 10) {
  output = "The Weather today is soo Cool."
}
document.write(output + "</br></br>")

                 // Question no 11


var firNum = +prompt("Enter 1st number")
var secNum = +prompt("Enter 2nd number")
var operator = prompt("Choose any operator operator")
if (operator === "+") {
  document.write("The sum of " +firNum + " & " + secNum + " is " +  +(firNum + secNum) );
} else if (operator === "-") {
  document.write("The subtration of " + firNum + " & " + secondNum +" is "  +(firNum - secNum))
} else if (operator === "*") {
  document.write("The multiply of " +  firNum + " & " + secNum + " is " +(firNum * secNum))
} else if (operator === "/") {
  document.write( "The division of " + firNum + " & " +secNum +  " is " +(firNum / secNum))
} else if (operator === "%") {
  document.write( "The modulus of " +  firNum + " & " + secNum +" is "+(firNum % secNum) )
}
