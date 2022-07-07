const hamburger = document.querySelector(".hamburger");
const links = document.querySelector('.links');
const all = document.querySelectorAll('.nav-links');


hamburger.addEventListener('click', () => {
    links.classList.toggle('open');
    all.forEach(link => {
        link.classList.add('fade');
    });
});
all.forEach(link => {
    link.addEventListener('click', () => {
        links.classList.toggle('open');
    });
});
var home = document.getElementById("home");
var about = document.getElementById("about");
var project = document.getElementById("projects");
var contact = document.getElementById("contact");

//to find the position of the element..
function findPosition(obj) { 
    var currenttop = 0; 
    if (obj.offsetParent) { 
        do { 
            currenttop += obj.offsetTop; 
        } while ((obj = obj.offsetParent)); 
        return [currenttop]; 
    } 
}


//to scroll down to the position..
const showHome = () => {
    window.scrollTo(0, findPosition(home));
}
const showAbout = () => {
    window.scrollTo(0, findPosition(about));
}
const showProjects = () => {
    window.scrollTo(0, findPosition(project));
}
const showContact = () => {
    window.scrollTo(0, findPosition(contact));
}

