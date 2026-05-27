//var has scope issues it can get overwritten by other variables with the same name, it takes the value of the last variable with the same name, it can be redeclared in the same scope and it is function scoped
//let and const have block scope and they cannot be redeclared in the same scope

var c=300
if(true)
{
    var c=500;
}
console.log(c)//500

const addtwo= function(num)
{
    return num+2;
}
console.log(addtwo(5))

// //function(num)
// {
//     return num+2;
// } this is an anonymous fucntion , a function without a name and it cannot be called directly but it can be assigned to a variable and then called using that variable

//addtwo now contains a function and we can call that function using addtwo() and it will return the result of that function, a variable whihc store a function is called a function expression and the function itself is called an anonymous function because it does not have a name

