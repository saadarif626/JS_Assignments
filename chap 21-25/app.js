// // *******************  Question-1 *******************
// // 1. Write a program that takes two user inputs for first and
// // last name using prompt and merge them in a new variable
// // titled fullName. Greet the user using his full name.

// var firstname=prompt("Enter your first name").toUpperCase();
// var lastname=prompt("Enter your last name").toUpperCase();

// document.write("Hello, " + firstname+" " +lastname+ "! Nice to meet you.");

// // *******************  Question-2 *******************
// // 2. Write a program to take a user input about his favorite
// // mobile phone model. Find and display the length of user
// // input in your browser

// var mobile=prompt("Enter your fav Mobile").toUpperCase();
// var length=mobile.length
// document.write("My fav mobile is:"+" "+mobile+'</br><br/>')
// document.write("The length of the string is:"+" "+length)

//  // *******************  Question-3 *******************
// // Write a program to find the index of letter “n” in the word
// // “Pakistani” and display the result in your browser

// var pak="Pakistani"
// var ind=pak.indexOf('n')

// document.write(`
//     <p>Sting:${pak}<p/>
//     <p> Index of 'n' is:${ind}
//     `)

// // *******************  Question-4 *******************
// // Write a program to find the last index of letter “l” in the
// // word “Hello World” and display the result in your browser.


// var greet="Hello World"
// var indl=greet.lastIndexOf('l')

// document.write(`
//     <p>Sting:${greet}<p/>
//     <p> Index of 'l' is:${indl}
//     `)

// // *******************  Question-5 *******************
// // Write a program to find the character at 3rd index in the
// // word “Pakistani” and display the result in your browser.

// var PK="Pakistani"
// var char=PK.charAt(3)

// document.write(`
//     <p>String:${PK}<p/>
//     <p>Character at index 3 is:${char}
//     `)

// // *******************  Question-6 *******************
// // Repeat Q1 using string concat() method.

// var firstname=prompt("Enter your first name").toUpperCase();
// var lastname=prompt("Enter your last name").toUpperCase();
// var fullName=firstname.concat(lastname)
// document.write("Hello, " + fullName+ "! Nice to meet you.");

// // *******************  Question-7 *******************
// // Write a program to replace the “Hyder” to “Islam” in the
// // word “Hyderabad” and display the result in your browser.

// var hyd=("Hyderabad")
// var isl=hyd.replace("Hydera","Islama")
// document.write(`
//     <p>City:${hyd}<p/>
//     <p>After replacement:${isl}<P/>
//     `)

// // *******************  Question-8 *******************
// // Write a program to replace all occurrences of “and” in the
// // string with “&” and display the result in your browser.

// var message = "Ali and Sami are best friends. They play cricket and football together";
// var updmsg=message.replaceAll("and","&")

// document.write(updmsg)

// // *******************  Question-9 *******************
// // Write a program that converts a string “472” to a number
// // 472. Display the values & types in your browser.

// var num1="472"
// document.write(num1+"</br>")
// document.write(typeof(num1)+"</br>")
// var num2=(parseInt(472))
// document.write(num2+"</br>")
// document.write(typeof(num2))

//  // *******************  Question-10 *******************
// //  Write a program that takes user input. Convert and
// //  show the input in capital letters.

//  var input=prompt("Enter anything")
//  document.write("User input:"+input+"<br/>"+"<br/>")
//  var Uinp=input.toUpperCase()
//  document.write("Upper case:"+Uinp)

// // *******************  Question-11  *******************
// // Write a program that takes user input. Convert and
// // show the input in title case.

// var inpu=prompt("Enter your Input")

// document.write("User Input:"+inpu+"<br/>"+"<br/>")
// var inp1=inpu.slice(0,1)
// var inp2=inp1.toUpperCase()
// var inp3=inpu.slice(1,inpu.length)
// document.write("Upper Case:"+inp2+inp3)

// // *******************  Question-12  *******************
// // Write a program that converts the variable num to
// // string.
// // var num = 35.36 ;
// // Remove the dot to display “3536” display in your browser.

// var number=35.36
// var number1=number.toString()
// var str=number1.replace(".","")
// document.write("Number:"+" "+number+"<br/>"+"<br/>")
// document.write("Result:"+" "+str)

// // *******************  Question-14   *******************
// // You have an array
// // A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// // Write a program to enable “search by user input” in an
// // array. After searching, prompt the user whether the given
// // item is found in the list or not.
// // Note: Perform case insensitive search. Whether the user
// // enters cookie, Cookie, COOKIE or coOkIE, program
// // should inform about its availability.

// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
//  var userInput = prompt("Welcome to the bakery! What do you want to search for?").toLowerCase();
// var found=false
  
// var userlower = userInput.toLowerCase();
// var itemsindex;


// for (var i = 0; i < A.length; i++) {
//     if (A[i].toLowerCase() === userlower ) {
//         found = true,itemsindex=i;
//         break;
//     }
// }
// if (found) {
//             alert(userlower + " is available at index " + itemsindex + " in our bakery.");
//         } else {
//             alert("We are sorry. " + userlower+ " is not available in our bakery.");
//         }

// *******************  Question-13   *******************
// Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.

var username=prompt("Enter your username");


for(var i = 0; i < username.length ;  i++){
    var char=username.charCodeAt(i);
    if (username[i].charCodeAt=== 33||
        username[i].charCodeAt=== 44||
        username[i].charCodeAt=== 46||
        username[i].charCodeAt=== 64){
        var valid="false";
        }else( valid="true")
    }
if(valid==="false"){document.write("Enter a valid username")

}else{document.write("Your username is valid")}

