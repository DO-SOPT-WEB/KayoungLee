const lasVegasSection = document.getElementById("lasvegasSection");
const imageInfo = document.getElementById("imageInfo");
const imageTitle = document.getElementById("imageTitle");
const imageDescription = document.getElementById("imageDescription");

/** hover시 배경화면 어둡게 보이기 : filter */
const images = lasVegasSection.querySelectorAll("img");

images.forEach((image) => {
  image.addEventListener("mouseover", () => {
    image.style.filter = "brightness(50%)";
  });

  image.addEventListener("mouseout", () => {
    image.style.filter = "brightness(100%)";
  });
});

/** hover시 텍스트 보이기 : opacity */
const imgWithText = document.querySelectorAll(".imgWithText");

imgWithText.forEach((item) => {
  item.addEventListener("mouseover", () => {
    const text = item.querySelector(".lasVegas_text");
    text.style.opacity = 1;
    text.style.transform = "translate(-50%, -60%)";
  });

  item.addEventListener("mouseout", () => {
    const text = item.querySelector(".lasVegas_text");
    text.style.opacity = 0;
    text.style.transform = "translate(-50%, -50%)";
  });
});

/** up 아이콘 스크롤 선명하게 */
const scrollToTopButton = document.getElementById("scrollToTop");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  // 스크롤 위치에 따라 opacity 값을 조절
  const opacity = scrollY / 2000;

  if (opacity > 1) {
    scrollToTopButton.style.opacity = 1;
  } else {
    scrollToTopButton.style.opacity = opacity;
  }
});
