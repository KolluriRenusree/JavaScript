// function countVowels(str){
//     let count=0
//     for(const char of str){
//     if(char=="a" || char=="A" || char=="e" || char=="E" || char=="i"||char=="I"||
//         char=="o"||char=="O" || char=="u" || char=="U"){
//              count++
//     }
   
// }
// console.log(count)
// }
//countVowels("renusree")
//arrow Function 
const vowelCount=(str)=>{
    let count=0
    for(const char of str){
    if(char=="a" || char=="A" || char=="e" || char=="E" || char=="i"||char=="I"||
        char=="o"||char=="O" || char=="u" || char=="U"){
             count++
    }
   
}
console.log(count)
}

vowelCount("renusree")