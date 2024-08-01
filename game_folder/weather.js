class weather{
   apiKey = `73af1048f86a458fa85210621242907`
   arr1 = [1000, 1003, 1006, 1009]
   arr2 = [1030, 1063, 1087, 1150, 1153, 1168, 1180, 1183, 1186, 1189, 1192, 1195, 1198, 1201, 1240, 1243, 1246, 1273, 1276]
   gameBackground = "grass";
   pos = []
   weatherCode
   loaded = false
   constructor() {
      this.loadBackground()
   }
   // create new Promise to run resolve location coordinates on success using geolocation
   getLocation() {
      return new Promise((resolve, reject) => {
         const onSuccess = (position) => {
         const lat = position.coords.latitude;
         const lon = position.coords.longitude;
         this.pos = [lat,lon];
         resolve(this.pos);
         console.log(this.pos);
         return this.pos;
         }  
         // On error reject the promise and print error message to console log
         const onError = () => {
            reject()
         }
         navigator.geolocation.getCurrentPosition(onSuccess, onError);
      }).catch(onError => console.log('unable to get location info'));
   }
   // function to get weather conditions from location using coordinates from getLocation, outputs to console log
   async getWeather() {
      let url = `https://api.weatherapi.com/v1/current.json?q=${this.pos}&key=${this.apiKey}`
      try {
         const response = await fetch(url);
         const data = await response.json();
         this.weatherCode = data.current.condition.code;
         return this.weatherCode;
      } catch (error) {
      console.error('Error fetching weather data:', error);
      // Handle error appropriately
      }
   }

   loadBackground(){
  
      //calls getLocation and then console logs position and then calls getWeather, then sends weather code from getWeather to pullBackground
      this.getLocation().then(() => {
         this.getWeather(this.getLocation.pos).then(weatherCode => {
            this.chooseBackground()
            console.log(weatherCode);
         })
         
         this.loaded = true;
      });
   
   }
   chooseBackground() {

      if(this.arr1.includes(this.weatherCode) ) {
         this.gameBackground = "grass"
   
      } else if(this.arr2.includes(this.weatherCode)) {
         this.gameBackground = "dirt"
      }
      else {
         console.log('default');
         this.gameBackground = "grass"
      }     
      console.log(this.gameBackground);
      return this.gameBackground
   }
   getBackground() {
      return this.gameBackground;
   }
   
   getLoaded() {
      return this.loaded
   }
}
