// window.addEventListener("load", (event)=>{
//     let options = {
//         root: document.querySelector(".paralax-wrapper"),
//         rootMargin: "0px",
//         threshold: [0.375, 0.45, 0.525, 0.6]
//     };
//     let target = document.querySelector(".parallax-item");
//     let observer = new IntersectionObserver(showPartialContent, options);
//     observer.observe(target);
//     function changeDisplay(elem) {
//         if (elem.style.display == "" || elem.style.display == "none") {
//             elem.style.display = "block";
//             return 0;
//         }
//         elem.style.display = "none";
//     }
//     function showPartialContent(entries, observer){
//         let targetElem = document.querySelector(".parallax-item").children;
//         entries.forEach(entry => {
//             console.log(entry.intersectionRatio);
//             if (entry.intersectionRatio >= 0.35 && entry.intersectionRatio < 0.40) {
//                 console.log("masuk1");
//                 // changeDisplay(targetElem[0]);
//             }
//             else if (entry.intersectionRatio >= 0.40 && entry.intersectionRatio < 0.45) {
//                 console.log("masuk2");
//                 // changeDisplay(targetElem[1]);
//             } 
//             else if (entry.intersectionRatio >= 0.5 && entry.intersectionRatio < 0.55) {
//                 console.log("masuk3");
//                 // changeDisplay(targetElem[2]);
//             } 
//             else if (entry.intersectionRatio >= 0.) {
//                 console.log("masuk4");
//                 // changeDisplay(targetElem[3]);
//             }  
//         });
//     }
// })

function animateOnScroll(element){
    let options = {
        root: null,
        rootMargin: "0px",
        threshold: 0
    };
    let observer = new IntersectionObserver(animateWithCSS, options);

    return observer;
}

function animateWithCSS(entries){
    entries.forEach(entry => {
        let element = entry.target;
        let animation = element.dataset.animation;

        if(entry.isIntersecting){
            element.classList.add(animation);
        }
    });
}

function showElem(elems, direction) {
    for (let i = 0; i < elems.length; i++) {
        elems[i].style.display = "flex";
        if (direction) {
            elems[i].classList.add(`${direction}-in`);    
        }
    }
}
function hideElem(elems, direction) {
    for (let i = 0; i < elems.length; i++) {
        if (elems[i].style.display == "flex" && direction) {
            elems[i].classList.add(`${direction}-out`);
            setTimeout(()=>{
                elems[i].style.display = "none";
            }, 400);
            return 0;
        }
        elems[i].classList = '';
        elems[i].style.display = "none";
    }
}

window.addEventListener("scroll", (ev)=>{
    let parallax = document.querySelector(".parallax-wrapper");
    let parallaxItems = parallax.querySelector(".parallax-item").children;
    let parallaxHeight = parallax.clientHeight;

    if (parallaxHeight / 2 - window.scrollY > 500 ) {
        hideElem([parallaxItems[0]], "slide-right");
        hideElem([parallaxItems[1], parallaxItems[2], parallaxItems[3]]);
    }
    if (parallaxHeight / 2 - window.scrollY <= 100 && parallaxHeight / 2 - window.scrollY > 0) {
        showElem([parallaxItems[0]], "slide-left");
        hideElem([parallaxItems[1]], "slide-left");
        hideElem([parallaxItems[2], parallaxItems[3]]);
    }
    else if (7 * parallaxHeight / 12 - window.scrollY <= 100 && 7 * parallaxHeight / 12 - window.scrollY > 0) {
        showElem([parallaxItems[1]], "slide-right");
        hideElem([parallaxItems[2]], "slide-right");
        hideElem([parallaxItems[3]]);
    }
    else if (2 * parallaxHeight / 3 - window.scrollY <= 100 && 2 * parallaxHeight / 3 - window.scrollY > 0) {
        showElem([parallaxItems[2]], "slide-left");
        hideElem([parallaxItems[3]], "slide-left");
    }
    else if (3 * parallaxHeight / 4 - window.scrollY <= 100 && 3 * parallaxHeight / 4 - window.scrollY > 0) {
        showElem([parallaxItems[3]], "slide-right");
        showElem([parallaxItems[0], parallaxItems[1], parallaxItems[2], parallaxItems[3]]);
    }
})

window.addEventListener("DOMContentLoaded", ()=>{
    let animationTarget = document.querySelectorAll('[data-animation]');

    animationTarget.forEach(element => {
        let observer = animateOnScroll(element);
        observer.observe(element);
    });

    let parallax = document.querySelector(".parallax-wrapper");
    let parallaxItems = parallax.querySelector(".parallax-item").children;
    let parallaxHeight = parallax.clientHeight;

    if (parallaxHeight / 2 - window.scrollY > 500 ) {
        hideElem([parallaxItems[0], parallaxItems[1], parallaxItems[2], parallaxItems[3]]);
    }
    if (parallaxHeight / 2 - window.scrollY <= 100 && parallaxHeight / 2 - window.scrollY > 0) {
        showElem([parallaxItems[0]]);
        hideElem([parallaxItems[1], parallaxItems[2], parallaxItems[3]]);
    }
    // if (parallaxHeight / 2 + parallaxHeight/12 - window.scrollY <= 100 && parallaxHeight / 2 + parallaxHeight/12 - window.scrollY > 0)
    if (7 * parallaxHeight / 12 - window.scrollY <= 100 && 7 * parallaxHeight / 12 - window.scrollY > 0){ 
        showElem([parallaxItems[0], parallaxItems[1]]);
        hideElem([parallaxItems[2], parallaxItems[3]]);
    }
    // if  (parallaxHeight / 2 + parallaxHeight/6 - window.scrollY <= 100 && parallaxHeight / 2 + parallaxHeight/6 - window.scrollY > 0) {
    if (2 * parallaxHeight / 3 - window.scrollY <= 100 && 2 * parallaxHeight / 3 - window.scrollY > 0){    
        showElem([parallaxItems[0], parallaxItems[1], parallaxItems[2]]);
        hideElem([parallaxItems[3]]);
    }
    // if  (parallaxHeight / 2 + parallaxHeight/4 - window.scrollY <= 100 && parallaxHeight / 2 + parallaxHeight/4 - window.scrollY > 0) {
    if (3 * parallaxHeight / 4 - window.scrollY <= 100 && 3 * parallaxHeight / 4 - window.scrollY > 0){
        showElem([parallaxItems[0], parallaxItems[1], parallaxItems[2], parallaxItems[3]]);
    }
})