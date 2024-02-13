const p1 = document.getElementById("p1");
const h1 = document.getElementById("h1");
const butt = document.getElementById("butt");
const mainSubject = document.getElementById("mainSubject");
const box = document.getElementById("box");
const butt1 = document.getElementById("butt1");
const butt2 = document.getElementById("butt2");
const butt3 = document.getElementById("butt3");
const butt4 = document.getElementById("butt4");

let hi1, li1, hj1, lj1;
let hi = 200;
let li = 450;
let hj = 300;
let lj = 550;
reCycle();


function reCycle() {
    hi1 = hi + "px";
    li1 = li + "px";
    mainSubject.style.bottom = hi1;
    mainSubject.style.left = li1;

    hj1 = hj + "px";
    lj1 = lj + "px";
    box.style.bottom = hj1;
    box.style.left = lj1;
}

function upB() {
    if (hj < 500) {
        hi = hi + 100;
        positionCheck(hi,hj,li,lj,"up");
    }
    if (hj === 500 && li !== lj){
        hi = hi + 100;
    }
}

function downB() {
    if (hj > 200) {
    hi = hi - 100;
    positionCheck(hi,hj,li,lj,"down");
}
    if (hj === 200 && li !== lj){
        hi = hi - 100;
    }
}

function leftB() {
    if (lj > 550) {
        li = li - 100;
        positionCheck(hi,hj,li,lj,"left");
    }
    if (lj === 550 && hi !== hj){
        li = li - 100;
    }
}

function rightB() {
    if (lj < 1150) {
        li = li + 100;
        positionCheck(hi,hj,li,lj,"right");
    }
    if (lj === 1150 && hi !== hj){
        li = li + 100;
    }
}



function boxU() {
    hj += 100;
    reCycle();
}
function boxD() {
    hj -= 100;
    reCycle();
}
function boxR() {
    lj += 100;
    reCycle();
}
function boxL() {
    lj -= 100;
    reCycle();
}



function moveControl(event) {
    if (event.key === "w" && hi < 600) {
        upB();
    } else if (event.key === "s" && hi > 100) {
        downB();
    } else if (event.key === "a" && li > 450) {
        leftB();
    } else if (event.key === "d" && li < 1250) {
        rightB();
    }
    reCycle();
}



butt1.addEventListener("click", function () {
    if (hi < 600) {
        upB();
    }
    reCycle();
})
butt2.addEventListener("click", function () {
    if (hi > 200) {
        downB();
    }
    reCycle();
})
butt3.addEventListener("click", function () {
    if (li > 450) {
        leftB();
    }
    reCycle();
})
butt4.addEventListener("click", function () {
    if (li < 1200) {
        rightB();
    }
    reCycle();
})