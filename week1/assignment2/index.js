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

const renderHistory = (item) => {
  const listItem = document.createElement("li");
  listItem.classList.add("list", item.InOrExpense);
  listItem.innerHTML = `
      <p>${item.category}</p>
      <p>${item.store}</p>
      <p>${item.amount}</p>
      <button type="button" class="delete-btn">X</button>
    `;

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

    // HISTORY_LIST 배열에서도 해당 항목 제거 그래야 삭제하고 추가했을 때 기본 리스트들 다시 초기 랜더링 안됨
    const itemIndex = HISTORY_LIST.findIndex(
      (historyItem) => historyItem.id === item.id
    );
    if (itemIndex !== -1) {
      HISTORY_LIST.splice(itemIndex, 1);
    }
  });
};

/** 거래 내역을 필터링 */
const renderFilteredHistory = () => {
  listContainer.querySelector("ul").innerHTML = ""; // 새로 생성 막음
  HISTORY_LIST.forEach((item) => {
    if (
      (item.InOrExpense === "income" && incomeCheckbox.checked) ||
      (item.InOrExpense === "expense" && expenseCheckbox.checked)
    ) {
      renderHistory(item);
    }
  });
};

// 체크박스 상태 변경
incomeCheckbox.addEventListener("change", renderFilteredHistory);
expenseCheckbox.addEventListener("change", renderFilteredHistory);

/** 나의 총 자산 계산 */
const updateTotalAmounts = () => {
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
};

/** 모달 열기 */
const openModal = () => {
  let modal = document.getElementById("modal");
  modal.style.display = "flex";
};
/** 모달 닫기 */
const closeModal = () => {
  let modal = document.getElementById("modal");
  modal.style.display = "none";
};

/** 모달 창 */
const handleCheckboxChange = (checkbox, otherCheckboxId) => {
  const otherCheckbox = document.getElementById(otherCheckboxId);
  const isChecked = checkbox.checked;

  // 다른 체크박스를 체크 해제
  if (isChecked) {
    otherCheckbox.checked = false;
  }
};

/** 수입 지출에 따른 옵션 값 */
const toggleCategoryOptions = () => {
  const incomeCheckbox = document.getElementById("incomeAdd");
  const expenseCheckbox = document.getElementById("expenseAdd");
  const categorySelect = document.getElementById("category");

  if (incomeCheckbox.checked) {
    // 수입 체크박스가 체크된 경우
    categorySelect.innerHTML = `
            <option value="용돈">용돈</option>
            <option value="비트코인">비트코인</option>
        `;
  } else if (expenseCheckbox.checked) {
    // 원래는 else로 하려했는데 바뀌지 않음..왤까요 else도 이외니까 수입체크가 아니면 되어야 하는가
    categorySelect.innerHTML = `
            <option value="식비">식비</option>
            <option value="쇼핑">쇼핑</option>
        `;
  }
};

// 수입 지출에 따른 옵션 값 변경
document
  .getElementById("incomeAdd")
  .addEventListener("change", toggleCategoryOptions);
document
  .getElementById("expenseAdd")
  .addEventListener("change", toggleCategoryOptions);

/** 저장 */
const saveEntry = () => {
  const category = document.getElementById("category").value;
  const amount = document.getElementById("amount").value;
  const description = document.getElementById("description").value;
  const isIncome = document.getElementById("incomeAdd").checked;
  const isExpense = document.getElementById("expenseAdd").checked;

  if (!category || !amount || !description || (!isIncome && !isExpense)) {
    alert("입력 값을 모두 작성해주세요옹.");
    return;
  }

  const newItem = {
    id: HISTORY_LIST.length + 1, //아이디 추가
    category: category,
    store: description,
    amount: amount,
    InOrExpense: isIncome ? "income" : "expense",
  };

  HISTORY_LIST.push(newItem);
  updateTotalAmounts();
  renderFilteredHistory();

  document.getElementById("category").value = "";
  document.getElementById("amount").value = "";
  document.getElementById("description").value = "";
  document.getElementById("incomeAdd").checked = true;
  document.getElementById("expenseAdd").checked = true;

  alert("저장 완료");
};

// 초기 설정
toggleCategoryOptions();
//  수입지출 업데이트
updateTotalAmounts();
// 필터링
renderFilteredHistory();
