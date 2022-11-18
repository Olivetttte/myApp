import React from "react";
import axios from "axios";

const API_endpoint = "https://api.openweathermap.org/data/3.0/onecall?";
const API_key = "6fe89d61ba6fedd3dc24e1305c3228a2";
function LiveLocation() {
  const [latitude, setLatitude] = React.useState("");
  const [longitude, setLongitude] = React.useState("");

  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });

    axios.get(
      `${API_endpoint}lat=${latitude}&lon=${longitude}&exclude=hourly,daily&appid=${API_key}`
    )
    .then((response) => {
      console.log(response.data);
    })
  }, [longitude, latitude]);
  return <div></div>;
}

export default LiveLocation;
