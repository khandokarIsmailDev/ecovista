import React from "react";
import Card from "./Card";
import Image from "next/image";
import { weatherData } from "@/lib/weather-info";

const WeatherComponent =async ({lat,lon}) => {
    const {main,description }= await weatherData(lat,lon) 
    // console.log(main,description)
  return (
    <Card>
      <h6 className="feature-name">Current Weather</h6>
      <div className="feature-main">
        <Image
          className="max-w-20"
          src="/icon_rain.png"
          alt="rain icon"
          width={500}
          height={500}
        />
        <h3 className="feature-title">{main}</h3>
        <span className="feature-name"> {description}</span>
      </div>
    </Card>
  );
};

export default WeatherComponent;
