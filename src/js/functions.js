// const navSlide = () => {
//     const burger = document.querySelector('.burger');
//     const nav = document.querySelector('.nav_links');
//     const home = document.querySelector('.homePage');
//     const navLinks = document.querySelectorAll('.nav_links li');
//
//     burger.addEventListener('click', () => {
//         //toggle Nav
//         nav.classList.toggle('nav-active');
//
//         //blur background
//         home.classList.toggle('blur-active');
//
//         //burger and nav
//
//         //Animate Links
//         navLinks.forEach((link, index) => {
//             if(link.style.animation){
//                 link.style.animation = '';
//             }else{
//                 link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`
//             }
//         });
//         //Burger Animation
//         burger.classList.toggle('toggle');
//     });
// }

window.addEventListener("scroll", function () {
    // const header = document.querySelector('header');
    // header.classList.toggle('sticky', window.scrollY > 0);


    // $(document).ready(function(){
    //     let scroll_pos = 0;
    //     $(document).scroll(function() {
    //         scroll_pos = $(this).scrollTop();
    //         if(scroll_pos >= 1) {
    //             $('.nav_links a').css('color', '#B11313');
    //         } else {
    //             $('.nav_links a').css('color', '#DCDCDC');
    //         }
    //     });
    // });
});
const header = document.querySelector('#header');
const burger = document.querySelector('#burger');
const nav = document.querySelector('#navbar');

function toggleBurger(){

    burger.addEventListener('click', () => {
        burger.classList.toggle('toggle');
        nav.classList.toggle('active')
    });
}
function un_toggle(){

    document.onclick = (e) =>{

        if (e.target.id === 'menu1' || e.target.id === 'menu2'|| e.target.id === 'menu3'
            || e.target.id === 'menu4' || e.target.id === 'logo' || e.target.id === 'header'
            || e.target.id === 'homePage' || e.target.id === 'aboutMe' || e.target.id === 'projects'
            || e.target.id === 'skills' || e.target.id === 'contact')
        {
            // console.log(`${e.target.id} clicked`)
            burger.classList.remove('toggle');
            nav.classList.remove('active');
        } else{
            // console.log(`${e.target.id} clicked`)
        }
    }
}


const sectionOne = document.querySelector('#homePage');

const sectionOneOptions = {
    rootMargin: "-400px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function (
    entries,
    sectionOneObserver
) {
    entries.forEach(entry => {
        // console.log(entry.target);
        if(!entry.isIntersecting){
            header.classList.add('nav-scrolled');
        }else{
            header.classList.remove('nav-scrolled');
        }
    })
}, sectionOneOptions)

sectionOneObserver.observe(sectionOne);

toggleBurger();
un_toggle();
// navSlide();