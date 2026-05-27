console.log(null>0)//false
console.log(null==0)//false as equality operator DOES NOT convert null to integer
console.log(null>=0)//true as relational operator converts null to 0 and then compares
//undefined will always give false, equality or relational as it cannot be converted to any value
//=== is strict check it checks value asw as type and does not do type conversion
console.log(null===0)//false
console.log(undefined===0)//false

//type of null is object but it is a bug in javascript and it should have been null
//funtion is funtion
//array is object


//++++++++++++

//memory types: stack and heap

// stack(primitve) gives copy of the value and stored in a different location
// heap(non primitive) gives reference of the value and stored in a different location

// object contents go in heap

let userOne={
    email: "user@gmail.com",
    upi: "jsjs@ysl"
}

//userone is stored in stack but the contents of userone is stored in heap and userone has reference to that location in heap

let userTwo= userOne
//userOne and userTwo both are stored in stack but both refernce values in the heap

userTwo.email= "user2@gmail.com"

console.log(userOne.email)
console.log(userTwo.email)
//both will give user2@gmail.com as even if one value chnaged it will change the value in heap and both userOne and userTwo are referencing to the same location in heap so both will give the same output

userOne.upi= "ppepe@ysl"

console.log(userOne.upi)
console.log(userTwo.upi)
//both will give ppepe@ysl as even if one value chnaged it will change the value in heap and both userOne and userTwo are referencing to the same location in heap so both will give the same output

