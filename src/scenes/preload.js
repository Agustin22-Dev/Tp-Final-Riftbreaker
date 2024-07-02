
export default class preload extends Phaser.Scene
{

    constructor(){
        super('preload')
    }

    preload(){
        this.load.image('calles','public/tilemaps/escenario.png')
        this.load.tilemapTiledJSON('tilemap','public/tilemaps/escenario.json')
        this.load.spritesheet('attack','public/assets/attack/attack.png',{
            frameWidth:96,
            frameHeight:96
        })
        this.load.spritesheet('RunX','public/assets/RUN/RunX.png',{
            frameWidth:96,
            frameHeight:96
        })
        this.load.spritesheet('runl','public/assets/run left/runl.png',{
            frameWidth:96,
            frameHeight:96
        })
    }

    create(){
        this.scene.start('game')
    }
}