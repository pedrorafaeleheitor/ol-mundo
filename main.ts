input.onPinPressed(TouchPin.P0, function () {
    basic.showNumber(3)
    basic.showNumber(2)
    basic.showNumber(1)
    basic.showString("Bem-Vindo ao Inferno!")
    basic.pause(randint(1000, 5000))
    basic.showIcon(IconNames.Ghost)
})
input.onPinPressed(TouchPin.P1, function () {
    basic.showLeds(`
        # # . . .
        # # . . .
        # # . . .
        # # . . .
        # # . . .
        `)
})
basic.forever(function () {
	
})
