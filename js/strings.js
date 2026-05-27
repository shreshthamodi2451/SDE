const name="shreshtha"
const repoCount=90

console.log(`my name is ${name} and my repo count is ${repoCount}`)

const game= new String("football")
//prperties: stores string as object dont confuse for array as it shows 0:f and 1:o and so on but it is not an array it is a string object gives us many functions like length, touppercase etc
//can get key values, exa

// console.log(game.charAt(3))//t
// console.log(game.length)//8
// console.log(game.indexOf("ba"))
const newString= game.substring(0,5)
const newString2= game.replace("ball", "foot")

console.log(newString)//footb
console.log(newString2)//footfoot

//substring cannot take negative index but slice can take negative index
const newString3= game.slice(-4)
console.log(newString3)//ball

//slice cannot cut from between but substring can 