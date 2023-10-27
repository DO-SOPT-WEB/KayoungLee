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

/** 수입, 지출 필터링 */
const incomeCheckbox = document.getElementById("income");
const expenseCheckbox = document.getElementById("expense");
const listContainer = document.getElementById("list-container");

function renderHistoryItem(item) {
  const listItem = document.createElement("li");
  listItem.classList.add("list", item.InOrExpense);
  listItem.innerHTML = `
    <p>${item.category}</p>
    <p>${item.store}</p>
    <p>${item.amount}</p>
    <button type="button">X</button>
  `;

  listContainer.querySelector("ul").appendChild(listItem);
}

function renderFilteredHistory() {
  listContainer.querySelector("ul").innerHTML = ""; //새로 생성 막음
  HISTORY_LIST.forEach((item) => {
    if (
      (item.InOrExpense === "income" && incomeCheckbox.checked) ||
      (item.InOrExpense === "expense" && expenseCheckbox.checked)
    ) {
      renderHistoryItem(item);
    }
  });
}

renderFilteredHistory();

/** 체크박스 상태 변경 */
incomeCheckbox.addEventListener("change", renderFilteredHistory);
expenseCheckbox.addEventListener("change", renderFilteredHistory);
