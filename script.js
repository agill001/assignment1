const Darkmode = document.querySelector(".Darkmode");


function darkmode(){
    //  document.body.style.backgroundColor = "black";
    document.body.classList.add("black-bg")
}
Darkmode.addEventListener("click",darkmode)