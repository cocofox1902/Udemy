if ("geolocation" in navigator) {
  let option = {
    enableHighAccuracy: true,
    // maximumAge: 0,
    timeout: 10000,
  };
  let watch = navigator.geolocation.getCurrentPosition(
    (position) => {
      console.log(position.coords.latitude, position.coords.longitude);
    },
    error,
    option
  );

  navigator.geolocation.clearWatch(watch);

  function error() {
    alert("geolocalisation impossible");
  }
} else {
  console.log("Geolocation is not available");
}
