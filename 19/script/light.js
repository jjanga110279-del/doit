// 라이트 박스-->이미지 누르면 크게 보이게

let pics = document.querySelectorAll(".pic");
let lightbox = document.querySelector("#lightbox");
let lightboxImg = lightbox.querySelector("#lightboxImage");

pics.forEach((el, idx) => {
  el.addEventListener("click", showLightbox);
});

function showLightbox() {
let bigLocation=this.getAttribute("data-src");
console.log(this.getAttribute("data-src"));
lightboxImg.setAttribute("src", bigLocation);
  lightbox.style.display = "block";
  
}
lightbox.onclick = function () {
  lightbox.style.display = "none";
};
