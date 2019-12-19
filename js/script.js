var readTech = []

function closeSideBar() {
    document.getElementById('side-bar').style.width = 0;
    document.getElementById('open').style.display = "block";
    document.getElementById('close').style.display = "none";
    document.getElementById('content-container').style.left = 0;
}

function openSideBar() {
    document.getElementById('side-bar').style.width = "192px";
    document.getElementById('open').style.display = "none";
    document.getElementById('close').style.display = "block";
    document.getElementById('content-container').style.left = "196px";
}

function changeBack(type, color) {

    document.getElementById('content-container').className = color + " primary-white";
    var list = document.getElementsByClassName('open-description');
    for (x = 0; x < list.length; x++){
        list[x].style.display = "none";
        console.log(list[x])
        list[x].parentElement.className = list[x].parentElement.className.replace("md-6", "md-12");
    }

    var list = document.getElementsByClassName(type);
    for (x = 0; x < list.length; x++)
        list[x].style.display = "block";
    
    var containerExtra = document.getElementsByClassName('bordered-container-extra');
    for (x = 0; x < containerExtra.length; x++){
        console.log(containerExtra[x]);
        containerExtra[x].style.border = "0";
    }
}

function changeHome() {
	
    document.getElementById('content-container').className =  "primary-night";
    var list = document.getElementsByClassName('open-description');
    for (x = 0; x < list.length; x++)
        list[x].style.display = "block";
 
    var containerExtra = document.getElementsByClassName('bordered-container-extra');
    for (x = 0; x < containerExtra.length; x++){
        console.log(containerExtra[x]);
        containerExtra[x].style.border = "2px solid";
    }
}

function openLink(url) {
    var win = window.open(url, '_blank');
    win.focus();
}

function readMore(index){
    var project = document.getElementsByClassName('projects')[index];
    var descriptions = project.getElementsByClassName('item-description');
    console.log(project)
    var tech = project.getElementsByClassName('button-text')[0].style.display;
    
    if(tech != 'none' || tech == undefined){
        project.getElementsByClassName('button-text')[1].style.display = "block";
        project.getElementsByClassName('button-text')[0].style.display = "none";
    }else{
        project.getElementsByClassName('button-text')[1].style.display = "none";
        project.getElementsByClassName('button-text')[0].style.display = "block";
    }

    if(descriptions[0].className.indexOf("secondary-detail") != -1){
        descriptions[0].className = descriptions[0].className.replace("secondary-detail", "primary-detail")
    }else{
        descriptions[0].className = descriptions[0].className.replace("primary-detail", "secondary-detail")
    }

    if(descriptions[1].className.indexOf("secondary-detail") != -1){
        descriptions[1].className = descriptions[1].className.replace("secondary-detail", "primary-detail")
    }else{
        descriptions[1].className = descriptions[1].className.replace("primary-detail", "secondary-detail")
    }
}