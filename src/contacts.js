const contactsFunc = () => {
const people = [{
    name: "Nick",
    position: "Owner/manager",
    phone: "111-111-1111",
    email:"fakeemail@fakeemail.com"
},

{
    name: "Rick",
    position: "Chef",
    phone: "111-121-1111",
    email:"fakeemail@fakeemail.com"
},

{
    name: "Nicky",
    position: "Waiter",
    phone: "111-131-1111",
    email:"fakeemail@fakeemail.com"
}]

const container = document.getElementById("content");

const appendContacts = (items) => {
    
    const itemList = document.createElement("ul");

    items.forEach(item => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `<strong>${item.name}</strong><br>${item.position}<br>${item.phone}<br>${item.email}`;
        itemList.appendChild(listItem);
    });

    container.appendChild(itemList);
};


appendContacts(people);



}
export { contactsFunc };