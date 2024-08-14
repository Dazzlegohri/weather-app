import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import "./App.css";
import { useState } from "react";
import WeatherCard from "./components/WeatherCard";

const App = () => {
  const [city, setCity] = useState("");
  const [location, setLocation] = useState({});

  const ApiKEY = "18b5a240ae48488cbda79820b4f05ceb";

  const API = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${ApiKEY}&units=metric`;

  const ApiCall = async () => {
    const response = await fetch(API);
    const data = await response.json();
    setLocation(data);
  };

  console.log(location)
 
  const handleSubmit = (e) => {
    e.preventDefault();
    ApiCall();
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="City Name"
          variant="outlined"
          onChange={(e) => setCity(e.target.value)}
          value={city}
        />
        <br></br>
        <br></br>
        <Button variant="contained" type="submit">
          Search
        </Button>
      </form>
    <br></br><br></br>
    
      <WeatherCard location={location}/>
    </div>
  );
};

export default App;
