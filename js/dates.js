//calculated in ms

let myDate= new Date()
// console.log(myDate)
// console.log(myDate.toISOString()
// )
// console.log(myDate.toJSON())
// console.log(myDate.toString())
// console.log(myDate.toDateString())
console.log(myDate.toTimeString())
console.log(myDate.toLocaleString())

console.log(typeof myDate)

//jan is represented as 0 and dec is represented as 11
//mytimestamp is the number of milliseconds that have passed since jan 1, 1970
let mytimestamp= Date.now()
console.log(mytimestamp)