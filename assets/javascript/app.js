const faders = document.querySelectorAll(".fade-in");
const sliders = document.querySelectorAll(".slide-in");

window.addEventListener("scroll", function() {
    let menuArea = document.getElementById('nav-sticky');

    if(window.pageYOffset > 0) {
        menuArea.classList.add("cus-nav");
        
    } else {
        menuArea.classList.remove("cus-nav");
        menuArea.classList.add("cus-menu");
    }
});

const bg = document.getElementById('header');
    window.addEventListener('scroll', function() {
    bg.style.backgroundSize = 130 - +window.pageYOffset/20+'%';
    bg.style.opacity = 1 - +window.pageYOffset/700+'';
})

// Parallax
const appearOptions = {
    threshold: 1,
    rootMargin: "0px 0px 250px 0px"
};

const appearOnScroll = new IntersectionObserver
    (function(
        entries, 
        appearOnScroll
    ){
        entries.forEach(entry => {
            if(!entry.isIntersecting) {
                return;
            }else{
                entry.target.classList.add('appear');
                appearOnScroll.unobserve(entry.target);
            }
        })
    }, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

sliders.forEach(slider =>{
    appearOnScroll.observe(slider);
})