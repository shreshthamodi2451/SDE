//array creates shallow copy of the array and it does not create deep copy of the array
//shallow copy means it creates a new array but the elements of the array are still referencing to the same location in heap
//deep copy means it creates a new array and the elements of the array are also stored in a different location in heap  

const arr1= [1,2,3,4,5]

arr1.push(6)
arr1.push(7)
console.log(arr1)//[1,2,3,4,5,6,7]

arr1.push(4.5)
console.log(arr1)//[1,2,3,4,5,6,7,4.5]

//join operation is used to join the elements of the array and it returns a string
const joinedString= arr1.join("-")

console.log(joinedString)//1-2-3-4-5-6-7-4.5

//split operation is used to split the string into an array based on the separator
const newArr= joinedString.split("-")

//splice removes elements from an array and returns the removed elements as a new array

//arr1 and arr2 now if you do arr1.push(arr2) then it will put an array into an array and treats the inserted array as a single element but if you do arr1.push(...arr2) then it will spread the elements of arr2 and push them into arr1

//conact put element wise
//flat removes all arrays in arrays and gives all elements in a single array

//spread operator is used to spread the elements of an array into another array or to spread the properties of an object into another object

const arr2= [8,9,10]
const newArr2= [...arr1,...arr2]
console.log(newArr2)//[1,2,3,4,5,6,7,4.5,8,9,10]

//rest operator is used to collect the remaining elements of an array into a new array or to collect the remaining properties of an object into a new object        

