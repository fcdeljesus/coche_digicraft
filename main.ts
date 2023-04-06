radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 150) {
        pixel = 1
    }
})
input.onButtonPressed(Button.A, function () {
    pixel = 1
})
function parar () {
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
    basic.pause(5000)
}
function andar () {
    if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 100)
    } else {
        if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
            maqueen.motorStop(maqueen.Motors.All)
            parar()
        }
        if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 100)
        } else {
            if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
                maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 100)
                maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
            }
        }
    }
}
let strip: neopixel.Strip = null
let pixel = 0
pixel = 0
radio.setGroup(200)
basic.showString("Explorar")
strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
basic.forever(function () {
    if (pixel == 0) {
        basic.showIcon(IconNames.Happy)
        basic.pause(500)
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        basic.showIcon(IconNames.Asleep)
        basic.pause(500)
        strip.showColor(neopixel.colors(NeoPixelColors.Orange))
    } else {
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
        andar()
    }
})
