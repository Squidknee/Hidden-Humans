var gameSettings = {
    
}

var config = {
    width: 500,
    height: 500,
    backgroundColor: 0x000000,
    scene: [Scene1, Scene2],
    pixelArt: true,
    physics: {
      default: "arcade",
      arcade:{
          debug: false
      }
    }
}

var game = new Phaser.Game(config);