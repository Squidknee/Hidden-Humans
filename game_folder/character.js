class Character extends Phaser.GameObjects.Sprite {
   constructor(scene, x, y, texture, target) {
      super(scene, x, y, texture);
      this.target = target;
      this.setInteractive();
      this.on('pointerdown', this.onClick, this);
   }

   // Runs when the character is clicked
   // When selected with gamepad, the selected method can still be run for the same result
   onClick() {
      this.selected();
   }
   
   selected() {
      // checks if the selected character is correct or not
      if (this.target === 1)
      {
         this.setWin();
      }
      else {
         this.setLoss();
      }
   }
   
   setWin() {
      // the player selected the right character
   }
   
   setLoss() {
      // the player selects an incorrect character
   }
}