function setDif () {
    if (difficulty <= 3) {
        difficulty = difficulty + 1
    } else {
        difficulty = 1
    }
    basic.showNumber(difficulty)
}
function difTime () {
    if (difficulty == 1) {
        basic.pause(1000)
    } else if (difficulty == 2) {
        basic.pause(500)
    } else if (difficulty == 3) {
        basic.pause(200)
    } else {
        basic.pause(100)
    }
}
input.onButtonPressed(Button.A, function () {
    if (settingSet == 1) {
        if (ended == 0) {
            led.unplot(0, height)
            if (height < 4) {
                height = height + 1
            } else {
                height = 0
            }
            led.plot(0, height)
        }
    } else {
        setDif()
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
        difTime()
    }
}
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    goSetting()
})
function goSetting () {
    basic.clearScreen()
    settingSet = 0
    difficulty = 1
    basic.showNumber(difficulty)
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
    if (settingSet == 1) {
        if (ended == 0) {
            led.unplot(0, height)
            if (height > 0) {
                height = height - 1
            } else {
                height = 4
            }
            led.plot(0, height)
        }
    } else {
        start()
    }
})
function start () {
    basic.clearScreen()
    settingSet = 1
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
let settingSet = 0
let difficulty = 0
goSetting()
basic.forever(function () {
    if (settingSet == 1) {
        movePong()
    }
})
