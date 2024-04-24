import React from 'react';
import { getTempretureData } from '@/lib/weather-info';
import Card from './Card';
import Image from 'next/image'

const TempretureComponents = async({lat,lon}) => {
    const {temp,feels_like} = await getTempretureData(lat,lon)
    console.log(temp,feels_like)

    return (
        <Card>
            <h6 class="feature-name">Current Temperature</h6>
                <div class="feature-main">
                  <Image
                    class="max-w-20"
                    src="/icon_tempareture.png"
                    alt="rain icon"
                    width={500}
                    height={500}
                  />
                  <h3 class="feature-title">{temp}°C</h3>

                  <span class="feature-name">Feels Like {feels_like}°C</span>
                </div>
        </Card>
    );
};

export default TempretureComponents;