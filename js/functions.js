function loginUserMessage(username)
{
    if(username === undefined)
        //or if(!usernmae)
    // or put default value in the parameter like function loginUserMessage(username="shresh") so no need of this if block
    {
        console.log("No username provided.");
        return;
    }
    return `${username} just logged in`;
}

console.log(loginUserMessage("shreshtha"))//shreshtha just logged in
console.log(loginUserMessage())//No username provided. undefined

//for shopping cart
//... is rest operator and it collects the remaining elements of an array into a new array or to collect the remaining properties of an object into a new object
function calcprice(...num1)
{
    return num1;
}
console.log(calcprice(5))//5

console.log(calcprice(5,10, 100))

user={
    name: 'shreshtha',
    age:20
}

function handleObject(obj)
{
    console.log( `name is ${obj.name} and age is ${obj.age}`);
}

handleObject(user)//name is shreshtha and age is 20

//or

handleObject({name: 'shreshtha', age: 20})//name is shreshtha and age is 20

