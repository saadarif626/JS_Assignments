// *******************  Question-1 *******************
// 1. Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.

document.write("<h3>------------ Question-1  ------------<h3>")
var firstname=prompt("Enter your first name").toUpperCase();
var lastname=prompt("Enter your last name").toUpperCase();

document.write("Hello, " + firstname+" " +lastname+ "! Nice to meet you.");

// *******************  Question-2 *******************
// 2. Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser

document.write("<h3>------------ Question-2  ------------<h3>")
var mobile=prompt("Enter your fav Mobile").toUpperCase();
var length=mobile.length
document.write("My fav mobile is:"+" "+mobile+'</br><br/>')
document.write("The length of the string is:"+" "+length)

 // *******************  Question-3 *******************
// Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser

document.write("<h3>------------ Question-3  ------------<h3>")
var pak="Pakistani"
var ind=pak.indexOf('n')

document.write(`
    <p>Sting:${pak}<p/>
    <p> Index of 'n' is:${ind}
    `)

// *******************  Question-4 *******************
// Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser.

document.write("<h3>------------ Question-4  ------------<h3>")
var greet="Hello World"
var indl=greet.lastIndexOf('l')

document.write(`
    <p>Sting:${greet}<p/>
    <p> Index of 'l' is:${indl}
    `)

// *******************  Question-5 *******************
// Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser.

document.write("<h3>------------ Question-5  ------------<h3>")
var PK="Pakistani"
var char=PK.charAt(3)

document.write(`
    <p>String:${PK}<p/>
    <p>Character at index 3 is:${char}
    `)

// *******************  Question-6 *******************
// Repeat Q1 using string concat() method.

document.write("<h3>------------ Question-6  ------------<h3>")
var firstname=prompt("Enter your first name").toUpperCase();
var lastname=prompt("Enter your last name").toUpperCase();
var fullName=firstname.concat(lastname)
document.write("Hello, " + fullName+ "! Nice to meet you.");

// *******************  Question-7 *******************
// Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.

document.write("<h3>------------ Question-7  ------------<h3>")
var hyd=("Hyderabad")
var isl=hyd.replace("Hydera","Islama")
document.write(`
    <p>City:${hyd}<p/>
    <p>After replacement:${isl}<P/>
    `)

// *******************  Question-8 *******************
// Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.

document.write("<h3>------------ Question-8  ------------<h3>")
var message = "Ali and Sami are best friends. They play cricket and football together";
var updmsg=message.replaceAll("and","&")

document.write(updmsg)

// *******************  Question-9 *******************
// Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.

document.write("<h3>------------ Question-9  ------------<h3>")
var num1="472"
document.write(num1+"</br>")
document.write(typeof(num1)+"</br>")
var num2=(parseInt(472))
document.write(num2+"</br>")
document.write(typeof(num2))

 // *******************  Question-10 *******************
//  Write a program that takes user input. Convert and
//  show the input in capital letters.

document.write("<h3>------------ Question-10  ------------<h3>")
 var input=prompt("Write anything to convert in CAPITAL")
 document.write("User input:"+input+"<br/>"+"<br/>")
 var Uinp=input.toUpperCase()
 document.write("Upper case:"+Uinp)

// *******************  Question-11  *******************
// Write a program that takes user input. Convert and
// show the input in title case.

document.write("<h3>------------ Question-11  ------------<h3>")
var inpu=prompt("Enter any word to show in title cas")

document.write("User Input:"+inpu+"<br/>"+"<br/>")
var inp1=inpu.slice(0,1)
var inp2=inp1.toUpperCase()
var inp3=inpu.slice(1,inpu.length)
document.write("Upper Case:"+inp2+inp3)

// *******************  Question-12  *******************
// Write a program that converts the variable num to
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.

document.write("<h3>------------ Question-12  ------------<h3>")
var number=35.36
var number1=number.toString()
var str=number1.replace(".","")
document.write("Number:"+" "+number+"<br/>"+"<br/>")
document.write("Result:"+" "+str)

// *******************  Question-14   *******************
// You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability.


document.write("<h3>------------ Question-14  ------------<h3>")
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
 var userInput = prompt("Welcome to the bakery! What do you want to search for?").toLowerCase();
var found=false
  
var userlower = userInput.toLowerCase();
var itemsindex;


for (var i = 0; i < A.length; i++) {
    if (A[i].toLowerCase() === userlower ) {
        found = true,itemsindex=i;
        break;
    }
}
if (found) {
            document.write(userlower + " is available at index " + itemsindex + " in our bakery.");
        } else {
            document.write("We are sorry. " + userlower+ " is not available in our bakery.");
        }

// *******************  Question-13   *******************
// Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.

document.write("<h3>------------ Question-13  ------------<h3>")
var pass=prompt("Enter your username");
username=pass.length
for(var i = 0; i <= username.length ;  i++){
    var char=username.charCodeAt(i);
    if (char=== 33||
       char=== 44||
       char=== 46||
       char=== 64){
        var valid="false";
        }else( valid="true")
    }
if(valid==="false"){document.write("Enter a valid username")

}else{document.write("Your username is valid")}


// *******************  Question-16  *******************
// Write a program to convert the following string to an
// array using string split method.
// var university = “University of Karachi”;

document.write("<h3>------------ Question-16  ------------<h3>")
var ku = "University of Karachi";
var uni = ku.split("");
for (var i = 0; i < uni.length; i++){
    document.write(uni[i])
}

document.write(`Question no 16 <br  /><br  />`);
var university = "University of Karachi";
var uniArray = university.split("");
for (var i = 0; i < uniArray.length; i++) {
  document.write(`${uniArray[i]} <br /> `);
}

 // *******************  Question-17  *******************
// Write a program to display the last character of a user
 // input.


 document.write("<h3>------------ Question-17  ------------<h3>")
var useri=prompt("Prompt any word")
var lastchar=useri[useri.length-1]
document.write("User input:"+useri+"<br/>")
document.write("The last character of the input is:"+lastchar)

// // *******************  Question-18  *******************
// You have a string “The quick brown fox jumps over the 
// lazy dog”. Write a program to count number of 
// occurrences of word “the” in given string

document.write("<h3>------------ Question-18  ------------<h3>")
var sen=("The quick brown fox jumps over the lazy dog")
document.write("Sentence;"+sen+"<br/>")
var senlow=sen.toLowerCase()
var wordssen=senlow.split(" ");
var count = 0;
for (var i = 0; i < wordssen.length; i++) {
  if (wordssen[i] === "the") {
    count++;
  }
}
document.write(`The word 'the' appears  ${count}  times in the given string.`);



