import { loadMain } from "./loadMain";
import { addMenu } from "./addMenu";
import { addContact } from "./addContact";


addMenu()
addContact()
loadMain()

function changeScreens (){
    const principalBtn = document.querySelector(".principalBtn")
    const menuBtn = document.querySelector(".menuBtn")
    const contactBtn = document.querySelector(".contactBtn")
    const principalDiv = document.querySelector("#content")
    const menuDiv = document.querySelector(".menu")
    const contactDiv = document.querySelector(".contact")


    principalBtn.addEventListener("click", ()=> {
        loadMain()
        menuDiv.remove()
        contactDiv.remove()
    })

    menuBtn.addEventListener("click", ()=>{
        addMenu()
        principalDiv.remove()
        contactDiv.remove()
    })

    contactBtn.addEventListener("click", ()=> {
        addContact()
        menuDiv.remove()
        principalDiv.remove
    })
   
}

changeScreens()