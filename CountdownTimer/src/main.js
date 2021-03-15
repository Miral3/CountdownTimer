/* 현재 날짜를 받아옴 */
function getDate() {
  const date = new Date();
  calcDate(date);
}

/* 내년의 1월 1일과 현재 날짜의 차이를 구함 */
function calcDate(date) {
  const toDay = date.getTime();
  const dDay = new Date(date.getFullYear() + 1, 0, 1).getTime();
  const gap = dDay - toDay;
  const gapDay = Math.ceil(gap / (1000 * 60 * 60 * 24));
  const gapHour = Math.ceil((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const gapMin = Math.ceil((gap % (1000 * 60 * 60)) / (1000 * 60));
  const gapSecond = Math.ceil((gap % (1000 * 60)) / 1000);

  displayCount(gapDay, gapHour, gapMin, gapSecond);
}

/* 계산된 시간을 전달받아 보여줌 */
function displayCount(day, hour, min, second) {
  const days = document.querySelector(".days");
  const hours = document.querySelector(".hours");
  const mins = document.querySelector(".mins");
  const seconds = document.querySelector(".seconds");

  days.innerHTML = transformNumber(day);
  hours.innerHTML = transformNumber(hour);
  mins.innerHTML = transformNumber(min);
  seconds.innerHTML = transformNumber(second);
}

/* 시간 분 초가 한자리 숫자이면 앞에 0을 붙여줌 */
function transformNumber(Number) {
  return Number < 10 ? `0${Number}` : Number;
}

/* 메인함수 */
function init() {
  getDate();
  setInterval(getDate, 1000);
}

init();