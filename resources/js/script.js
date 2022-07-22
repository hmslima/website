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

async function getHtml(lang, fileName) {
    const result = await fetch(`resources/html/${lang}/${fileName}.html`).then(response => response.text());
    return result;
}

function changeSmallText(id, newText) {
    document.getElementById(id).innerHTML = newText;
}

function changeElementContent(lang, fileName) {
    // fileName refer to both HTML file and DIV id, both things must have the same name!
    getHtml(lang, fileName).then(response => {
        document.getElementById(fileName).innerHTML = response;
    });
}

function changeLanguage(lang) {
    changeElementContent(lang, 'menu');
    changeElementContent(lang, 'write');

    if (lang == 'ptbr') {
        changeSmallText('my_stacks_', "Conjunto de tecnologias");
        changeSmallText('java_development_', "Desenvolvimento Java");
        changeSmallText('microservices_', "Microsserviços");
        changeSmallText('other_languages_', "Outras Linguagens");
        changeSmallText('more_backend_technologies_', "Mais Tecnologias de Back-end");
        changeSmallText('tools_', "Ferramentas");
        changeSmallText('concepts_', "Conceitos");
        changeSmallText('contact_', "Contato");
        changeSmallText('resume_', "Currículo");
        changeSmallText('programmingprojects_', "Meus principais projetos de programação");     
    }
    else {
        changeSmallText('my_stacks_', "My Stacks");
        changeSmallText('java_development_', "Java Development");
        changeSmallText('microservices_', "Microservices");
        changeSmallText('other_languages_', "Other Languages");
        changeSmallText('more_backend_technologies_', "More Back-end Technologies");
        changeSmallText('tools_', "Tools");
        changeSmallText('concepts_', "Concepts");
        changeSmallText('contact_', "Contact");
        changeSmallText('resume_', "Resume <i>(in Portuguese)</i>");
        changeSmallText('programmingprojects_', "My Main Programming Projects");
    }
    
}

function start() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const language = urlParams.get('lang')

    // Change the language
    if (language == 'ptbr') {
        changeLanguage('ptbr');
    }
    else {
        changeLanguage('en');
    }

    // Set the effect of typing
    let timeout = setInterval(() => {
        const writeElement = document.getElementById('write');
        if (writeElement.innerHTML != null) {
            typewrite ("write");
            clearInterval(timeout);
        }
    }, 200);
    
    // Well, get the clicks
    getClicks();
}