import { functionOne } from './one';
import { menuFunc } from './menu';
import { contactsFunc } from './contacts';

const clearScreen = () => {
    const content = document.getElementById("content");
    content.innerHTML="";
    console.log("why");
};

const home = document.getElementById("home");
const menu = document.getElementById("menu");
const contact = document.getElementById("contact");

home.addEventListener('click',() => {    
    clearScreen();
    functionOne();    
});

menu.addEventListener('click',() => {    
    clearScreen();
    menuFunc();    
});

contact.addEventListener('click',() => {    
    clearScreen();
    contactsFunc();    
});

functionOne();