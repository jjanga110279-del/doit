function menu() {
  console.log("뚝불");
}
function lunch(callbck) {
  console.log(callbck);
  callbck();
}
lunch(menu);

const test = function (cb) {
  function fn() {
    for (let i = 0; i < 10; i++) {
      cb(i);
    }
  }
};

/* const fn = function (cb1) {
  console.log(`${cb1}번째 방문입니다.`);
};

test(fn);
 */
