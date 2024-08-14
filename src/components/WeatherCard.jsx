import React from "react";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";

const WeatherCard = ({ location }) => {
  const imgSrc=location?.main?.temp<30?"https://t4.ftcdn.net/jpg/05/13/26/73/360_F_513267391_QEmNGeOFLLqrILTnoq21dReUPp5UsoNr.jpg":"https://static.vecteezy.com/system/resources/thumbnails/033/352/730/small/sunny-sky-background-sunny-day-background-sun-wallpaper-sunny-sky-landscape-blue-sky-background-summer-sky-background-ai-generative-photo.jpg"
  return (
    <div className="weather-container">
      <Card sx={{ width:400 }}>
        <CardMedia
          sx={{ height: 150 }}
          image={imgSrc}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {location?.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <div>Temperature: {location?.main?.temp}</div>
            <div>Min_Temp: {location?.main?.temp_min}</div>
            <div>Max_Temp: {location?.main?.temp_max}</div>
            <div>The temperatures of  {location?.name} feels like {location?.main?.feels_like}</div>
          </Typography>
        </CardContent>  
      </Card>
    </div>
  );
};

export default WeatherCard;
