// var nav = document.querySelector('nav');
// console.log(navbar)
// window.onscroll = function () { 
//     "use strict";
//     if (document.body.scrollTop >= 200 ) {
//         nav.classList.add("nav-colored");
//     }
// };

let nav = document.querySelector('nav');
window.onscroll = function() {

    if (document.documentElement.scrollTop > 50) {
        if (nav.classList.contains('nav-transparent')) {
            nav.classList.remove("nav-transparent");
        }
        nav.classList.add('nav-colored');
    } else if (document.documentElement.scrollTop < 50 && nav.classList.contains('nav-colored')) {
        nav.classList.remove('nav-colored');
        nav.classList.add('nav-transparent')
    }
}