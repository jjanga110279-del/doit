
  let a = true;
  document.querySelector("button").onclick = function () {
    if (a == true) {
      document.body.style.background = "gray";
      a = !a;
      console.log(a);
    } else {
      document.body.style.background = "beige";
      a = !a;
    }
  };

