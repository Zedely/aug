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
    if (input.buttonIsPressed(Button.B)) {
    	
    }
    while (input.buttonIsPressed(Button.B)) {
        basic.showLeds(`
            # # . # #
            . . # . .
            # # # # #
            . # # # .
            # . . . #
            `)
    }
})
