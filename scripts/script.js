const Darkmode = document.querySelector(".Darkmode");
const newnotebutton = document.querySelector(".Newnote")
const cancelbutton = document.querySelector(".Cancel")
const save = document.querySelector(".Save");
function darkmode(){
    //  document.body.style.backgroundColor = "black";
    document.body.classList.add("black-bg")
    
}
Darkmode.addEventListener("click",darkmode)


function changetext(){
    if(Darkmode.textContent==="Dark mode")
    {
        Darkmode.textContent="Lightmode";
    }
    else if(Darkmode.textContent==="Lightmode")
    {
       
        Darkmode.textContent="Dark mode";
    }
    

}
Darkmode.addEventListener("click",changetext);