const countEl = document.querySelector(".count");
const btnEl = document.querySelector(".btn");
let count = 30;
let time = 0;
const interval = 1000;

const disabledKeys = ["c", "C", "x", "J", "u", "I"];

const showAlert = (e) => {
  e.preventDefault();
  return alert("Xin lỗi bạn không thể copy hoặc xem source code!");
};

document.addEventListener("contextmenu", (e) => {
  showAlert(e);
});

document.addEventListener("keydown", (e) => {
  if ((e.ctrlKey && disabledKeys.includes(e.key)) || e.key === "F12")
    showAlert(e);
});

function handleDec(currentTime) {
  if (time <= currentTime) {
    count--;
    countEl.innerText = count;
    time = currentTime + interval;
  }

  count > 0
    ? window.requestAnimationFrame(handleDec)
    : (btnEl.disabled = false);
}

window.requestAnimationFrame(handleDec);

btnEl.addEventListener("click", function () {
  window.location.href = "https://www.youtube.com/watch?v=u2Ix73ePWDs";
});
