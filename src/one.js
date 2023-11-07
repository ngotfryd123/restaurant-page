const functionOne = () => {
const container = document.getElementById("content");
const shopName = document.createElement("h2");
shopName.innerHTML="Nick's Coffee Shop";
const hLine = document.createElement("div");
hLine.innerHTML="Coffee so good that you forget you are in your pjs when you're here early mornings.";
container.appendChild(shopName);
container.appendChild(hLine);}

export { functionOne };
