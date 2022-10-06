//Global Variables
const list = document.getElementById("navbar__list");
let listItems = document.createElement("li");
// build the nav and style Nav
for (let i = 1; i < 5; i++) {
    listItems = document.createElement("li");
    let textNode = document.createTextNode(`section ${i}`);
    listItems.classList.add("menu__link");
    listItems.setAttribute("id", `section ${i}`)
    listItems.appendChild(textNode);
    list.append(listItems);
}
// Add class 'active' to section when near top of viewport
window.addEventListener("scroll", function () {
    // get all sections on the page
    const sections = document.querySelectorAll('section');
    // loop through each section
    sections.forEach(section => {
        // get px distance from top
        const topDistance = section.getBoundingClientRect().top;
        // if the distance to the top is between 0-100px
        if (topDistance > 0 && topDistance < 300) {
            section.classList.add('active');
            // otherwise, remove the class
        } else {
            section.classList.remove('active');
        }
    });

})
//Add class 'active' to 
let nav = list.getElementsByClassName("menu__link");
for (var i = 0; i < nav.length; i++) {
    nav[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        if (current.length > 0) {
            current[0].className = current[0].className.replace(" active", "");
        }
        this.className += " activeNav";
    });
}
// Scroll to anchor ID using scrollTO event
function scrollTo(element) {
    window.scroll({
        behavior: 'smooth',
        left: 0,
        top: element.offsetTop
    });
}
for (let i = 1; i < 5; i++) {
    document.getElementById(`section ${i}`).addEventListener('click', () => {
        scrollTo(document.getElementById(`section${i}`));
    });
}