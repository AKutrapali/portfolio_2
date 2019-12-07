// Кнопка развертывающегося списка образования

let coll = document.getElementById('button_education');
let content = document.getElementById('content');
coll.addEventListener("click", function() {
this.classList.toggle("active");
if (content.style.display === "block") {
  content.style.display = "none";
} else {
  content.style.display = "block";
}
});

// Карусель с проектами

let button_left = document.getElementById('button_left');
let button_right = document.getElementById('button_right');
let project_content = document.getElementById('project_content');
let n = 0;
let a = parseInt(project_content.style.left) || 0 ;
let carousel = document.getElementsByClassName('carousel_item');
let scrollRight = function () {
  a = a-98; 
  n+=1;
  if (n===(carousel.length)) {
    n=0;
    a=0;
  }
    project_content.style.left =a + '%';
    return;
}
let scrollLeft = function () {
  a = a+98; 
  n-=1;
  if (n===-1) {
    n=(carousel.length-1);
    a=-(n)*98;
  }  
  project_content.style.left =a + '%';
  return;
}
button_left.addEventListener("click", scrollLeft);
button_right.addEventListener("click",scrollRight);

// Кнопка раскрывающегося списка в меню проектов на моб. версии

let coll1 = document.getElementById('carousel_button');
let content1 = document.getElementsByClassName('carousel_text');
coll1.addEventListener("click", function() {
    if (content1[0].style.display === 'block') {
      for (let n=0; n<content1.length; n++) {
        content1[n].style.display = "none";
        }
      } 
      else {
      for (let n=0; n<content1.length; n++) {
        content1[n].style.display = "block";
      }
    }
  }
);

// Кнопка перехода на мобильную-дектопную версию

let mobileVersion = document.getElementById('buttons_mobile_version');
let wrapper = document.getElementById('wrapper');
mobileVersion.addEventListener("click", function() {
  wrapper.classList.toggle("wrapper_mobile");
  if (mobileVersion.innerText == "Mobile")  {
    mobileVersion.textContent = "Desctop"
  }
  else { mobileVersion.textContent = "Mobile";
  for (let n=0; n<content1.length; n++) {
    content1[n].style.display = "block";}
    }
  }
);
                                     
// свайп мобильной версии

project_content.addEventListener('touchstart', handleTouchStart, false);   
project_content.addEventListener('touchmove', handleTouchMove, false);
var xDown ;                                                                                                           
function handleTouchStart(e) {                                         
    xDown = e.touches[0].clientX;                                                                         
};                                                
function handleTouchMove(e) {
  if ( xDown === 0.1234567) {
    return;
  }
  var xUp = e.touches[0].clientX;                                    
  var xDiff = xDown - xUp;
    if ( xDiff < 0 ) {
      scrollRight();
    } else {
      scrollLeft();
    }                   
  xDown = 0.1234567;                            
};