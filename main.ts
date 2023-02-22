basic.forever(function () {
    basic.showNumber(pins.analogReadPin(AnalogPin.P0))
    serial.writeLine("")
    serial.writeNumber(pins.analogReadPin(AnalogPin.P0))
    basic.pause(500)
    basic.clearScreen()
    basic.pause(100)
})
