//inside object a symbol datatype turns to string, to use it as a symbol datatype we have to use square brackets

const mysym= Symbol("key1")


//object literal syntax
const jsuser={
    name: 'shreshtha',
    "full name": 'shreshtha modi',
    [mysym]: "mykey1",
    age: 20,
    loc: 'odisha',
    email:'shreshthamodi@example.com',
    isLoggedin: false,
    lastLoginDays: ['Monday', 'Tuesday', 'Wednesday']
}

// console.log(jsuser["full name"])
// console.log(jsuser[mysym])//to access the symbol datatype we have to use square brackets and the symbol variable name
// console.log(jsuser["email"])
// console.log(jsuser["age"])

// jsuser.greeting= function(){
//     console.log(`hello my name is: ${this.name} and my email is: ${this.email}`)
// }

// console.log(jsuser.greeting()) 

//object singleton/constructor syntax
// const jsuser2= new Object()
// jsuser2.name= 'shreshtha'
// jsuser2.age= 20
// jsuser2.loc= 'odisha'
// jsuser2.email= 'sm@sm.com'

//object destructuring  

const course={
    coursename: 'javascript',
    price: 999,
    courseInstructor: 'shreshtha modi'
}

//to chnage the name of varialble the syntax should be courseInstructor: instructor

const {courseInstructor}= course

console.log(courseInstructor)

const {courseInstructor: ins}=course
console.log(ins)

const {price, coursename}=course
console.log(price)

//api are in object/ array of objects format
//there is no name just start wid curly or square brackets