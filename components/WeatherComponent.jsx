import React from "react";
import Card from "./Card";
import Image from "next/image";

const WeatherComponent = ({lat,lon}) => {
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
        <h3 className="feature-title">Rain</h3>
        <span className="feature-name">Moderate Rain</span>
      </div>
    </Card>
  );
};

export default WeatherComponent;
