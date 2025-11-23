// let arr=["ren","din","redd","hams"]
// arr.forEach(function printVal(al){
//     console.log(al)
// })
// arr.forEach((val,idx)=>{
//         console.log(val,idx)
// })
//example for forEach loop
// let arr=[1,2,3,4,5,6,7]
// arr.forEach((val)=>{
//     console.log(val*val)

// })
//map 
// let nums=[1,2,3,4,5]
// nums.map((val)=>{
//     return val;

// })
// console.log(nums)
//filter
// let newArr=nums.filter((val)=>{
//     return val%2==0
// })
// console.log(newArr)

//reduce
// const output=nums.reduce((prev ,curr)=>{
//     return prev>curr ?prev:curr
// })
// console.log(output)
// 
//practice
let n=prompt("Enter the numbers: ");
let arr=[]
for(let i=1;i<=n;i++){
    arr[i-1]=i

}
console.log(arr)
let sum=arr.reduce((res,curr)=>{
    return res*curr

})
console.log(sum)