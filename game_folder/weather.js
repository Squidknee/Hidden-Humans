const button = document.querySelector("button");
const apiKey = `73af1048f86a458fa85210621242907`
const getLocation = () => {
  return new Promise((resolve, reject) => {
    const onSuccess = (position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      pos = [lat,lon];

      resolve(pos)
    }

    const onError = () => {
      console.log(error)
      reject();
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  })
}

getLocation().then(() => {
  console.log(pos);
  fetch(`https://api.weatherapi.com/v1/current.json?q=${pos}&key=${apiKey}`)
  .then(response => console.log(response.json()))
});
