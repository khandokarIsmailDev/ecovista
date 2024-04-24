import TempretureComponents from '@/components/TempretureComponents';
import React from 'react';

const page = ({params:{location},searchParams:{latitude,longitude}}) => {
    return (
        <TempretureComponents lat={latitude} lon={longitude} />
    );
};

export default page;