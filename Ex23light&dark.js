let modebtn=document.querySelector("#mode")
let currMode="light"
modebtn.addEventListener("click",()=>{
    if(currMode=="light"){
        currMode="dark"
        //document.querySelector("body").style.backgroundColor="black"
                document.querySelector("body").classList.add("dark")
                  document.querySelector("body").classList.remove("light")
    }           
    else{
        currMode="light"
       // document.querySelector("body").style.backgroundColor="white"
        document.querySelector("body").classList.add("dark")
        document.querySelector("body").classList.remove("dark")
    }
    console.log(currMode)
})
