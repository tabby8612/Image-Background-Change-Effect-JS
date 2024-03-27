const imgBox = document.querySelector(".img-box");
const imgWrap = document.querySelector(".img-wrap");
const originalImg = document.getElementById("originalImg");
const line = document.getElementById("line");

originalImg.style.width = imgBox.offsetWidth + "px";

const leftSpace = imgBox.offsetLeft;


imgBox.addEventListener("mousemove", (e) => {
    const boxWidth = (e.pageX - leftSpace) + "px";

    imgWrap.style.width = boxWidth;

    line.style.left = boxWidth;
});