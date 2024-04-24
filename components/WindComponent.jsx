import React from "react";
import Card from "./Card";
import { getWinData } from "@/lib/weather-info";
import Image from 'next/image'

const WindComponent = async ({ lat, lon }) => {
  const {speed,deg} = await getWinData(lat, lon);
  console.log(speed,deg)
  return (
    <Card>
      <div>
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
      </div>
    </Card>
  );
};

export default WindComponent;
