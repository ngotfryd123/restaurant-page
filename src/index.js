import { functionOne } from './one';
import { menuFunc } from './menu';
import { contactsFunc } from './contacts';

const clearScreen = () => {
    const content = document.getElementById("content");
    content.innerHTML="";
};

const home = document.getElementById("home");
const menu = document.getElementById("menu");
const contact = document.getElementById("contact");

home.style.cursor="pointer";
menu.style.cursor="pointer";
contact.style.cursor="pointer";

home.addEventListener('click',() => {    
    clearScreen();
    menu.style.backgroundColor = "";
    contact.style.backgroundColor = "";
    home.style.backgroundColor = "chocolate";
    functionOne();    
});

menu.addEventListener('click',() => {    
    clearScreen();
    home.style.backgroundColor = "";
    contact.style.backgroundColor = "";
    menu.style.backgroundColor = "chocolate";
    menuFunc();    
});

contact.addEventListener('click',() => {    
    clearScreen();
    home.style.backgroundColor = "";
    menu.style.backgroundColor = "";
    contact.style.backgroundColor = "chocolate";
    contactsFunc();    
});

functionOne();