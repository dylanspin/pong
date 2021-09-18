input.onButtonPressed(Button.A, function () {
    checkEnd()
    led.unplot(0, height)
    if (height < 4) {
        height = height + 1
    } else {
        height = 0
    }
    led.plot(0, height)
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
                if (pongY < 4) {
                    pongX = pongX + 1
                }
                if (pongY > 0) {
                    pongX = pongX - 1
                }
            }
        } else {
            if (pongX == 1) {
                if (height == pongY) {
                    bounce = 0
                } else {
                    basic.showIcon(IconNames.Skull)
                    ended = 1
                    basic.pause(2000)
                }
            } else {
                if (pongX > 0) {
                    pongX = pongX - 1
                }
                if (pongY < 4) {
                    pongX = pongX + 1
                }
                if (pongY > 0) {
                    pongX = pongX - 1
                }
            }
        }
        led.plot(pongX, pongY)
        basic.pause(500)
    }
}
function checkEnd () {
    if (ended == 1) {
        basic.clearScreen()
        start()
    }
}
input.onButtonPressed(Button.B, function () {
    checkEnd()
    led.unplot(0, height)
    if (height > 0) {
        height = height - 1
    } else {
        height = 4
    }
    led.plot(0, height)
})
function start () {
    ended = 0
    height = 2
    led.plot(0, height)
    pongX = 1
    pongY = 2
    led.plot(pongX, pongY)
}
let bounce = 0
let pongY = 0
let pongX = 0
let ended = 0
let height = 0
start()
basic.forever(function () {
    movePong()
})
