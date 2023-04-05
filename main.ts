radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 150) {
        if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0) {
        	
        }
    }
})
radio.setGroup(200)
basic.showString("Explorar")
let strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
basic.forever(function () {
    basic.showIcon(IconNames.Happy)
    basic.pause(500)
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
    basic.showIcon(IconNames.Asleep)
    basic.pause(500)
    strip.showColor(neopixel.colors(NeoPixelColors.Orange))
})
