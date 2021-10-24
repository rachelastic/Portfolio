
let hamburger = document.querySelector('.menu-holder');
let nav = document.getElementById('link-list');
hamburger.addEventListener('click', ()=> {
    if (!nav.style.display) {
        nav.style.display = "block";
    } else {
        nav.style.display = null;
    }
});
