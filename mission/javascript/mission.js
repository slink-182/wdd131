let selectElem = document.querySelector('select');
let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current === 'dark') {
        document.body.className = 'dark';
        // Change logo to dark version
        logo.src = "./images/byui-logo_white.png";
    } else {
        document.body.className = 'light';
        // Change logo to original version
        logo.src = "./images/byui-logo_blue.webp";
    }
}
