// get the global variables
let container=document.getElementById("container")
let closeBtn=document.getElementById("close")
let menueBtn=document.getElementById("menue")
let toggleContainer=document.getElementById("toggels")

// add routate calsses function
menueBtn.addEventListener("click",()=>
{
    container.classList.add("rotate-body")
    toggleContainer.classList.add("routate-toggelicons")
    
})
// remove routate calsses function
closeBtn.addEventListener("click",()=>
{
    container.classList.remove("rotate-body")
    toggleContainer.classList.remove("routate-toggelicons")
    
})