// let btn1=document.querySelector("#btn1")
// btn1.onclick=(evt)=>{
//     console.log(evt)
//    // console.log(evt.type);
//    // console.log(evt.target);
//    console.log(evt.clientX,evt.clientY);
    
// }
// event listeners
btn1.addEventListener("click",()=>{
    console.log("Button 1 was clicked handler 1")
})
btn1.addEventListener("click",(evt)=>{
    console.log("button 1 was clicked handler2")
    console.log(evt)
})
btn1.addEventListener("click",()=>{
    console.log("Button 1 was clicked handler 3")
})
// btn1.addEventListener("click",()=>{
//     console.log("Button 1 was clicked handler 4")
// })
// //remove event listerner
const handler4=()=>{
      console.log("Button 1 was clicked handler 4")
}
btn1.addEventListener("click",handler4)
btn1.removeEventListener("click",handler4)