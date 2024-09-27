//                 //Question-2

var num1=+prompt('Enter the 1st Integer');
var num2=+prompt('Enter the 2nd Integer');

if( num1===num2){
    alert("Both Integers are equal")
} else if(num1>num2){
    alert("1st Integer is greator than 2nd")
}
    else if( num2>num1){
        alert("2nd Integer is greator than 1st")
    }
else('Enter correct Integer')


//                 //Question-3

var usernum = +prompt("Enter a number")

if(usernum===0){alert("input number is Zero")}

else if(usernum > 0){
    alert("Input number is Positive")
}
else if(usernum < 0){
    alert("Input number is Nagative")
}
else{("Enter correct number")}


//         //Question-6

var usertime=+prompt('Enter your time in 24 hours format')
 var greeting;
 var usertime= 13;
 if (usertime < 18) {
      alert(" Good Night")
 }
        else{      
              alert( "Good evening")
        }

//                 //Question-5


var userpass = "admin123"

var inputpass = prompt("Please enter your password")

if(inputpass == ""){
    alert("Please enter your password")
} else if (inputpass !== userpass){
alert("Wrong password")
} else if (inputpass === userpass){
    alert("Correct password")
} else{alert(" Please Enter Password")}


//                 //Question-7

 var usertime =+prompt("Please enter time in 24 hours clock")
 if (usertime >= 0000 && usertime <1200){
    alert ( "Good Morning")
 
}  else if (usertime >= 1200 && usertime <1700){
    alert("Good afternoon")
}  else if (usertime >= 1700 && usertime <2100){
    alert("Good evening")
} else if (usertime >= 2100 && usertime <2359){
    alert("Good night")
}  else {alert ("enter correct time")}

            //Question-1

// var input=+prompt("Please enter any Text or Number ")

// var result = input.charCodeAt(1-122)


// if(result <= 57)
//     {
// alert("Your Input is a number ")
//  }
//  else if (result >= 65 && result== 90){
// alert("Your Input is Uppercase letters")
//  }
// else if (result >= 97 && result <= 122 ){
// alert("Your input is Lowercase letter") 
// }
// else{alert("Enter correct Input")}



// //         //question-4

var letter=prompt("Enter any Alphabet")

if( letter=='a' || letter=='e' || letter=='i' || letter=='o' || letter=='u')

{
    alert('Input letter  is vowel')
} else if(letter=""){
    alert("pleaese input a character")
}else(
    alert('Your input is a consonant')
)