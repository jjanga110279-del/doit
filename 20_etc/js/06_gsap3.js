let tt = gsap.timeline({ default: { duration: 5 } });
tt.from("h1", { y: -50, opacity: 0 }).from("p", { y: -50, opacity: 0 }, "-=0.5").from("a", { y: -50, opacity: 0 }, "+=1").from("img", { y: -50, opacity: 0 }, "3").from(".box1", { y: -50, opacity: 0 }, "<").to(".box2", { y: -50, opacity: 0, rotate: 360 }, ">");

document.querySelector("a.animation1").addEventListener("click", function (e) {
  e.preventDefault();
  tt.reverse();
});
