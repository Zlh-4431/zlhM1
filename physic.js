
function move(direction) {
    switch (direction) {
        case "up":
            boxU();
            reCycle();
            break;
        case "down":
            boxD();
            reCycle();
            break;
        case "right":
            boxR();
            reCycle();
            break;
        case "left":
            boxL();
            reCycle();
            break;
    }
}

function positionCheck(x,y,z,w,direction) {
    if (x === y && z === w ) {
        move(direction);
        reCycle();
    }
}