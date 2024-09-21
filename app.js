            //Question-1

var num_1=10
document.write("The value of a is:"+" "+num_1+"</br></br></br>")

var num_1=10
var newnum_1=++num_1

document.write('The vaule of ++a is:'+" "+newnum_1+"</br>")
document.write(' Now the vaule of a is:'+" "+newnum_1+"</br></br></br>")

var num_2=11
var newnum_2=num_1++

document.write('The vaule of a++ is:'+" "+newnum_2+"</br>")
document.write(' Now the vaule of a is:'+" "+12+"</br></br></br>")

var num_3=12
var newnum_3=--num_1

document.write('The vaule of --a is:'+" "+newnum_3+"</br>")
document.write(' Now the vaule of a is:'+" "+newnum_3+"</br></br></br>")

var num_4=11
var newnum_4=num_1--

document.write('The vaule of a++ is:'+" "+newnum_4+"</br>")
document.write(' Now the vaule of a is:'+" "+10+"</br></br></br>")


//                 //Question-3

var username=prompt("Enter your name") 
alert("Welcome"+" "+username+"! We appreciate you choosing us")  

                //Question-5

var table_num=+prompt("Enter Number for Table",5)
document.write('<h1>Multiplication Table of'+" "+table_num+'</br></h1>')
document.write(' 3 x 1 = ' + table_num +"</br></br>")
document.write(' 3 x 2 = ' + table_num*2 +"</br></br>")
document.write(' 3 x 3 = ' + table_num*3 +"</br></br>")
document.write(' 3 x 4 = ' + table_num*4 +"</br></br>")
document.write(' 3 x 5 = ' + table_num*5 +"</br></br>")
document.write(' 3 x 6 = ' + table_num*6 +"</br></br>")
document.write(' 3 x 7 = ' + table_num*7 +"</br></br>")
document.write(' 3 x 8 = ' + table_num*8 +"</br></br>")
document.write(' 3 x 9 = ' + table_num*9 +"</br></br>")
document.write(' 3 x 10 = ' + table_num*10 +"</br>") 

                //Question-2

var a=2
var b=1

var result=--a - --b + ++b + b--
//           //1  -  0   +  1 + 1
//  //--a =1
// // --a - --b =1
// // --a - --b + ++b =2
// // --a - --b + ++b + b-- =3

// //a=1
// //b=0

alert("The final result will be"+" "+3+"!")


            //Question-6

var sub1=prompt("Enter your 1st Subject")
var sub2=prompt("Enter your 2nd Subject")
var sub3=prompt("Enter your 3rd Subject")

var totalmarks=100

var mark_sub1=+prompt("Enter Marks of" +" "+sub1)
var mark_sub2=+prompt("Enter Marks of" +" "+sub2)
var mark_sub3=+prompt("Enter Marks of" +" "+sub3)

var result_1=(mark_sub1*totalmarks/totalmarks)
var result_2=(mark_sub2*totalmarks/totalmarks)
var result_3=(mark_sub3*totalmarks/totalmarks)

var totres=(totalmarks+totalmarks+totalmarks)
var totobt=(mark_sub1+mark_sub2+mark_sub3)
var finperc=(totobt*100/totres)

document.write(` 
    <table>
            <tr>
                    <th> Subject </th> 
                    <th>Total Marks</th>
                    <th>Obtained Marks</th>
                    <th>Percentage</th>
            </tr>
                <tr>
                    <td> ${sub1 }</td>
                    <td> ${ totalmarks}</td>
                    <td> ${mark_sub1 }</td>
                    <td> ${ result_1}%</td>
                </tr>
                <tr>
                    <td> ${ sub2}</td>
                     <td> ${totalmarks }</td>
                     <td> ${mark_sub2 }</td>
                     <td> ${result_2 }%</td>
                </tr>
                <tr>
                     <td> ${ sub3}</td>
                    <td> ${totalmarks }</td>
                     <td> ${ mark_sub3}</td>
                     <td> ${result_3 }%</td> 
                </tr>
                <tr>
                    <td> ${"  "}</td>
                    <td> ${totres }</td>
                     <td> ${totobt}</td>
                     <td> ${finperc }%</td> 
                </tr>
    </table>
    `)