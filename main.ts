basic.forever(function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . #
        . . . # .
        # # # . .
        `)
    basic.showLeds(`
        . . . . .
        # # # # #
        . # # . .
        . # # . .
        . # # . .
        `)
    while (true) {
        basic.showLeds(`
            # # . # #
            . . # . .
            # # # # #
            . # # # .
            # . . . #
            `)
        if (input.buttonIsPressed(Button.B)) {
            break;
        }
    }
})
