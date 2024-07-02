

export default class game extends Phaser.Scene
{
    constructor() {
        super('game'); 
    }

    preload() {
        
    }

    create() {
      //mapa
      const map= this.make.tilemap({key:'tilemap'})
      const tileset= map.addTilesetImage('Escenario (proceso)','calles')
      map.createLayer('calle',tileset).setScale(1)
      const edificios= map.createLayer('edificios',tileset).setScale(1.1)
      edificios.setCollisionByProperty({ collides: true})
      const debugGraphics = this.add.graphics().setAlpha(0.7)
      edificios.renderDebug(debugGraphics,{
        tileColor: null,
        collidingTileColor: new Phaser.Display.Color(243,234,48,255),
        faceColor: new Phaser.Display.Color(40,39,37,255)
      })
    //jugador
      this.player = this.physics.add.sprite(100,400,"attack").setScale(1.9)
     //teclas
      this.cursors = this.input.keyboard.createCursorKeys();

      //animaciones
      this.anims.create({
        key:'idle',
        frames:this.anims.generateFrameNames('RunX',{start: 0,end: 0}),
        repeat:-1,
        frameRate:5
      })
      this.anims.create({
        key:'right',
        frames:this.anims.generateFrameNames('RunX',{start: 1,end: 14}),
        frameRate:10
      })
      this.anims.create({
        key:'left',
        frames:this.anims.generateFrameNames('runl',{start: 0,end: 13}),
        frameRate:10
      })
      this.anims.create({
        key:'attackX',
        frames:this.anims.generateFrameNames('attack',{start:7, end:13}),
        frameRate:12,
       
      })
      this.anims.create({
        key:'attackY',
        frames:this.anims.generateFrameNames('attack',{start:0,end:6}),
        frameRate:12
      })
//cursor
      this.cursor= this.input.keyboard.createCursorKeys()
    
      this.myCam = this.cameras.main
      // making the camera follow the player
      this.myCam.startFollow(this.player)
   
    }
    update(){
    //   if(this.cursor || this.player){
    //     return
    // }
    if(this.cursor.left.isDown)
      {
          this.player.setVelocityX(-160)
          this.player.anims.play('left',true)
      }
      else if (this.cursor.right.isDown){
          this.player.setVelocityX(160);
          this.player.anims.play('right',true);
      }
      else {
          this.player.setVelocityX(0)
          // this.player.anims.play('idle',true)
       }
      if(this.cursor.up.isDown){
          this.player.setVelocityY(-160)
        
      }
      else if(this.cursor.down.isDown){
          this.player.setVelocityY(160)
      }
      else{
          this.player.setVelocityY(0)
          // this.player.anims.play('idle',true)
      }
if (this.cursor.up.isDown && this.player.body.touching.down){
          this.player.setVelocityY(-330)
      }
      if(this.cursor.space.isDown){
        this.player.setVelocity(1)
this.player.anims.play('attackX',true)
      }
      else if(this.cursor.space.isDown && this.player.body.velocity.x < 0){
        this.player.anims.play('attackY',true)      }
    //   if(this.player.body.velocity.y< -30){
    //       this.player.setFrame(17)
    //   } 
    //   else if(this.player.body.velocity.y > 30){
    //       this.player.setFrame(18)
    //   }
    //    if(this.player.body.velocity.y < -30 && this.player.body.velocity.x < 0){
    //       this.player.setFrame(26)
    //   }
    //   if(this.player.body.velocity.y > 30 && this.player.body.velocity.x < 0){
    //       this.player.setFrame(25)
    //   }
  
    }
  
  }
  
