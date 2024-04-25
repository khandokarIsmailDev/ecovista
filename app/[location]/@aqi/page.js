import React from 'react';
import AQIComponents from '@/components/AQIComponents';
import { getResolvedLatLon } from '@/lib/location-info';
import NoLocationInfo from '@/components/NoLocationInfo';

const page = async({params:{location},searchParams:{latitude,longitude}}) => {

    const resolved = await getResolvedLatLon(location,latitude,longitude)
    
    if(resolved?.lat && resolved?.lon){
        return <AQIComponents lat={resolved.lat} lon={resolved.lon} />
    }else{
        return <NoLocationInfo location={location}/>
    }
};

export default page;