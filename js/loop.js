//truthy values 
//empty string is falsy
//falsy values: false, 0, -0, "", null, undefined, nan, bigint 0n
//truthy values: "0", 'false', " ",[], {}, function(){}

//for of loop array specific loop, it gives value
// const arr= [1,2,3,4,5]
// for (const i of arr) {
//     console.log(i)
// }

//map used for unique values
const map= new Map()
map.set("in", "india");
map.set("us", "united");
map.set("fr", "france");

// for (const [value] of map) {
//     console.log(value);
// }

//objects are not iterable using forof, use forin for objects
//for in for arrays gives key value so put arrayname[iterator]

//filter: has callback function whihc gets access to each value and give a condition
//in {}: scope started need to write return
//to get nums greater than 5

const mynums=[1,2,3,4,5,6,7,8,9]
// const newnums= mynums.filter((num)=>{
//     return num>4
// })



let newnums=[]
mynums.forEach((num) => {
    if(num>4)
    {
        newnums.push(num)
    }
})

newnums= mynums.map((num)=> {return num+10})

console.log(newnums)

//chaining map.map.filter
//reduce: to get sum