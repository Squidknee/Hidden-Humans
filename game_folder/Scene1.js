class Scene1 extends Phaser.Scene {
    constructor() {
        super("bootGame");
    }
  
    preload()
    {
        this.load.image("grass", "./assets/backgrounds/grass.png");
        this.load.image("dirt", "./assets/backgrounds/dirt.png");
        this.load.image("start", "./assets/images/start.png");
        this.load.spritesheet("play", "./assets/images/play.png", {frameHeight: 72, frameWidth: 144});
        this.load.spritesheet("char1", "./assets/characters/char1.png", {frameHeight: 32, frameWidth: 32});
        this.load.spritesheet("char2", "./assets/characters/char2.png", {frameHeight: 32, frameWidth: 32});
        this.load.spritesheet("char3", "./assets/characters/char3.png", {frameHeight: 32, frameWidth: 32});
        this.load.spritesheet("char4", "./assets/characters/char4.png", {frameHeight: 32, frameWidth: 32});
        this.load.spritesheet("char5", "./assets/characters/char5.png", {frameHeight: 32, frameWidth: 32});
        this.load.spritesheet("char6", "./assets/characters/char6.png", {frameHeight: 32, frameWidth: 32});
        this.load.spritesheet("char7", "./assets/characters/char7.png", {frameHeight: 32, frameWidth: 32});
        this.load.spritesheet("char8", "./assets/characters/char8.png", {frameHeight: 32, frameWidth: 32});
        this.load.spritesheet("char9", "./assets/characters/char9.png", {frameHeight: 32, frameWidth: 32});
        this.load.audio("error", ["./assets/sounds/error.ogg", "assets/sounds/error.mp3"]);

    }
  

    
    create() 
    {
        this.anims.create({
            key: "play_anim",
            frames: this.anims.generateFrameNumbers("play",{
                start: 0, 
                end: 1
            }),
            frameRate: 1, 
            repeat: 0,
            hideOnComplete: true
        });

        this.add.image(0, 0, 'start').setOrigin(0, 0);
        
        //onclick of play{
        this.playButton = this.add.sprite(config.width/2+5, config.height/2+100, "play");
        this.playButton.setInteractive();
        this.playButton.on('pointerdown', this.play, this);
        
    }
    play(pointer, gameObject) {
       // gameObject.play('play_anim'); 
        this.scene.start("playGame");
    }
}