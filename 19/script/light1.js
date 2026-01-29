//변수 pics에 작은 이미지를 할당
let pics = document.querySelectorAll(".pic");

//변수 lightbox에 라이트박스를 할당
let lightbox = document.querySelector("#lightbox");

//변수 lightImage에 라이트박스하위이미지를 할당
let lightboxImg = lightbox.querySelector("#lightboxImage");

//pics에 forEach를 사용해서 순회하도록 구현
pics.forEach((el)=>{
//순회하는 pics의 요소 클릭시 showLihtbox 함수를 참조함
el.addEventListener("click", showLightbox);
})

//showLihtbox 함수 선언//getAttribute,setAttribute

function showLightbox(){
  let big=this.getAttribute('data-src')
 lightboxImage.setAttribute('src',big)
  lightbox.style.display = "block";
}

lightbox.onclick=function(){
 lightbox.style.display = "none";
}


