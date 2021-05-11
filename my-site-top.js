

const animationTargetElements = document.querySelectorAll(".textAnimation");
for (let i = 0; i < animationTargetElements.length; i++) {
  const targetElement = animationTargetElements[i];
  texts = targetElement.textContent,
  textsArray = [];

  targetElement.textContent = "";
  for (let j = 0; j < texts.split("").length; j++) {
    const tex = texts.split("")[j];
    if (tex ===" "){
      textsArray.push(" ");
    } else {
      textsArray.push('<span style="animation-delay: ' + (j * .15) + 's;">' + tex + '</span>');
    }
  }

  for (let k = 0; k < textsArray.length; k++) {
    targetElement.innerHTML += textsArray[k];
  }
}