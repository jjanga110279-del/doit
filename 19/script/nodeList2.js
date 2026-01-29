//newImg변수에 ing태그를 생성후 할당
const neWImg= document.createElement('img');

//속성추가
neWImg.src="images/books.png"
console.log(neWImg);
//body 에 자식으로 newImg 추가
document.body.appendChild(neWImg);