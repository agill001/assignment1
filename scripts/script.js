const Darkmode = document.querySelector(".Darkmode");
const newnotebutton = document.querySelector(".Newnote")
const cancelbutton = document.querySelector(".Cancel")
const save = document.querySelector(".Save");
const buttonContainer = document.querySelector(".firstbuttons");
const notepad= document.querySelector("#notepad");
const sidenav = document.querySelector(".sidebar");

function darkmodeforbackg(){
    //  document.body.style.backgroundColor = "black";
    document.body.classList.toggle("black-bg") 

    
}
Darkmode.addEventListener("click",darkmodeforbackg)

function changetext(){
    if(Darkmode.textContent==="Dark Mode")
    {
        Darkmode.textContent="Light Mode";
    }
    else if(Darkmode.textContent==="Light Mode")
    {
        Darkmode.textContent="Dark Mode";
    }
}
Darkmode.addEventListener("click",changetext);

function changetextandchangecolorsofelements(buttontext){
    if( buttontext.target.textContent==="Light Mode"){
        save.style.backgroundColor="black"
        newnotebutton.style.backgroundColor="black"
        cancelbutton.style.backgroundColor="black"
        sidenav.style.backgroundColor="#252525"
        notepad.style.backgroundColor="#696969"
        buttontext.target.style.backgroundColor="black"
       }

       if( buttontext.target.textContent==="Dark Mode"){
        save.style.backgroundColor="#55869b"
        newnotebutton.style.backgroundColor="#55869b"
        cancelbutton.style.backgroundColor="#E9806E"
        sidenav.style.backgroundColor="whitesmoke"
        notepad.style.backgroundColor="whitesmoke"
        buttontext.target.style.backgroundColor="#685369"
        }

}
buttonContainer.addEventListener("click",changetextandchangecolorsofelements);