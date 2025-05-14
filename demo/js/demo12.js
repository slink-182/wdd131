const button = document.getElementById("greetBtn");
const message = document.getElementById("message");

button.addEventListener("click", function () {
  message.textContent = "Hello, you clicked the button!";
});
