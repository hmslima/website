let = menuActive = false;

function changeBackground() {
    let background = getComputedStyle(document.body).backgroundColor;
    let generalLinks = document.querySelectorAll("a");
    let menuLinks = document.getElementsByClassName("navLink");
    let linkWithWhiteBg = document.getElementsByClassName("linkWithWhiteBg");
    let card = document.getElementsByClassName("card");
    let cardStacks = document.getElementsByClassName("cardStacks");

    // Dark mode
    if (background == null || background == "rgb(251, 251, 231)") {
        document.getElementsByClassName("changeBackgroundButton")[0].innerHTML="🌞︎";

        document.body.style.backgroundColor = "#444444"; // #444444 / rgb(68, 68, 68)
        document.body.style.backgroundImage = "url(resources/img/background/bg-dark.jpg)";
        document.body.style.color = "#F1FBE7"; // #F1FBE7 / rgb(241, 251, 231)

        for (let counter = 0; counter < generalLinks.length; counter++) {
            generalLinks[counter].style.color = "#EAEAFA";
        }
        for (let counter = 0; counter < menuLinks.length; counter++) {
            menuLinks[counter].style.color = "#FFFFFF";
        }
        for (let counter = 0; counter < linkWithWhiteBg.length; counter++) {
            linkWithWhiteBg[counter].style.color = "#DD4F4F";
        }

        for (let counter = 0; counter < card.length; counter++) {
            card[counter].style.color = "#000000";
            card[counter].style.borderColor = "#FFFFFF";
            card[counter].style.backgroundColor = "#FBFBE7";
        }

        for (let counter = 0; counter < cardStacks.length; counter++) {
            cardStacks[counter].style.color = "#000000";
            cardStacks[counter].style.backgroundColor = "#FBFBE7";
        }
    }
    // Light/original mode
    else {
        document.getElementsByClassName("changeBackgroundButton")[0].innerHTML="🌜︎";

        document.body.style.backgroundColor = "#FBFBE7"; // #FBFBE7 / rgb(251, 251, 231)
        document.body.style.backgroundImage = "url(resources/img/background/bg-light.jpg)";
        document.body.style.color = "#000000"; // #000000 / rgb(0, 0, 0)

        for (let counter = 0; counter < generalLinks.length; counter++) {
            generalLinks[counter].style.color = "#DD4F4F";
        }
        for (let counter = 0; counter < menuLinks.length; counter++) {
            menuLinks[counter].style.color = "#FFFFFF";
        }
        for (let counter = 0; counter < linkWithWhiteBg.length; counter++) {
            linkWithWhiteBg[counter].style.color = "#DD4F4F";
        }

        for (let counter = 0; counter < card.length; counter++) {
            card[counter].style.borderColor = "#000000";
            card[counter].style.backgroundColor = "#FFFFFF";
        }

        for (let counter = 0; counter < cardStacks.length; counter++) {
            cardStacks[counter].style.backgroundColor = "#FFFFFF";
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
    let content = document.getElementById(id).innerText;

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