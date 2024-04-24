import WeatherComponent from '@/components/WeatherComponent';
import React from 'react';

const page = ({params:{location},searchParams:{latitude,longitude}}) => {
    return (
        <WeatherComponent lat={latitude} lon={longitude} />
    );
};

export default page;