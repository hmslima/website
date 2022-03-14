function changeBackground() {
    let background = getComputedStyle(document.body).backgroundColor;
    let menuConfigLink = document.getElementsByClassName("menuLink");
    let generalLinks = document.querySelectorAll("a");

    if (background == null || background == "rgb(251, 251, 231)") {
        document.body.style.backgroundColor = "#444444"; // #444444 / rgb(68, 68, 68)
        document.body.style.color = "#F1FBE7"; // #F1FBE7 / rgb(241, 251, 231)
        for (let counter = 0; counter < generalLinks.length; counter++) {
            generalLinks[counter].style.color = "#F1FBE7";
        }
        for (let counter = 0; counter < menuConfigLink.length; counter++) {
            menuConfigLink[counter].style.color = "#F1FBE7";
        }
    }
    else {
        document.body.style.backgroundColor = "#FBFBE7"; // #FBFBE7 / rgb(251, 251, 231)
        document.body.style.color = "#000000"; // #000000 / rgb(0, 0, 0)
        for (let counter = 0; counter < generalLinks.length; counter++) {
            generalLinks[counter].style.color = "#000000";
        }
        for (let counter = 0; counter < menuConfigLink.length; counter++) {
            menuConfigLink[counter].style.color = "#000000";
        } 
    }
}