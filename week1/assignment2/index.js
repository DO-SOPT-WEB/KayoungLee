const INIT_BALANCE = 0;
const HISTORY_LIST = [
  {
    id: 1,
    category: "과외비",
    store: "10월 입금",
    amount: "500000",
    InOrExpense: "income",
  },
  {
    id: 2,
    category: "식비",
    store: "압구정 낙곱새",
    amount: "300000",
    InOrExpense: "expense",
  },
  {
    id: 3,
    category: "비트코인",
    store: "비트코인 렛츠고",
    amount: "5000000",
    InOrExpense: "income",
  },
  {
    id: 4,
    category: "기타",
    store: "스타벅스 미니",
    amount: "7000",
    InOrExpense: "expense",
  },
];

let totalIncome = 0;
let totalExpense = 0;
/** 수입, 지출 필터링 */
const incomeCheckbox = document.getElementById("income");
const expenseCheckbox = document.getElementById("expense");
const listContainer = document.getElementById("list-container");

function renderHistory(item) {
  const listItem = document.createElement("li");
  listItem.classList.add("list", item.InOrExpense);
  listItem.innerHTML = `
      <p>${item.category}</p>
      <p>${item.store}</p>
      <p>${item.amount}</p>
      <button type="button" class="delete-btn">X</button>
    `;

  // 근데 이렇게 innerHtml로 하기엔 안좋다고 들어서 리팩토링 해볼게요..

  listContainer.querySelector("ul").appendChild(listItem);
  const deleteButton = listItem.querySelector(".delete-btn");

  deleteButton.addEventListener("click", () => {
    if (item.InOrExpense === "income") {
      totalIncome -= parseInt(item.amount);
    } else if (item.InOrExpense === "expense") {
      totalExpense -= parseInt(item.amount);
    }

    // 총 자산 업데이트
    const totalAmount = document.getElementById("totalAmount");
    totalAmount.textContent = totalIncome - totalExpense;

    // positive & negative 클래스 업데이트
    const positive = document.querySelector(".positive");
    const negative = document.querySelector(".negative");
    positive.textContent = `+ ${totalIncome}`;
    negative.textContent = `- ${totalExpense}`;

    // 리스트 삭제
    listItem.remove();
  });
}

function renderFilteredHistory() {
  listContainer.querySelector("ul").innerHTML = ""; // 새로 생성 막음
  HISTORY_LIST.forEach((item) => {
    if (
      (item.InOrExpense === "income" && incomeCheckbox.checked) ||
      (item.InOrExpense === "expense" && expenseCheckbox.checked)
    ) {
      renderHistory(item);
    }
  });
}

// 체크박스 상태 변경
incomeCheckbox.addEventListener("change", renderFilteredHistory);
expenseCheckbox.addEventListener("change", renderFilteredHistory);

/** 나의 총 자산 계산 */
function updateTotalAmounts() {
  totalIncome = 0;
  totalExpense = 0;

  HISTORY_LIST.forEach((item) => {
    if (item.InOrExpense === "income") {
      totalIncome += parseInt(item.amount);
    } else if (item.InOrExpense === "expense") {
      totalExpense += parseInt(item.amount);
    }
  });

  const totalAmount = document.getElementById("totalAmount");
  const positive = document.querySelector(".positive");
  const negative = document.querySelector(".negative");

  totalAmount.textContent = totalIncome - totalExpense;
  positive.textContent = `+ ${totalIncome}`;
  negative.textContent = `- ${totalExpense}`;
}

//  수입지출 업데이트
updateTotalAmounts();
// 필터링
renderFilteredHistory();
