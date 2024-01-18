// console.log(window)
// window.alert("like this")
// alert()

// Allows you to get more information about the USER AGENT (also known as the Browser)
// console.log(navigator);

// The DOCUMENT object contains the website itself!
console.log(document)

const paragraph = document.querySelector("p")
paragraph.innerHTML = "I can change everything through JavaScript!"

// 1) Get the html element that i want to modify
const image = document.querySelector("img");
console.log(image);

// 2) Decide which attribute I need to transform
// I need to modify the "src" attribute to change the image

// 3) Apply the transformation
image.src = "https://i.pinimg.com/736x/a9/ae/8e/a9ae8e22577ea53213734174ac03828e.jpg"
image.height = 300
image.style.border = "2px solid black"

const h3 = document.querySelector("h3");

h3.style.color = "blue";

/**
 * By using document.querySelector()
 * you can access elements by:
 * 1) element name ("h1") ("p") ("img")
 * 2) class name (".heading") (".my-class")
 * 3) id value ("#name-of-the-id") ("#my-id")
 */

const documentChildren = document.children;
const htmlElement = documentChildren[0];
const bodyElement = htmlElement.children[1];
const imageElement = bodyElement.children[2];
console.log(imageElement);