var readTech = []

function closeSideBar() {
    document.getElementById('side-bar').style.width = 0;
    document.getElementById('open').style.display = "inline";
    document.getElementById('home').style.display = "inline";
    document.getElementById('close').style.display = "none";
    document.getElementById('content-container').style.left = 0;
    var list = document.getElementsByClassName('nav-button');
    for (x = 0; x < list.length; x++) {
        list[x].style.left = "4px";
        list[x].style.top = "2px";
    }
}

function openSideBar() {
    document.getElementById('side-bar').style.width = "192px";
    document.getElementById('open').style.display = "none";    
    document.getElementById('home').style.display = "none";
    document.getElementById('close').style.display = "block";
    var list = document.getElementsByClassName('nav-button');
    for (x = 0; x < list.length; x++) {
        list[x].style.left = "196px";
    }
}

closeSideBar();
openSideBar();

function changeBack(type, color) {

    document.getElementById('content-container').className = color + " primary-white";
    var list = document.getElementsByClassName('open-description');
    for (x = 0; x < list.length; x++) {
        list[x].style.display = "none";
        list[x].parentElement.parentElement.className = list[x].parentElement.parentElement.className.replace("md-6", "md-12");
    }

    var list = document.getElementsByClassName(type);
    for (x = 0; x < list.length; x++)
        list[x].style.display = "block";

    var containerExtra = document.getElementsByClassName('bordered-container-extra');
    for (x = 0; x < containerExtra.length; x++) {
        containerExtra[x].style.border = "0";
    }

    var list = document.getElementsByClassName('projects');
    var temp = "";
    for (x = 0; x < list.length; x++) {
        list[x].style.display = "none";
    }

    var list = document.getElementsByClassName('projects');
    var temp = "";
    for (x = 0; x < list.length; x++) {
        if (list[x].className.indexOf(type) != -1) {
            list[x].style.display = "block";
            list[x].parentElement.className = list[x].parentElement.className.replace("md-6", "md-12");
        }

    }
}

function changeHome() {

    document.getElementById('content-container').className = "primary-night";
    var list = document.getElementsByClassName('open-description');
    var temp = "";
    for (x = 0; x < list.length; x++) {
        list[x].style.display = "block";
        temp = list[x].parentElement.parentElement.className;
        list[x].parentElement.parentElement.className = temp.replace("md-12", "md-6");
    }

    var list = document.getElementsByClassName('general');
    var temp = "";
    for (x = 0; x < list.length; x++) {
        temp = list[x].parentElement.className;
        list[x].parentElement.className = temp.replace("md-6", "md-12");
    }

    var containerExtra = document.getElementsByClassName('bordered-container-extra');
    for (x = 0; x < containerExtra.length; x++) {
        containerExtra[x].style.border = "2px solid";
    }


    var list = document.getElementsByClassName('projects');
    var temp = "";
    for (x = 0; x < list.length; x++) {
        list[x].style.display = "block";
        list[x].parentElement.className = list[x].parentElement.className.replace("md-12", "md-6");
    }
}

function openLink(url) {
    var win = window.open(url, '_blank');
    win.focus();
}

function readMore(index) {
    var project = document.getElementsByClassName('projects')[index];
    var descriptions = project.getElementsByClassName('item-description');
    var tech = project.getElementsByClassName('button-text')[0].style.display;

    if (tech != 'none' || tech == undefined) {
        project.getElementsByClassName('button-text')[1].style.display = "block";
        project.getElementsByClassName('button-text')[0].style.display = "none";
    } else {
        project.getElementsByClassName('button-text')[1].style.display = "none";
        project.getElementsByClassName('button-text')[0].style.display = "block";
    }

    if (descriptions[0].className.indexOf("secondary-detail") != -1) {
        descriptions[0].className = descriptions[0].className.replace("secondary-detail", "primary-detail")
    } else {
        descriptions[0].className = descriptions[0].className.replace("primary-detail", "secondary-detail")
    }

    if (descriptions[1].className.indexOf("secondary-detail") != -1) {
        descriptions[1].className = descriptions[1].className.replace("secondary-detail", "primary-detail")
    } else {
        descriptions[1].className = descriptions[1].className.replace("primary-detail", "secondary-detail")
    }
}

setTimeout(function() {
    closeSideBar()
}, 6000);