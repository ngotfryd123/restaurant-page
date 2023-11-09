import { functionOne } from './one';
import { menuFunc } from './menu';
import { contactsFunc } from './contacts';

functionOne();

const clearScreen = () => {
    const content = document.getElementById("content");
    content.innerHTML="";
};

const home = document.getElementById("home");
const menu = document.getElementById("menu");
const contact = document.getElementById("content");

home.addEventListener('event',() => {    
    clearScreen();
    functionOne();    
});

menu.addEventListener('event',() => {    
    clearScreen();
    menuFunc();    
});

contact.addEventListener('event',() => {    
    clearScreen();
    contactsFunc();    
});
