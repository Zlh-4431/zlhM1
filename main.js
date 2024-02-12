const p1 = document.getElementById("p1");
const h1 = document.getElementById("h1");
const butt = document.getElementById("butt");

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
