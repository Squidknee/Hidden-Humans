class GameScene extends Phaser.Scene {
    timer = 30;
    timerText = "";
    timerEvent;
    constructor() {
        super("playGame");
        this.objects = [];
    }
    
    create() {
        const textures = ['char1', 'char2', 'char3']; // List of texture keys
        const initialTime = 30;
        
        // Function to get a random texture from the list
        const getRandomTexture = () => {
            const index = Phaser.Math.Between(0, textures.length - 1);
            return textures[index];
        };

        // Function to get a random position within the game area
        const getRandomPosition = () => {
            const x = Phaser.Math.Between(0, this.sys.game.config.width);
            const y = Phaser.Math.Between(0, this.sys.game.config.height);
            return { x, y };
        };
        
        // Sets the texture that will be used for the wanted person
        // Will be checked against all the other characters to make sure it's not used twice
        const correctTexture = getRandomTexture();

        const numCharacters = 10;

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
        
        // Place timer on screen
        this.timerText = this.add.text((this.sys.game.config.width - 100), (this.sys.game.config.height - 50), '', {
            fontSize: '32px',
            fill: '#ffffff'
        });
        
        // Initialize Timer
        this.timer = initialTime;

        // Call the updateTimer method every second
        this.timerEvent = this.time.addEvent({
            delay: 1000,
            callback: updateTimer,
            callbackScope: this,
            loop: true
        });
    }

    updateTimer() {
        if (timer > 0) {
            timer--;
        }

        if (timer <= 0) {
            // Call the method when the timer reaches zero
            this.playerLose();
        }
    }
    
    // Method to restart the timer
    restartTimer() {
        this.timer = 30;
        this.timerEvent.reset({
            delay: 1000,
            callback: updateTimer,
            callbackScope: this,
            loop: true
        });
    }
    
    playerWin() {
        this.timerEvent.remove(false);
    }
    
    playerLose() {
        this.timerEvent.remove(false);
    }
}
