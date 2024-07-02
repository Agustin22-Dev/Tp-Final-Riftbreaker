
export default class preload extends Phaser.Scene
{

    constructor(){
        super('preload')
    }

    preload(){
        this.load.image('calles','public/tilemaps/escenario.png')
        this.load.image('enemigo','public/assets/enemigo.png')
        this.load.tilemapTiledJSON('tilemap','public/tilemaps/escenario.json')
        this.load.image('title','public/assets/Title.png')
        this.load.spritesheet('idle','public/assets/idle.png',{
    frameWidth:96,
    frameHeight:96
        })
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
        this.load.image('start','public/assets/start.png')
        this.load.spritesheet('heart','public/assets/heart.png',{
            frameWidth:7,
            frameHeight:7
        })
    }

    create(){
        this.scene.start('menu');
    }
}