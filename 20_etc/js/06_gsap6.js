//01
gsap.to(".sec1 .box", {
  duration: 2,
  x: 500,
  borderRadius: 100,
  rotation: 360,
});

//02 trigger
gsap.to(".sec2 .box", {
  duration: 2,
  x: 500,
  borderRadius: 100,
  rotation: 360,
  backgroundColor: "yellow",
  //스크롤 상태에 따라 애니메이션 제어
  scrollTrigger: {
    //애니메이션 시작기준(대상이 뷰포트에 진입순간)
    trigger: ".sec2 .box",
  },
});

//03
gsap.to(".sec3 .box", {
  duration: 2,
  x: 500,
  scrollTrigger: {
    trigger: ".sec3 .box",
    // onEnter onLeave onEnterBack onLeaveBack
    toggleActions: "play none reverse none",
  },
});

//04
gsap.to(".sec4 .box", {
  duration: 2,
  x: "50vw",
  rotation: 360,
  scale: 1.5,
  borderRadius: 100,
  scrollTrigger: {
    trigger: ".sec4 .box",
    markers: true /* 시작과 끝나는 지점이 주석 처럼 화면에 보여짐  */,
    start: "top 50%",
    end: "bottom 20%",
    toggleActions: "play none reverse none",
  },
});

//05
gsap.to(".sec5 .box", {
  duration: 2,
  scale: 8,
  scrollTrigger: {
    trigger: ".sec5 .box",
    scrub: true,
  },
});

//06 시작과 끝의 스타일을 동시에 정하는 메서드 fromTo {시작},{종료}
gsap.fromTo(
  ".sec6 .box",
  {
    scale: 0.5,
    borderRadius: 100,
  },
  {
    scale: 4,
    borderRadius: 20,
    rotation: 180,
    scrollTrigger: {
      trigger: ".sec6",
      // scrub: true, 숫자로도 지정할 수 있음
      scrub: 1,
      pin: true,
      start: "top +=100",
      end: "+=500",
      markers: true,
      id: "sec6",
    },
  },
);

//07
gsap.to(".sec7 .box", {
  duration: 2,
  x: 500,
  rotation: 360,
  borderRadius: 100,
  scrollTrigger: {
    trigger: ".sec7 .box",
    scrub: true,
    toggleClass: "active",
  },
});

//08
const sec8 = document.querySelector(".sec8");
const box8 = sec8.querySelector(".box");
gsap.to(box8, {
  x: 500,
  rotation: 360,
  borderRadius: "50%",
  scrollTrigger: {
    trigger: sec8,
    start: "top center",
    end: "bottom center",
    scrub: true,
    //진입시 배경색 변경
    onEnter: () => {
      console.log("enter");
    },
    onLeave: () => {
      console.log("onLeave");
    },
    onEnterBack: () => {
      console.log("onEnterBack");
    },
    onLeaveBack: () => {
      console.log("onLeaveBack");
    },
    onUpdate: (self) => {
      console.log("onUpdate");
      sec8.querySelector(".num").style.color = "white";
      console.log("self:", self);

      const percent = Math.round(self.progress * 100);
      sec8.querySelector(".num").innerText = `${percent}%`;
    },
  },
});
