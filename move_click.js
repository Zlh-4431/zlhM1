function reCycle() {
    hi1 = hi + "px";
    li1 = li + "px";
    mainSubject.style.bottom = hi1;
    mainSubject.style.left = li1;
}

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