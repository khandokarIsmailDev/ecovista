import React from "react";
import Card from "./Card";
import { getWinData } from "@/lib/weather-info";
import Image from "next/image";

const WindComponent = async ({ lat, lon }) => {
  const { speed, deg } = await getWinData(lat, lon);
  // console.log(speed, deg);
  return (
    <Card>
      <div>
        <h6 className="feature-name">Wind</h6>
        <div className="feature-main">
          <Image
            className="max-w-20"
            src="/icon_wind.png"
            alt="rain icon"
            width={500}
            height={500}
          />
          <h3 className="feature-title">{speed} miles/hour</h3>
          <span className="feature-name">{deg} degrees</span>
        </div>
      </div>
    </Card>
  );
};

export default WindComponent;
