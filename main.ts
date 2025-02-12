namespace SpriteKind {
    export const Fragment = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Fragment, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        if (Kael.overlapsWith(Fragment_Of_Present)) {
            Enter_Rift(0)
        } else if (Kael.overlapsWith(Fragment_Of_Past)) {
            Enter_Rift(1)
        } else if (Kael.overlapsWith(Fragment_Of_Future)) {
            Enter_Rift(2)
        }
    }
})
function Enter_Rift (Type: number) {
    Kael.sayText(Type)
}
function Generate_Fragments () {
    for (let value of tiles.getTilesByType(tiles.util.object0)) {
        Fragment_Of_Present = sprites.create(img`
            . . . . . . 6 6 . . . . . . . . 
            . . . . . 6 9 9 6 . . . . . . . 
            . . . . 6 9 9 9 6 . . . . . . . 
            . . . . 6 1 d 9 9 6 . . . . . . 
            . . . 6 1 1 1 d 9 6 . . . . . . 
            . . . 6 9 9 9 9 9 6 . . . . . . 
            . . . 6 9 9 e e c 9 6 . . . . . 
            . . . 6 9 9 e e c 9 6 . . . . . 
            . . . 6 7 7 e e c 9 6 . . . . . 
            . . . . 6 7 7 7 7 7 6 . . . . . 
            . . . . 6 7 7 7 7 7 6 . . . . . 
            . . . . 6 7 7 7 7 6 . . . . . . 
            . . . . . 6 7 7 7 6 . . . . . . 
            . . . . . 6 7 7 6 . . . . . . . 
            . . . . . . 6 7 6 . . . . . . . 
            . . . . . . . 6 . . . . . . . . 
            `, SpriteKind.Fragment)
        tiles.placeOnTile(Fragment_Of_Present, value)
        tiles.setTileAt(value, sprites.castle.tileGrass3)
    }
    for (let value of tiles.getTilesByType(tiles.util.object2)) {
        Fragment_Of_Future = sprites.create(img`
            . . . . . . 6 6 . . . . . . . . 
            . . . . . 6 b b 6 . . . . . . . 
            . . . . 6 b 5 b 6 . . . . . . . 
            . . . . 6 b b b b 6 . . . . . . 
            . . . 6 b b b 5 b 6 . . . . . . 
            . . . 6 b 5 b b b 6 . . . . . . 
            . . . 6 b b b b b 5 6 . . . . . 
            . . . 6 5 b b 5 b b 6 . . . . . 
            . . . 6 c c b b b b 6 . . . . . 
            . . . . 6 c c c c c 6 . . . . . 
            . . . . 6 c c c c c 6 . . . . . 
            . . . . 6 c c c c 6 . . . . . . 
            . . . . . 6 c c c 6 . . . . . . 
            . . . . . 6 c c 6 . . . . . . . 
            . . . . . . 6 c 6 . . . . . . . 
            . . . . . . . 6 . . . . . . . . 
            `, SpriteKind.Fragment)
        tiles.placeOnTile(Fragment_Of_Future, value)
        tiles.setTileAt(value, sprites.castle.tileGrass3)
    }
    for (let value of tiles.getTilesByType(tiles.util.object8)) {
        Fragment_Of_Past = sprites.create(img`
            . . . . . . 6 6 . . . . . . . . 
            . . . . . 6 9 9 6 . . . . . . . 
            . . . . 6 1 d 9 6 . . . . . . . 
            . . . . 6 1 1 d 9 6 . . . . . . 
            . . . 6 9 9 9 9 9 6 . . . . . . 
            . . . 6 9 9 9 7 9 6 . . . . . . 
            . . . 6 9 9 7 7 7 9 6 . . . . . 
            . . . 6 9 9 9 e 9 9 6 . . . . . 
            . . . 6 7 7 9 e 9 9 6 . . . . . 
            . . . . 6 7 7 7 7 7 6 . . . . . 
            . . . . 6 7 7 7 7 7 6 . . . . . 
            . . . . 6 7 7 7 7 6 . . . . . . 
            . . . . . 6 7 7 7 6 . . . . . . 
            . . . . . 6 7 7 6 . . . . . . . 
            . . . . . . 6 7 6 . . . . . . . 
            . . . . . . . 6 . . . . . . . . 
            `, SpriteKind.Fragment)
        tiles.placeOnTile(Fragment_Of_Past, value)
        tiles.setTileAt(value, sprites.castle.tileGrass3)
    }
}
let Fragment_Of_Future: Sprite = null
let Fragment_Of_Past: Sprite = null
let Fragment_Of_Present: Sprite = null
let Kael: Sprite = null
tiles.loadMap(tiles.createMap(tilemap`level2`))
Generate_Fragments()
Kael = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(Kael)
scene.cameraFollowSprite(Kael)
tiles.placeOnTile(Kael, tiles.getTileLocation(7, 8))
