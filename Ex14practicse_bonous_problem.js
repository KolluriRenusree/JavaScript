let amount=[250,645,300,900,50]
let i=0
// for(let val of amount){
//     console.log(`value at index ${i}=${val}`)
//     let offer=val/10;
//     amount[i]=amount[i]-offer;
//     console.log(`value after offer=${amount[i]}`)
//     i++;
// }
// both works as same but we  using here normal for loop
// for(i=0;i<amount.length;i++){
//     console.log("amount at index:",i,":",amount[i])
//     let offer=amount[i]/10;
//     amount[i]=amount[i]-offer
//     console.log("amount after bonous at index: ",i,":",amount[i])
// }
// here a very simple manner
for(i=0;i<amount.length;i++){
    let offer=amount[i]/10;
    amount[i]-=offer
    
}
 console.log(amount)