//for the animation
document.querySelector(".left").classList.add("appear");
window.addEventListener("scroll", ()=>{
  if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
    document.querySelector(".header").classList.add("fixed");
    document.querySelector("header button").style.top= 0;
  }else{
    document.querySelector(".header").classList.remove("fixed");
    document.querySelector("header button").style.top= -10;
  }
  const position = document.querySelector(".first").getBoundingClientRect().top;
  const screenPos = window.innerHeight/1.6;
  if(position < screenPos){
    document.querySelector(".disappear").classList.add("appear");
    document.querySelector(".second").classList.add("appear");
    document.querySelector(".third").classList.add("appear");
  }
} )

//for the carousel
const next    = document.querySelector(".next-btn"),
      prev    = document.querySelector(".prev-btn"),
      box     = document.querySelectorAll(".comment-box"),
      carousel1 = document.querySelector('.carousel-1'),
      carousel2 = document.querySelector('.carousel-2');
      carl = document.querySelector('.carl-cont');

next.addEventListener("click", ()=>{
  const  size =carousel1.clientWidth;
  carl.style.transform = "translateX(" + (-size) + "px)";
})
prev.addEventListener("click", ()=>{
  carl.style.transform = "translateX(" + 0 + "px)";
    //carousel2.style.transform = "translateX(" + -50 + "px)";
})

const nextMob    = document.querySelector(".next-btn-mob"),
      prevMob    = document.querySelector(".prev-btn-mob"),
      boxMob     = document.querySelectorAll(".carousel-1>.comment-box"),
      navDots = document.querySelector('.nav-btn');

let numOfBox = boxMob.length;
function init(){
  boxMob.forEach((box, i) => {
    box.style.left = i * 100 + "%";
  });
  boxMob[0].classList.add("active");
  createNavDots();
}
init();
//to create nav dots
function createNavDots(){
  for (let i = 0; i < numOfBox; i++) {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    navDots.appendChild(dot);
  }
  navDots.children[0].classList.add("active");
}
//to make carousel work
let counter = 1;
nextMob.addEventListener("click", ()=>{
      counter++;
    //adds the active class to the next box
    boxMob[counter-1].classList.add("active");
    navDots.children[counter-1].classList.add("active");
    boxMob[counter-1].style.left = "0%";
    boxMob[counter-1].classList.remove("inactive");
    //removes tthe active class from previous box
    boxMob[counter-2].classList.add("inactive");
    navDots.children[counter-2].classList.remove("active");
    boxMob[counter-2].classList.remove("active");
    //console.log(counter);

})
console.log(counter);
//counter > 4 ? counter=1 : console.log("omo");
counter=1;
//console.log(counter);
let counter2 = 3;
prevMob.addEventListener("click", ()=>{
    //adds the inactive class to the next box
    boxMob[counter2].classList.add("inactive");
    navDots.children[counter2-1].classList.add("active");
    boxMob[counter2].classList.remove("active");
    console.log(counter2);
    //makes first box active by default
    boxMob[0].classList.add("active");
    boxMob[0].classList.remove("inactive");
    //removes the inactive class from previous box
    boxMob[counter2-1].classList.add("active");
    navDots.children[counter2].classList.remove("active");
    boxMob[counter2-1].classList.remove("inactive");
    boxMob[counter2].style.left = ((counter2)*100) + "%";
    counter2--;
})
 console.log(navDots.children.length);
//for the hamburger sign
document.querySelector(".hambgr").addEventListener("click", ()=>{
  document.querySelector(".hambgr").classList.add("hide");
  document.querySelector(".hambgr").classList.remove("open");
  document.querySelector(".close").classList.add("open");
  document.querySelector(".back-drop").classList.add("fade");
  document.querySelector(".nav-mobile").classList.add("in");
})
document.querySelector(".close").addEventListener("click", ()=>{
  document.querySelector(".hambgr").classList.remove("hide");
  document.querySelector(".hambgr").classList.add("open");
  document.querySelector(".close").classList.remove("open");
  document.querySelector(".back-drop").classList.remove("fade");
  document.querySelector(".nav-mobile").classList.add("out");
  //document.querySelector(".back-drop").style.opacity = "0";
  document.querySelector(".nav-mobile").classList.remove("in");
})
