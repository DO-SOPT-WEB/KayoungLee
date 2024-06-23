console.log("here");

// 망고 추가
const mango = document.createElement("li");
const mangoText = document.createTextNode("mango");

// mango.innerText = "mango";
mango.appendChild(mangoText);
// <li>mango</li>

const fruitList = document.querySelector("ul");
fruitList.appendChild(mango);

// 클래스 red 인 과일들 지우기
const redFruit = document.querySelectorAll(".red");
redFruit.forEach((fruit) => {
  fruit.remove();
});

// 세 번째 과일만 파란색으로 만들기
const thirdFruit = document.querySelector("li:nth-child(3)");
thirdFruit.classList.add("blue");

// 과일 개수 출력하기
const allList = document.querySelectorAll("li");
const lengthbtn = document.querySelector("button.count");
lengthbtn.addEventListener("click", showLength);

function showLength() {
  alert(`과일 개수는 ${allList.length}입니다`);
}
