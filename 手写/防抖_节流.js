/*
******************防抖****************
原理：在事件被触发n秒后再执行回调，如果在这n秒内又被触发，则重新计时。
*/

const debounce = (fn, timeout) => {
  let timer;
  return function () {
    const _this = this;
    const args = arguments;
    if (timer) {
      clearTimeout(timer);
    };
    timer = setTimeout(() => {
      fn.apply(_this, args);
    }, timeout);
  };
}

// test
function testDebounce(e, content) {
  console.log(e, content);
}
var testDebounceFn = debounce(testDebounce, 1000); // 防抖函数
document.onmousemove = function (e) {
  testDebounceFn(e, 'debounce'); // 给防抖函数传参
}

/*
******************节流****************
原理：在事件被触发n秒内只会执行一次，无论n秒被触发几次，都只会执行一次。
*/

const throttle = (fn, timeout) => {
  let timer;
  return function () {
    const _this = this;
    const args = arguments;
    if (timer) {
      return;
    }
    timer = setTimeout(() => {
      fn.apply(_this, args);
      timer = null;
    }, timeout)
  }
}
function testThrottle(e, content) {
  console.log(e, content);
}
var testThrottleFn = throttle(testThrottle, 1000); // 节流函数
document.onmousemove = function (e) {
  testThrottleFn(e, 'throttle'); // 给节流函数传参
}


