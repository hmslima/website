let = menuActive = false;

function changeBackground() {
    let background = getComputedStyle(document.body).backgroundColor;
    let generalLinks = document.querySelectorAll("a"); // I may or a may not be using this one
    let card = document.getElementsByClassName("card");
    let cardTitle = document.getElementsByClassName("cardTitle");
    let cardStacks = document.getElementsByClassName("cardStacks");
    let cardTitleStacks = document.getElementsByClassName("cardTitleStacks");

    // Dark mode
    if (background == null || background == "rgb(251, 251, 231)") {
        document.getElementsByClassName("changeBackgroundButton")[0].innerHTML="🌞︎";

        document.body.style.backgroundColor = "#444444"; // #444444 / rgb(68, 68, 68)
        document.body.style.color = "#F1FBE7"; // #F1FBE7 / rgb(241, 251, 231)

        for (let counter = 0; counter < card.length; counter++) {
            cardTitle[counter].style.backgroundColor = "#565656";
            card[counter].style.backgroundColor = "#2A2A2A";
            card[counter].style.borderColor = "#FFFFFF";
        }

        for (let counter = 0; counter < cardStacks.length; counter++) {
            cardStacks[counter].style.borderColor = "#FFFFFF";
            cardTitleStacks[counter].style.borderColor = "#FFFFFF";
        }
    }
    // Light mode
    else {
        document.getElementsByClassName("changeBackgroundButton")[0].innerHTML="🌜︎";

        document.body.style.backgroundColor = "#FBFBE7"; // #FBFBE7 / rgb(251, 251, 231)
        document.body.style.color = "#000000"; // #000000 / rgb(0, 0, 0)

        for (let counter = 0; counter < card.length; counter++) {
            cardTitle[counter].style.backgroundColor = "#EEEEEE";
            card[counter].style.backgroundColor = "#FFFFFF";
            card[counter].style.borderColor = "#000000";
        }

        for (let counter = 0; counter < cardStacks.length; counter++) {
            cardStacks[counter].style.borderColor = "#000000";
            cardTitleStacks[counter].style.borderColor = "#000000";
        }
    }
}

function getClicks() {
    let menu = document.getElementById("menu");
    document.addEventListener("click", event => {
        if ((event.target.classList.contains("hamburgerMenu") || event.target.classList.contains("hamburgerMenuBar")) && menuActive == false) {
            menuActive = true;
            menu.style.display = "block";
            event.preventDefault();
        }
        else if ((event.target.classList.contains("hamburgerMenu") || event.target.classList.contains("hamburgerMenuBar")) && menuActive == true) {
            menuActive = false;
            menu.style.display = "none";
            event.preventDefault();
        }
        else if (event.target.classList.contains("changeBackgroundButton")) {
            changeBackground();
            event.preventDefault();
        }
        else {
            if (menuActive && !event.target.classList.contains("menuItemLink")) {
                menuActive = false;
                menu.style.display = "none";
            }
        }
    });
}

function typewrite (id) {
    let div = document.getElementById(id);
    let height = document.getElementById(id).offsetHeight;
    let content = '';
    if (document.getElementsByTagName('html')[0].getAttribute('lang') == 'pt-br') {
        content = "Receba boas-vindas ao site de Henrique Matheus da Silva Lima, um programador apaixonado por desenvolvimento de software.".split('');
    }
    else {
        content = "Welcome to the website of Henrique Matheus da Silva Lima, a Brazilian programmer passionate about software development.".split('');
    }

    document.getElementById(id).style.minHeight = height + "px";
    div.innerHTML = '';

    let counter = 0;

    const typeWriteInterval = setInterval(() => {
        div.innerHTML += content[counter];
        counter++;

        if (counter == content.length) {
            clearInterval(typeWriteInterval);
            document.getElementById(id).style.minHeight = 0; // In case I resize the screen
        }
    }, 50);
}

function start() {
    typewrite ("write");
    getClicks();
}