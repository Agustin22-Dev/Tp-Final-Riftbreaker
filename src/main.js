import game from './scenes/game.js';
import preload from './scenes/preload.js'
import menu from './scenes/menu.js'
const config = {
    title: "Riftbreaker",
    version: "0.0.1",
    type: Phaser.AUTO,
    scale: {
        parent: "phaser_container",
        width: 1120,
        height: 640,
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    pixelArt: true,
    physics: {
        default: "arcade",
        "arcade": {
            gravity: {
                y: 0
            },
           debug:true
            
        }
    },
    scene: [
      preload,menu,game
    ]
};

 new Phaser.Game(config);