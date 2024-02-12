const p1 = document.getElementById("p1");
const h1 = document.getElementById("h1");
const butt = document.getElementById("butt");
const buttMove = document.getElementsByClassName("move")
const mainSubject = document.getElementById("mainSubject");
const butt1 = document.getElementById("butt1");
const butt2 = document.getElementById("butt2");
const butt3 = document.getElementById("butt3");
const butt4 = document.getElementById("butt4");

let buttId;
let hi1, li1;
let input1 = document.getElementById("input1");

function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // 不包含最大值，包含最小值
}

function random() {
    p1.innerHTML = getRandomInt(1,101);
}

butt.addEventListener("click", () => {
    random()
});


let hi = 200;
let li = 450;
hi1 = hi + "px";
li1 = li + "px";
mainSubject.style.bottom = hi1;
mainSubject.style.left = li1;

function upB() {
    hi = hi + 100;
}

function downB() {
    hi = hi - 100;
}

function leftB() {
    li = li - 100;
}

function rightB() {
    li = li + 100;
}

function reC() {
    hi1 = hi + "px";
    li1 = li + "px";
    mainSubject.style.bottom = hi1;
    mainSubject.style.left = li1;
}

function moveContrl(event) {
    if (event.key === "w" && hi < 600) {
        upB();
    } else if (event.key === "s" && hi > 200) {
        downB();
    } else if (event.key === "a" && li > 450) {
        leftB();
    } else if (event.key === "d" && li < 1200) {
        rightB();
    }
    reC();
}


document.addEventListener("keydown", function (event) {
    p1.innerHTML = event.key;
    moveContrl(event);
})


