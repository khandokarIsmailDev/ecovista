import React from "react";
import { getTempretureData } from "@/lib/weather-info";
import Card from "./Card";
import Image from "next/image";

const TempretureComponents = async ({ lat, lon }) => {
  const { temp, feels_like } = await getTempretureData(lat, lon);
  // console.log(temp,feels_like)

  return (
    <Card>
      <div>
        <h6 className="feature-name">Current Temperature</h6>
        <div className="feature-main">
          <Image
            className="max-w-20"
            src="/icon_tempareture.png"
            alt="rain icon"
            width={500}
            height={500}
          />
          <h3 className="feature-title">
            {temp}°C
          </h3>
          <span className="feature-name">
            Feels Like {feels_like}°C
          </span>
        </div>
      </div>
    </Card>
  );
};

export default TempretureComponents;
