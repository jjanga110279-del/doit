const tabs = document.querySelectorAll(".tab-menu a");
const panels = document.querySelectorAll(".tab-content>div");

//반복문
for (let i = 0; i < 3; i++) {
  //console.log(tabs[i].getAttribute("href"));
  //console.log(document.querySelector(tabs[i].getAttribute("href")));
  tabs[i].addEventListener("click", function (e) {
    console.log(e);
    e.preventDefault();
    const a = this.getAttribute("href");

    for (let k = 0; k < 3; k++) {
      tabs[k].classList.remove("active");
      panels[k].classList.remove("active");
    }
    tabs[i].classList.add("active");
    document.querySelector(a).classList.add("active");
  });
}
/* addEventListener  엡브라우저에서  발생할수 있는이벤트 수신할수 있는 수신기 명령허(외부 조삭할수 있게-클릭이나, ) 
      값을 두개 가짐, 첫번째는 종료, 두번째는 선택한 값만 */
//배열자료에 특정 데이터만 취득하고 싶을때는 [index] 인덱스 번호를 적음. 인덱스번호(0부터 시작)
//const arr= [1,2,3];
//console.log(arr[0]);
