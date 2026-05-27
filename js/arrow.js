//this tells us current context
//this is only used under objects not functions
// console.log(this); //window object


//arrow functions do not have their own 'this' context, they inherit it from the parent scope 

// const chai= () => {
//     let username= "shreshtha"
//     console.log(this); //window object
// }

// chai();

const addtwo= (num1, num2) => {
    return num1+num2;
}

console.log(addtwo(5, 10)); //15

//if wrapped in {} we need to use return keyword

const addthree= (num1, num2, num3) => {
    return num1+num2+num3;
}

//but if we remove the {} we can directly return the value without using return keyword, this is implicit
//for objects you will have to wrap the object in parentheses to avoid syntax errors

const addthreeImplicit= (num1, num2, num3) => num1+num2+num3;
console.log(addthreeImplicit(5, 10, 15)); //30      

//eg of objec rtuen
const createUser= (name, age) => ({name: name, age: age});
console.log(createUser("shreshtha", 25)); //{name: "shreshtha", age: 25}

//example of object return in addthree function
const addthreeObject= (num1, num2, num3) => ({result: num1+num2+num3});
console.log(addthreeObject(5, 10, 15)); //{result: 30}

