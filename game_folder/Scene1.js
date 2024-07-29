class Scene1 extends Phaser.Scene {
    constructor() {
        super("bootGame");
    }
  
    preload()
    {
        this.load.spritesheet("char1", "./assets/characters/char1.png", {frameHeight: 32, frameWidth: 32});
        this.load.spritesheet("char2", "./assets/characters/char2.png", {frameHeight: 32, frameWidth: 32});
        this.load.spritesheet("char3", "./assets/characters/char3.png", {frameHeight: 32, frameWidth: 32});
        this.load.spritesheet("char4", "./assets/characters/char4.png", {frameHeight: 32, frameWidth: 32});
        this.load.spritesheet("char5", "./assets/characters/char5.png", {frameHeight: 32, frameWidth: 32});
        this.load.spritesheet("char6", "./assets/characters/char6.png", {frameHeight: 32, frameWidth: 32});
        this.load.spritesheet("char7", "./assets/characters/char7.png", {frameHeight: 32, frameWidth: 32});
        this.load.spritesheet("char8", "./assets/characters/char8.png", {frameHeight: 32, frameWidth: 32});
        this.load.audio("error", ["./assets/sounds/error.ogg", "assets/sounds/error.mp3"]);

    }
  
    create() 
    {
        this.add.text(20, 20, "Loading game...");
        this.scene.start("playGame");
    }
}