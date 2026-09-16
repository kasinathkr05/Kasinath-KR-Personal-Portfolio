window.addEventListener("load", () => {
    setTimeout(() => {
        document.body.classList.add("loaded");
    }, 800);
});


// ========================================
// SCROLL REVEAL
// ========================================

const elements = document.querySelectorAll(
    "section:not(.hero) > *, .project, .service-list > div"
);

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    },
    {
        threshold: 0.15
    }
);

elements.forEach((element) => {
    observer.observe(element);
});


// ========================================
// MENU
// ========================================

const menu = document.querySelector(".menu");

if (menu) {
    menu.addEventListener("click", () => {
        document.body.classList.toggle("menu-open");
    });
}


// ========================================
// CURSOR BUBBLE
// ========================================

const bubble = document.querySelector(".cursor-bubble");

let mouseX = 0;
let mouseY = 0;

let bubbleX = 0;
let bubbleY = 0;


// Mouse movement
document.addEventListener("mousemove", (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;

    if (bubble) {
        bubble.classList.add("active");
    }
});


// Smooth bubble movement
function animateBubble() {

    bubbleX += (mouseX - bubbleX) * 0.15;
    bubbleY += (mouseY - bubbleY) * 0.15;

    if (bubble) {
        bubble.style.left = bubbleX + "px";
        bubble.style.top = bubbleY + "px";
    }

    requestAnimationFrame(animateBubble);
}

animateBubble();


// ========================================
// BUBBLE HOVER EFFECT
// ========================================

const hoverElements = document.querySelectorAll(
    "a, button, .project, .work-card, .service-list > div"
);

hoverElements.forEach((element) => {

    element.addEventListener("mouseenter", () => {

        if (!bubble) return;

        bubble.style.width = "140px";
        bubble.style.height = "140px";

    });


    element.addEventListener("mouseleave", () => {

        if (!bubble) return;

        bubble.style.width = "80px";
        bubble.style.height = "80px";

    });

});