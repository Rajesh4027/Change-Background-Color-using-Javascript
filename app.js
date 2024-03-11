const btn = document.getElementById("btn");
let randomNum = () => {
    return Math.floor(Math.random() *256);
}
let changecolor = () => {
    let randomColor = `rgb(${randomNum()},${randomNum()},
    ${randomNum()})`;
    document.body.style.backgroundColor = randomColor;
}
btn.addEventListener("click", changecolor);
window.addEventListener("load",changecolor);