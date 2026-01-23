const form = document.querySelector("form");
const input = document.querySelector('input[name="email"]');
form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("폼제출");
});
input.addEventListener("focus", () => {
  input.setAttribute("value", "이메일입력");
  document.querySelector('input[name="user"]').setAttribute("value", "꺼니왔니");
});
//변경될때마다
input.addEventListener("input", (e) => {
  console.log(e.target.value);
});
//변경완료
input.addEventListener("change", (e) => {
  console.log("완료:" + e.target.value);
});
//포커스해제
input.addEventListener("blur", () => {
  alert("살려주세요");
});
