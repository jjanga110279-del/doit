//\u002a 별문자
let output = "";
for (let i = 1; i < 10; i++) {
  //i=1
  for (let j = 0; j < i; j++) {
    output += "\u002a";
  }
  output += "\n"; // \n 줄바꿈
}
console.log(output);
