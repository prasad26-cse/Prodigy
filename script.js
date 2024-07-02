function hover(x) {
    x.style.color = "aqua";
    x.style.backgroundColor = "red";
    x.style.cursor = "pointer";
  
    
}

function noHover(x) {
    x.style.color = "#955d19";
    x.style.backgroundColor = "transparent";
    x.style.textDecoration = "none";
}
const myHome=(x)=>{
    location.href = "#home"
}

const myAbout=(x)=>{
    location.href = '#about';
}

const myServices=(x)=>{
    location.href = '#services';
}



function myContact(x) {
    location.href = "#contact";
}

function mailOver(x) {
    x.style.textDecoration = "underline";
}

function mailOut(x) {
    x.style.textDecoration = "none";
    x.style.color = "000";
}


// responsive
function closeNav() {
    document.getElementById("menu").style.width = "0%";
}

function openNav() {
    document.getElementById("menu").style.width = "100%";
}