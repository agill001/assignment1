const Darkmode = document.querySelector(".Darkmode");


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