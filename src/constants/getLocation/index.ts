export async function GetLocation() {
  const coords = {lat: '', long: ''}

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else {
    window.alert("Geolocation is not supported by this browser.")
  }

  function showPosition(position:any) {
    coords.lat = position.coords.latitude
    coords.long = position.coords.longitude
  }

  function showError(error:any) {
    switch(error.code) {
      case error.PERMISSION_DENIED:
        window.alert("User denied the request for Geolocation.")
        break;
      case error.POSITION_UNAVAILABLE:
        window.alert("Location information is unavailable.")
        break;
      case error.TIMEOUT:
        window.alert("The request to get user location timed out.")
        break;
      case error.UNKNOWN_ERROR:
        window.alert("An unknown error occurred.")
        break;
    }
  }
  await new Promise((resolve) => setTimeout(resolve, 1000));
  if(coords.lat && coords.long){
    return Promise.resolve(coords)
  } else {
    return Promise.reject(coords);
  }
}


