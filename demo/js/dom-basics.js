const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);

const img = document.createElement('img');
img.src = "https://picsum.photos/200";
img.alt = 'random image inserted with javascript';
img.width = 300;

// this adds an image to the body.
document.body.appendChild(img);

// these change the background and text color
document.body.style.backgroundColor = 'black';
document.body.style.color = 'white';

// added list
const newDiv = document.createElement("div");
newDiv.innerHTML = "<ul><li>One</li><li>Two</li><li>Three</li></ul>";
document.body.appendChild(newDiv);