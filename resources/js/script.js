let menuActive = false;

function changeBackgroundToDark() {
    let background = getComputedStyle(document.body).backgroundColor;
    let generalLinks = document.querySelectorAll("a");
    let menuLinks = document.getElementsByClassName("navLink");
    let linkWithWhiteBg = document.getElementsByClassName("linkWithWhiteBg");
    let card = document.getElementsByClassName("card");
    let cardStacks = document.getElementsByClassName("cardStacks");

    try {
        document.getElementsByClassName("changeBackgroundButton")[0].innerHTML="🌞︎";
    }
    catch {
        // Do nothing
    }
    

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

function changeBackgroundToLight() {
    let background = getComputedStyle(document.body).backgroundColor;
    let generalLinks = document.querySelectorAll("a");
    let menuLinks = document.getElementsByClassName("navLink");
    let linkWithWhiteBg = document.getElementsByClassName("linkWithWhiteBg");
    let card = document.getElementsByClassName("card");
    let cardStacks = document.getElementsByClassName("cardStacks");

    try {
        document.getElementsByClassName("changeBackgroundButton")[0].innerHTML="🌜︎";
    }
    catch {
        // Não faça nada
    }
    

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

function changeBackground(changeHtml) {
    let background = getComputedStyle(document.body).backgroundColor;
    
    if (changeHtml == false || changeHtml == null) {
        if (background == null || background == "rgb(251, 251, 231)") {
            changeBackgroundToDark();
        }
        else {
            changeBackgroundToLight();
        }
    }
    else {
        if (background == null || background == "rgb(251, 251, 231)") {
            changeBackgroundToLight(); 
        }
        else {
            changeBackgroundToDark();
        }
    }
    
}

function getClicks() {
    let menu = document.getElementById("sub-menu");
    let menuActive = false;

    document.addEventListener("click", event => {
        if ((event.target.classList.contains("hamburgerMenu") || event.target.classList.contains("hamburgerMenuBars")) && menuActive == false) {
            menuActive = true;
            menu.style.display = "block";
            event.preventDefault();
        }
        else if ((event.target.classList.contains("hamburgerMenu") || event.target.classList.contains("hamburgerMenuBars")) && menuActive == true) {
            menuActive = false;
            menu.style.display = "none";
            event.preventDefault();
        }
        else {
            if (menuActive && !event.target.classList.contains("generalMenuButton")) {
                menuActive = false;
                menu.style.display = "none";
            }
        }
    });
}

async function getHtml(lang, fileName) {
    const result = await fetch(`resources/html/${lang}/${fileName}.html`).then(response => response.text());
    return result;
}

function changeElementContent(lang, fileName, ElementName) {
    getHtml(lang, fileName).then(response => {
        document.getElementById(ElementName).innerHTML = response;
        changeBackground(true);
    });
}

function changeLanguage(lang, currentLocation) {
    changeElementContent(lang, 'menu', 'desktopMenuContainerId');
    changeElementContent(lang, 'menu', 'sub-menu');
    changeElementContent(lang, currentLocation, 'main_box');    
}

function start() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const language = urlParams.get('lang');
    const page = urlParams.get('page');
    const mode = urlParams.get('mode');

    // Change the language
    if (language == 'ptbr') {
        document.getElementsByTagName('html')[0].setAttribute("lang","pt-BR");
        if (page == 'pro') {
            changeLanguage('ptbr', page);
        }
        else if (page == 'projects') {
            changeLanguage('ptbr', page);
        }
        else if (page == 'settings') {
            changeLanguage('ptbr', page);
        }
        else {
            changeLanguage('ptbr', 'home');
        }
    }
    else {
        document.getElementsByTagName('html')[0].setAttribute("lang","en");
        if (page == 'pro') {
            changeLanguage('en', page);
        }
        else if (page == 'projects') {
            changeLanguage('en', page);
        }
        else if (page == 'settings') {
            changeLanguage('en', page);
        }
        else {
            changeLanguage('en', 'home');
        }
    }
    if (mode == 'dark') {
        changeBackgroundToDark();
    }
    else {
        changeBackgroundToLight();
    }
    
    // Well, get the clicks
    getClicks();
}