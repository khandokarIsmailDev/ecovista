import WindComponent from '@/components/WindComponent';
import React from 'react';

const page = ({params:{location},searchParams:{latitude,longitude}}) => {
    return (
        <WindComponent lat={latitude} lon={longitude} />
    );
};

export default page;