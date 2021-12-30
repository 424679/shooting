input.onButtonPressed(Button.A, function () {
    主角.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.AB, function () {
    子彈 = game.createSprite(主角.get(LedSpriteProperty.X), 主角.get(LedSpriteProperty.Y))
    for (let index = 0; index < 4; index++) {
        子彈.change(LedSpriteProperty.Y, -1)
        basic.pause(100)
    }
    子彈.delete()
})
input.onButtonPressed(Button.B, function () {
    主角.change(LedSpriteProperty.X, 1)
})
let 子彈: game.LedSprite = null
let 主角: game.LedSprite = null
game.setScore(0)
主角 = game.createSprite(2, 4)
let plane = game.createSprite(0, 0)
let plane1 = game.createSprite(1, 0)
basic.forever(function () {
    if (子彈) {
        if (子彈.isTouching(plane1)) {
            game.addScore(1)
            plane1.set(LedSpriteProperty.Y, 0)
            plane1.set(LedSpriteProperty.Y, 0)
            music.playMelody("C5 E D C F D B - ", 500)
        }
    }
})
basic.forever(function () {
    if (子彈) {
        if (子彈.isTouching(plane)) {
            game.addScore(1)
            plane.set(LedSpriteProperty.X, 0)
            plane.set(LedSpriteProperty.X, 0)
            music.playMelody("C5 E D C F D B - ", 500)
        }
    }
})
basic.forever(function () {
    if (plane.isTouching(主角)) {
        game.gameOver()
        basic.showString("score" + game.score())
    }
})
basic.forever(function () {
    basic.pause(500)
    plane.change(LedSpriteProperty.X, 1)
    if (plane.get(LedSpriteProperty.X) == 4) {
        basic.pause(500)
        plane.set(LedSpriteProperty.X, 0)
        plane.change(LedSpriteProperty.Y, 1)
    }
})
basic.forever(function () {
    basic.pause(500)
    plane1.change(LedSpriteProperty.X, 1)
    if (plane1.get(LedSpriteProperty.X) == 4) {
        basic.pause(500)
        plane1.set(LedSpriteProperty.X, 0)
        plane1.change(LedSpriteProperty.Y, 1)
    }
})
