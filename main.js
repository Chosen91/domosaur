let spanChange = document.querySelector("span.mess-with-me");
spanChange.style.fontSize = "40px";

let paragraph = document.querySelector("paragraph.mess-with-me");
paragraph.style.backgroundColor = "green";

let imageErase = document.querySelector("#hide-me");
imageErase.style.display = "none";

let image1 = document.querySelector("#firstdinosaur");
image1.style.width = "324px";

function changeBackgroundToOrange() {
    spanadd.style.color = "orange";
}

spanadd.addEventListener("click", changeBackgroundToOrange);

function addRedBorder() {
    firstImg.style.border = "1px solid red";
}
firstImg.addEventListener("click", addRedBorder);

let featherDinosaur = document.querySelector("#feathers");
function transparent() {
    featherDinosaur.style.opacity = ".5";
}
featherDinosaur.addEventListener("click", transparent);

let switchButton = document.querySelector("#toggle");
function changeBackgroundToBlack() {
    const dinoRow = document.querySelector("#row");
    dinoRow.style.backgroundColor = "yellow";
}

switchButton.addEventListener("click", changeBackgroundToBlack);
let enlargeDinosaur = document.querySelector("#biggify");
function enlarge() {
    enlargeDinosaur.style.width = "200px";
}
function originalSize() {
    enlargeDinosaur.style.width = "162px";
}

Dinosaur.addEventListener("mouseover", enlarge);
enlargeDinosaur.addEventListener("mouseout", originalSize); 

