class GameScene extends Phaser.Scene {

    //timer = 30;
    //timerText = "";
    //static timerEvent;
    countdown
    constructor() {
        super("playGame");
        this.objects = [];
    }
    
    create() {
        console.log(this.data.get('weather') + '?')
        this.background = this.add.tileSprite(0, 0, config.width, config.height, this.data.get('weather'));
        this.background.setOrigin(0, 0);
        
        const textures = ['char1', 'char2', 'char3', 'char4', 'char5', 'char6', 'char7', 'char8', 'char9']; // List of texture keys
        
        // Function to get a random texture from the list
        const getRandomTexture = () => {
            const index = Phaser.Math.Between(0, textures.length - 1);
            return textures[index];
        };

        // Function to get a random position within the game area
        const getRandomPosition = () => {
            const x = Phaser.Math.Between(50, this.sys.game.config.width - 50);
            const y = Phaser.Math.Between(50, this.sys.game.config.height - 50);
            return { x, y };
        };
        
        // Sets the texture that will be used for the wanted person
        // Will be checked against all the other characters to make sure it's not used twice
        const correctTexture = getRandomTexture();

        const numCharacters = 50;

        // Creates characters and places them on screen, the wanted person will be placed last
        for (let i = 0; i < numCharacters; i++) {
            let position = getRandomPosition();
            let texture = getRandomTexture();
            
            // Check that the selected texture isn't the wanted one
            while (texture === correctTexture)
            {
                // Select new texture, will loop if wrong again
                texture = getRandomTexture();
            }
            
            const character = new Character(this, position.x, position.y, texture, 0);
            this.add.existing(character);
            this.objects.push(character);
        }
        
        // Creates final character (the correct one) at a random position
        let position = getRandomPosition();
        const character = new Character(this, position.x, position.y, correctTexture, 1);
        this.add.existing(character);
        this.objects.push(character);
        this.error = this.sound.add("error");
        
        // Place timer on screen
        /**this.timerText = this.add.text((this.sys.game.config.width - 100), (this.sys.game.config.height - 50), 'Time: ' + initialTime, {
            fontSize: '32px',
            fill: '#ffffff'
        });
        
        // Initialize Timer
        this.timer = initialTime;

        // Call the updateTimer method every second
        this.timerEvent = this.time.addEvent({
            delay: 1000,
            callback: this.updateTimer,
            callbackScope: this,
            loop: true
        });
           **/
        
        const timerLabel = this.add.text(this.sys.game.config.width * .5, 50, '30', {fontSize: 48}).setOrigin(.5)
        this.countdown = new CountdownController(this, timerLabel)
        this.countdown.start(this.handleCountdownFinished.bind(this))
    }

    handleCountdownFinished() {
        this.playerLose()

    }
    
    playerWin() {
        this.countdown.stop();
        this.add.text(this.sys.game.config.width * .5, this.sys.game.config.height * .5, 'You Win!', {fontSize: 48}).setOrigin(.5)
    }
    
    playerLose() {
        this.countdown.stop();
        this.add.text(this.sys.game.config.width * .5, this.sys.game.config.height * .5, 'You Lose!', {fontSize: 48}).setOrigin(.5)
    }
    
    update() {
        if(this.countdown){
            this.countdown.update()
        }
    }
}
