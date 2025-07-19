const body = document.body;
const themes = ["light-theme", "dark-theme", "blue-theme", "pink-theme"];

// Get both theme selectors safely
const themeSelectSidebar = document.getElementById("themeSelectSidebar");
const themeSelectHeader = document.getElementById("themeSelectHeader");

// Load saved theme
const savedTheme = localStorage.getItem("selectedTheme") || "light-theme";
body.classList.add(savedTheme);

// Sync selectors on load
if (themeSelectSidebar) themeSelectSidebar.value = savedTheme;
if (themeSelectHeader) themeSelectHeader.value = savedTheme;

// Function to apply theme and sync selectors
function applyTheme(theme) {
    themes.forEach(t => body.classList.remove(t));
    body.classList.add(theme);
    localStorage.setItem("selectedTheme", theme);

    if (themeSelectSidebar) themeSelectSidebar.value = theme;
    if (themeSelectHeader) themeSelectHeader.value = theme;
}

// Add listeners to both selectors safely
if (themeSelectSidebar) {
    themeSelectSidebar.addEventListener("change", () => {
        applyTheme(themeSelectSidebar.value);
    });
}

if (themeSelectHeader) {
    themeSelectHeader.addEventListener("change", () => {
        applyTheme(themeSelectHeader.value);
    });
}

// -----------------------------
// RANDOM POSTS ON LOAD
// -----------------------------
const postsContainer = document.getElementById("posts-container");

const sampleTitles = [
    "Exciting News!", "Thoughts on Life", "Tech Trends", "Daily Inspiration",
    "Travel Diaries", "Cooking Tips", "Book Review", "Fitness Goals",
    "Movie Night", "Music Vibes"
];

const sampleTexts = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Curabitur auctor diam non sapien placerat, sed dignissim massa sagittis.",
    "Praesent faucibus libero nec faucibus semper.",
    "Nulla facilisi. Sed at nunc id arcu finibus fermentum.",
    "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    "Fusce consequat, orci at cursus suscipit, orci magna bibendum lorem, et elementum sapien velit in urna.",
    "Donec sit amet mauris vel eros porttitor suscipit.",
    "Mauris vitae nulla ac diam pulvinar ullamcorper.",
    "Aliquam erat volutpat. Phasellus fermentum justo et turpis tempor, in efficitur lorem viverra.",
    "Sed tincidunt metus id eros blandit, a laoreet erat vestibulum."
];

function createRandomPost() {
    const title = sampleTitles[Math.floor(Math.random() * sampleTitles.length)];
    const text = sampleTexts[Math.floor(Math.random() * sampleTexts.length)];

    const postElement = document.createElement("article");
    postElement.classList.add("post");

    const postTitle = document.createElement("h3");
    postTitle.textContent = title;

    const postContent = document.createElement("p");
    postContent.textContent = text;

    postElement.appendChild(postTitle);
    postElement.appendChild(postContent);

    postsContainer.appendChild(postElement);
}

// Load 5 random posts
for (let i = 0; i < 5; i++) {
    createRandomPost();
}

// -----------------------------
// USER POST SUBMISSION
// -----------------------------
const postForm = document.getElementById("post-form");
const postTitleInput = document.getElementById("post-title");
const postContentInput = document.getElementById("post-content");

if (postForm) {
    postForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const title = postTitleInput.value.trim();
        const content = postContentInput.value.trim();

        if (title === "" || content === "") {
            alert("Please fill out both the title and content.");
            return;
        }

        const postElement = document.createElement("article");
        postElement.classList.add("post");

        const postTitle = document.createElement("h3");
        postTitle.textContent = title;

        const postContent = document.createElement("p");
        postContent.textContent = content;

        postElement.appendChild(postTitle);
        postElement.appendChild(postContent);

        postsContainer.prepend(postElement);

        postTitleInput.value = "";
        postContentInput.value = "";
    });
}
