

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
    boxU();
    move('right');
});




document.addEventListener("keydown", function (event) {
    p1.innerHTML = event.key;
    moveControl(event);
})


