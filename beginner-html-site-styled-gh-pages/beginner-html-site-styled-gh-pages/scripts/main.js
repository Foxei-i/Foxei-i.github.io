
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
const myImage = document.querySelector("img");

function setUserName() {
  const myName = prompt("Please enter your name.");
  localStorage.setItem("name", myName);
  myHeading.textContent = `Mozilla is cool, ${myName}`;
}

if (!localStorage.getItem("name")) {
	setUserName();
} else {
	const storedName = localStorage.getItem("name");
	myHeading.textContent = 'Mozilla is cool, ${storedName}';
}

myButton.addEventListener("click", () => {
  setUserName();
});

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "beginner-html-site-styled-gh-pages/beginner-html-site-styled-gh-pages/images/firefox-icon.png") {
    myImage.setAttribute("src", "beginner-html-site-styled-gh-pages/beginner-html-site-styled-gh-pages/images/firefox2.png");
  } else {
    myImage.setAttribute("src", "beginner-html-site-styled-gh-pages/beginner-html-site-styled-gh-pages/images/firefox-icon.png");
  }
});
