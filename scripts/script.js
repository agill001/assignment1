const Darkmode = document.querySelector(".Darkmode");
const newnotebutton = document.querySelector(".Newnote")
const cancelbutton = document.querySelector(".Cancel")
const save = document.querySelector(".Save");
const buttonContainer = document.querySelector(".firstbuttons");
const notepad= document.querySelector("#notepad");
const sidenav = document.querySelector(".sidebar");
const firstnote = document.querySelector(".noteone")
const secondnote = document.querySelector(".notetwo")

const notesArray = [{title: "Note one", body:"this is my first note"}, {title: "Note two",body:"this is my second note"}]

function notedisplay1(){
    notepad.value= "this is my first note";     
}
firstnote.addEventListener("click",notedisplay1)

function notedisplay2(){
    notepad.value= "this is my second note";     
}
secondnote.addEventListener("click",notedisplay2)


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
        notepad.style.borderColor="black"
        buttontext.target.style.backgroundColor="black"
       }

       if( buttontext.target.textContent==="Dark Mode"){
        save.style.backgroundColor="#55869b"
        newnotebutton.style.backgroundColor="#55869b"
        cancelbutton.style.backgroundColor="#E9806E"
        sidenav.style.backgroundColor="whitesmoke"
        notepad.style.backgroundColor="whitesmoke"
        notepad.style.borderColor="#9BBDF9"
        buttontext.target.style.backgroundColor="#685369"
        }

}
buttonContainer.addEventListener("click",changetextandchangecolorsofelements);

function newnotefunc(){
    save.style.display= 'block';
    cancelbutton.style.display= 'block';
    notepad.style.display='block';
    notepad.value = '';
}
newnotebutton.addEventListener("click",newnotefunc);

function cancelfunc(){
    save.style.display= 'none';
    cancelbutton.style.display= 'none';
    notepad.style.display='none';
}
cancelbutton.addEventListener("click",cancelfunc);

function saver(){  

    newnotename=prompt("Please Give Your Note a Name ⤵")
    alert("Your note has been saved!")
    let noteItems = [newnotename];
    const noteItemsElement = document.querySelector(".notes");
    function populateList(arr)
    {
        for (let item of arr){
            let listItem = document.createElement("li");
            listItem.textContent = item;
            noteItemsElement.appendChild(listItem);}   
    }
    populateList(noteItems);

}
save.addEventListener("click", saver);

