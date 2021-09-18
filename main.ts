input.onButtonPressed(Button.A, function () {
    if (ended == 0) {
        led.unplot(0, height)
        if (height < 4) {
            height = height + 1
        } else {
            height = 0
        }
        led.plot(0, height)
    }
})
function movePong () {
    if (ended == 0) {
        led.unplot(pongX, pongY)
        if (bounce == 0) {
            if (pongX == 4) {
                bounce = 1
            } else {
                if (pongX < 4) {
                    pongX = pongX + 1
                }
                setHeight()
            }
        } else {
            if (pongX == 1) {
                if (height == pongY) {
                    bounce = 0
                } else {
                    basic.showIcon(IconNames.Skull)
                    ended = 1
                    basic.pause(2000)
                    start()
                }
            } else {
                if (pongX > 0) {
                    pongX = pongX - 1
                }
                setHeight()
            }
        }
        led.plot(pongX, pongY)
        basic.pause(500)
    }
}
function setHeight () {
    if (up == 0) {
        if (pongY > 0) {
            pongY = pongY - 1
        } else {
            up = 1
        }
    } else {
        if (pongY < 4) {
            pongY = pongY + 1
        } else {
            up = 0
        }
    }
}
input.onButtonPressed(Button.B, function () {
    if (ended == 0) {
        led.unplot(0, height)
        if (height > 0) {
            height = height - 1
        } else {
            height = 4
        }
        led.plot(0, height)
    }
})
function start () {
    basic.clearScreen()
    ended = 0
    height = 2
    led.plot(0, height)
    pongX = 1
    pongY = 2
    led.plot(pongX, pongY)
    up = randint(0, 1)
}
let up = 0
let bounce = 0
let pongY = 0
let pongX = 0
let height = 0
let ended = 0
start()
basic.forever(function () {
    movePong()
})
