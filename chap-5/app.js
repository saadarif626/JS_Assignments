        //Question-1 and 2

var num1 = +prompt ('enter first number')
var num2 = +prompt ('enter second number')

document.write('the sum of ' +num1 +' and' +num2 +' is ' +Number (num1+num2))
document.write('the subract of ' +num1 + ' and' +num2 +' is ' +Number(num1-num2))
document.write('the product of ' +num1 + ' and' +num2 +' is ' +Number(num1*num2))
document.write('the division of ' +num1 + ' and' +num2 +' is ' +Number(num1/num2))
document.write('the modulus of ' +num1 + ' and' +num2 +' is ' +Number(num1%num2))

            //question-3
var new_num
document.write('value after variable declaration is ' + new_num)
var new_num = 50
document.write('initial value :' + new_num)
++new_num
document.write('value after increment is :' + new_num)
new_num = new_num + 7
document.write('value after addition is :' + new_num)
--new_num
document.write('value after decrement is :' + new_num)

new_num2 = 3
document.write('the reminder is :' + new_num % new_num2)


            // Question 4

var ticket = 600;

var SumTicket = ticket * 5;

document.write("Total cost to buy 5 tickets to a movie is " +SumTicket +"PKR" +"<br/>  "


            //question-5
var number1 = 3
document.write('table of 3 </br></br>')
document.write(' 3 x 1 = ' + number1 +"</br>")
document.write(' 3 x 2 = ' + number1*2 +"</br>")
document.write(' 3 x 3 = ' + number1*3 +"</br>")
document.write(' 3 x 4 = ' + number1*4 +"</br>")
document.write(' 3 x 5 = ' + number1*5 +"</br>")
document.write(' 3 x 6 = ' + number1*6 +"</br>")
document.write(' 3 x 7 = ' + number1*7 +"</br>")
document.write(' 3 x 8 = ' + number1*8 +"</br>")
document.write(' 3 x 9 = ' + number1*9 +"</br>")
document.write(' 3 x 10 = ' + number1*10 +"</br>") 


        // Question 6

var celsius = 31;
var fahrenheit = 90;

var CF = (celsius * 9) / 5 + 32;
var FC = ((fahrenheit - 32) * 5) / 9;

document.write(celsius + "C is " + CF + "F" + "<br/>");
document.write(fahrenheit + "F is " + FC + "C" + "<br/><br/><br/>");

            // Question 7

var item1 = 650;
var item2 = 100;
var charges = 100;
var q_1 = prompt("How many quantity of item 1?");
var q_2 = prompt("How many quantity of item 2?");

alert(quantity1);
alert(quantity2);

document.write("Price of item 1 is " + item1 + "<br/>")
document.write("Price of item 2 is " + item2 + "<br/>")
document.write("Quantity of item 1 is " + q_1 + "<br/>")
document.write("Quantity of item 2 is " + q_2 + "<br/>")
document.write("Shipping charges is " + charges + "<br/>")

document.write("Total cost of your order is " + Number(item1 * quantity1 + item2 * quantity2 + shipping) + "<br/><br/><br/>")

      // Question 8

var marks = 1000;
var marksObtained = 750;

document.write("Marks Sheet" + "<br/>")

document.write("Total Marks: " + marks + "<br/>")
document.write("Obtained Marks: " + marksObtained + "<br/>")
document.write(
  "Percentage: " + Number((marksObtained / marks) * 100) + "<br/><br/>")

            // Question 9
document.write("Currency in PKR" + "<br/><br/>");

var usd = 104.8;
var pkr = 28;

document.write(
  "The total currency in Pakistani Rupees is: " +Number(10 * usd + 25 * pkr) + "<br/><br/>")


            // Question 10

var num10 = 20;

document.write(
  "The result after the arithmetic operations is: " +
    Number(((num10 + 5) * 10) / 2) +
    "<br/><br/><br/>"
);

        // Question 11

document.write("Age Calculator" + "<br/><br/>");

var currentYear = 2024;
var birthYear = prompt("What is your birth year?");

alert(birthYear);

document.write("Current Year " + currentYear + "<br/>");
document.write("Birth Year " + birthYear + "<br/>");
document.write("Your age is " + Number(currentYear - birthYear) + "<br/><br/><br/>")

