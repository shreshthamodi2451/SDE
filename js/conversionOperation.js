//NaN a special value in JavaScript that stands for "Not a Number". It is used to represent the result of an operation that cannot produce a valid number. For example, if you try to divide a number by zero, you will get NaN as the result.
//so basically the conversion operation happens anyways but the out is NaN

let score= 30
let score2="20abc"

console.log(typeof score)//number
console.log(typeof score2)//string

let value= score+score2
console.log(value)
//string + number will concatenate and give string as output

let valueint= Number(score2);
console.log(typeof valueint)//number
console.log(score+valueint);
//after chaning score2 to 20abc/undefined, it gives NaN as output because it cannot convert 20abc to a number. If it was just "20", then it would have given 50 as output. if i had made it to true then it would give 1 and for false 0

//in boolean; true=1 and false=0
//"" gives false and non empty is true

//operations

console.log(2+3)//5
console.log("2"+"3")//23
console.log(2-"3")//-1
console.log(2*"3")//6
console.log(2/"3")//0.6666666666666666
console.log(2%"3")//2
//in addition operator, if one of the operands is a string, it will concatenate. In other operations, it will try to convert the string to a number and then perform the operation. If the string cannot be converted to a number, it will give NaN as output.

console.log(2+true)//3
console.log(2+false)//2
console.log(2+undefined)//NaN
console.log(2+null)//2

console.log(2+2+"3")//43 because 2+2 is evaluated first and gives 4 and then 4+"3" gives "43"
console.log("2"+2+2)//222 because "2"+2 gives "22" and then "22"+2 gives "222"

console.log(2*"3"+2)//8 because 2*"3" gives 6 and then 6+2 gives 8

console.log(true) //give true
console.log(+true) //gives 1 because it converts true to 1
console.log(+false) //gives 0 because it converts false to 0
console.log(+"") //gives 0 because it converts empty string to 0
console.log(+"abc") //gives NaN because it cannot convert "abc" to a number