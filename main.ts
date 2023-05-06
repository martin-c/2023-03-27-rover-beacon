radio.setGroup(1)
radio.setTransmitPower(0)
loops.everyInterval(500, function () {
    radio.sendString("ping")
})
basic.forever(function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showIcon(IconNames.SmallDiamond)
    basic.showIcon(IconNames.Diamond)
})
