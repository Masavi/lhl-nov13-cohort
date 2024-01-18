/**
 * We can attach functions to event handlers defined directly in the HTML
 */
function sayHello() {
  alert("You have clicked on the button! Hi there!");
}

const $title = $('#main-title');
$title.on('mouseover', () => { $title.css('color', 'purple') });

const title = document.getElementById("main-title")
title.addEventListener('mouseover', () => {
  title.style.color = "red"
})

const $form = $("#main-form");
$form.on('submit', (event) => {
  event.preventDefault();
  const $input = $("#form-input");
  console.log($input.val());
})

// const form = document.querySelector('#main-form');
// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   console.log(event.target[0].value);
//   console.log('There has been a submission...');
// })