class CountdownController
{
   // Scene Object
   scene
   
   // Text Object
   label
   
   // Timer Event Object
   timerEvent
   
   finishedCallback
   
   // Time Duration 
   duration = 0
   
   constructor(scene, label){
      this.scene = scene;
      this.label = label;
   }

   /**
    * @param {() => void} callback 
    * @param {number} duration
    */
   start(callback, duration = 30000)
   {
      this.stop()
      
      this.finishedCallback = callback
      this.duration = duration
      
      this.timerEvent = this.scene.time.addEvent({
         delay: duration,
         callback: () => {
            this.label.text = '0'
            
            this.stop()
            
            if (callback)
            {
               callback()
            }
         }
      })
   }
   
   stop() {
      if (this.timerEvent)
      {
         this.timerEvent.destroy()
         this.timerEvent = undefined
      }
   }
   
   wrong() {
      //this.duration = this.duration - 5000
      //this.scene.time.
   }
   
   update()
   {
      if (!this.timerEvent || this.duration <= 0){
         return
      }
      
      const elapsed = this.timerEvent.getElapsed()
      const remaining = this.duration - elapsed
      const seconds = remaining/1000
      
      this.label.text = seconds.toFixed(2)
   }
}