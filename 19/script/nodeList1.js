//노드 추가하기
const newLi = document.createElement("li");
const newTxt=document.createTextNode("🎈🎈🎈🎈야호");
newLi.appendChild(newTxt);
console.log(newLi);
document.querySelector("ul").appendChild(newLi);


