import React from 'react';
import Card from './Card';
import Link from 'next/link'

const NoLocationInfo = ({location}) => {
    
    const capitalLize =location.toLowerCase()
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const capital = capitalizeFirstLetter(location)

    return (
        <Card>
            <h1 className=' font-bold mb-5 '>{capital} is not listed in Database!</h1>
            <Link href={'/'}>
                <button className='  rounded-md px-3 py-2 bg-red-700 font-bold '>Current Location</button>
             </Link>
        </Card>
    );
};

export default NoLocationInfo;