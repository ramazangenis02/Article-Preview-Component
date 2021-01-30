//Variables

const shareIcon = document.getElementById("share-icon");
const shareCard = document.getElementById("share-card");

shareIcon.addEventListener("click", showCard);

function showCard() {
  if (shareCard.classList.contains("hide")) {
    shareCard.classList.remove("hide");
  } else {
    shareCard.classList.add("hide");
  }
}

window.onclick = function (event) {
  if (
    !event.target.matches(".share-card") &&
    !event.target.matches("#share-icon") &&
    !event.target.matches("#share-text")
  ) {
    shareCard.classList.add("hide");
  }
};
