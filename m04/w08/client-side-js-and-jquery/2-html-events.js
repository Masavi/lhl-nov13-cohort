/**
 * We can attach functions to event handlers defined directly in the HTML
 */
function sayHello() {
  alert("You have clicked on the button! Hi there!");
}

/**
 * We can also, without having to modify the html at all, handle events...
 */
// const title = document.querySelector("#main-title")
const title = document.getElementById("main-title")
title.addEventListener('mouseover', () => {
  title.style.color = "red"
})

const form = document.querySelector('#main-form');
form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(event.target[0].value);
  console.log('There has been a submission...');
})