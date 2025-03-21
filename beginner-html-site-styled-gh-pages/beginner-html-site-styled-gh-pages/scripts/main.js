let myButton = document.querySelector("button");
const myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  localStorage.setItem("name", myName);
  myHeading.textContent = `Mozilla is cool, ${myName}`;
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Mozilla is cool, ${storedName}`;
}

myButton.addEventListener("click", () => {
  setUserName();
});

const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.png") {
    myImage.setAttribute("src", "beginner-html-site-styled-gh-pages/beginner-html-site-styled-gh-pages/images/firefox2.png");
  } else {
    myImage.setAttribute("src", "beginner-html-site-styled-gh-pages/beginner-html-site-styled-gh-pages/images/firefox-icon.png");
  }
});
