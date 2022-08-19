// const loadText = document.querySelector(".loading-page");
// const background = document.querySelector(".background-photo");
// const intro = document.querySelector(".main-intro");
// const introBut = document.querySelector(".intro");
// const swipe = document.querySelector(".swipe");
// const clicktogoon = document.querySelector("#click-to-go-on");
// const main = document.querySelector("main");
// const clickIntro = document.querySelector(".click-intro");
// const introButto = document.querySelector(".slide");

// let load = 0;
// let loadTwo = 0;

// let loadedAmount = setInterval(blurring, 40);
// const antiOpa = setInterval (antiOpacity,50);


// function antiOpacity () {
//     loadTwo++
//     console.log(loadTwo)
//     if (loadTwo > 180) {
//         clearInterval(antiOpa)
//     }
//     clicktogoon.style.opacity = loadTwo-100 +"%";
// }

// function blurring() {
//     load++;
    
//     if(load > 99) {
//         clearInterval(loadedAmount);
//         loadText.style.display = "none";
//         clicktogoon.style.display = "block";
//         antiOpacity();
//     }
//     loadText.style.opacity = scale(load, 0, 100, 1, 0);
//     background.style.filter = `blur(${scale(load, 0, 100, 40, 0)}px)`;
//     loadText.innerHTML= "Welcome"
// }

// const scale = (num, in_min, in_max, out_min, out_max) => {
//     return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
// }

// function introButton(){
//     if (load > 99){
//         background.style.transition = "transform 1.5s ease-in-out";
//         background.style.transform = 'translateX(-100%)'; //foto kayma
//         clicktogoon.style.transition = "transform 1.5s ease-in-out";
//         clicktogoon.style.transform = 'translateX(100vw)'; //yazı kayma
//         // clickIntro.style.transition = "transform 1.5s ease-in-out";
//         // clickIntro.style.transform = 'translateX(-100vw)';
//         // introButto.style.transition = "transform 1.5s ease-in-out";
//         // introButto.style.transform = 'translateX(-100vw)';
//         introBut.style.display = "none";
//         main.style.transition = "transform 1.5s ease-in-out";
//         main.style.transform = "translateX(-1920)"; // arkadakilerin gelmesi
//     setTimeout(function(){
//     intro.style.display = "none"
//     },2000)
// }
// }
// let top = document.getElementsByClassName('topnavs')

// window.addEventListener('scroll', function(){
//     let value = window.scrollY;
//     top.style.top = value + 'px';
// })