const p1 = document.getElementById("p1");
const h1 = document.getElementById("h1");
const butt = document.getElementById("butt");
const mainSubject = document.getElementById("mainSubject");
const butt1 = document.getElementById("butt1");
const butt2 = document.getElementById("butt2");
const butt3 = document.getElementById("butt3");
const butt4 = document.getElementById("butt4");

let hi1, li1;
let hi = 200;
let li = 450;
reCycle();

function getRandomInt(min, max) {
    const minCelled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCelled) + minCelled); // 不包含最大值，包含最小值
}

function random() {
    p1.innerHTML = getRandomInt(1,101);
}

butt.addEventListener("click", () => {
    random()
});




document.addEventListener("keydown", function (event) {
    p1.innerHTML = event.key;
    moveContrl(event);
})


