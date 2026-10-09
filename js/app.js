// Starter code: edit this file and commit your changes
const message = document.getElementById("message");
const btn = document.getElementById("btn");
let count = 0;

btn.addEventListener("click", () => {
  count++;
  message.textContent = `You clicked ${count} time(s)`;
});
