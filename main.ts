radio.setGroup(1)
radio.setTransmitPower(0)
basic.showIcon(IconNames.Ghost)
loops.everyInterval(500, function () {
    radio.sendString("ping")
})
