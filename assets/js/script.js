function changeBackground() {
    let background = getComputedStyle(document.body).backgroundColor;
    let menuLink = document.getElementsByClassName("menuLink");
    let generalLinks = document.querySelectorAll("a"); // I may or a may not be using this one
    let card = document.getElementsByClassName("card");

    // Dark mode
    if (background == null || background == "rgb(251, 251, 231)") {
        document.body.style.backgroundColor = "#444444"; // #444444 / rgb(68, 68, 68)
        document.body.style.color = "#F1FBE7"; // #F1FBE7 / rgb(241, 251, 231)

        for (let counter = 0; counter < menuLink.length; counter++) {
            if (menuLink[counter].classList.contains("menuLink")) {
                menuLink[counter].style.color = "#F1FBE7";
            }
        }

        for (let counter = 0; counter < card.length; counter++) {
            card[counter].style.backgroundColor = "rgb(135, 82, 82, 0.5)";
        }
    }
    // Light mode
    else {
        document.body.style.backgroundColor = "#FBFBE7"; // #FBFBE7 / rgb(251, 251, 231)
        document.body.style.color = "#000000"; // #000000 / rgb(0, 0, 0)

        for (let counter = 0; counter < menuLink.length; counter++) {
            if (menuLink[counter].classList.contains("menuLink")) {
                menuLink[counter].style.color = "#000000";
            }
        }

        for (let counter = 0; counter < card.length; counter++) {
            card[counter].style.backgroundColor = "rgb(229, 222, 186, 0.5)";
        }
    }
}

function typewrite (id) {
    div = document.getElementById(id);
    content = div.innerHTML.split('');

    div.innerHTML = '';

    let counter = 0;

    const typeWriteInterval = setInterval(() => {
        div.innerHTML += content[counter];
        counter++;

        if (counter == content.length) {
            clearInterval(typeWriteInterval);
        }
    }, 100);
}