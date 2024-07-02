import game from './scenes/game.js';
import preload from './scenes/preload.js'

const config = {
    title: "Riftbreaker",
    version: "0.0.1",
    type: Phaser.AUTO,
    scale: {
        parent: "phaser_container",
        width: 960,
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
            }
           
            
        }
    },
    scene: [
      preload,game
    ]
};

 new Phaser.Game(config);