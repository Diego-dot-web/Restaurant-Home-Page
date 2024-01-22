import { loadMain } from "./loadMain";
import { addMenu } from "./addMenu";
import { addContact } from "./addContact";


addMenu();
addContact();
loadMain();

function changeScreens (){
    const principalBtn = document.querySelector(".principalBtn");
    const menuBtn = document.querySelector(".menuBtn");
    const contactBtn = document.querySelector(".contactBtn");
    const principalDiv = document.querySelector(".content");
    const menuDiv = document.querySelector(".menu");
    const contactDiv = document.querySelector(".contact");


    principalBtn.addEventListener("click", ()=> {
        principalDiv.classList.remove("hidden");
        menuDiv.classList.add("hidden");
        contactDiv.classList.add("hidden");
    });

    menuBtn.addEventListener("click", ()=>{
        menuDiv.classList.remove("hidden");
        principalDiv.classList.add("hidden");
        contactDiv.classList.add("hidden");
    })

    contactBtn.addEventListener("click", ()=> {
        contactDiv.classList.remove("hidden");
        principalDiv.classList.add("hidden");
        menuDiv.classList.add("hidden");
    })
   
}

changeScreens()