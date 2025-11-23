let food=["pasta","maggi","biryani","poha","chickeenfry"]
//push() method
food.push("chips","kima")
console.log(food)
//pop() method
food.pop();
console.log(food)
//toString() method
console.log(food.toLocaleString())
// concatnate to Strings
let drinks=["cocola","pepsi","orange","apple"]
food=drinks.concat(food)
console.log(food)
//shift remove array first element
let arr=food.shift() 
console.log(arr)
console.log(food)
//unshift  add at first
let val=food.unshift("bananna")
console.log(food)
//slice

let num=[1,2,3,4,4]

console.log(num.slice(1,4))
//splice add items at particular index
console.log(num.splice(1,2,101,102))
console.log(num)
//delete elements at particular index
arr.splice(3,1)