const image = document.getElementById("myImage");

image.addEventListener("click", function () {
    console.log("Image clicked!");
    image.classList.toggle("double-size");
    console.log("Class list:", image.classList);
});
