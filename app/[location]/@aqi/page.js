import React from 'react';
import AQIComponents from '@/components/AQIComponents';

const page = ({params:{location},searchParams:{latitude,longitude}}) => {
    return (
        
            <AQIComponents lat={latitude} lon={longitude} />
        
    );
};

export default page;