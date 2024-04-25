"use client";

import React, { useEffect, useState } from "react";
import { getLocationLatLongList } from "@/lib/location-info";
import Image from "next/image";
import Link from 'next/link'

const LocationSwitcher = () => {
  const [showLocationList, setShowLocationList] = useState(false);

  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const allLocation = async () => {
      let response = await getLocationLatLongList();
      setLocations(response);
    };

    allLocation();
  }, []);

  console.log(locations);

  return (
    <div className="relative">
      <button
       onClick={()=>setShowLocationList(!showLocationList)}
      >
        <Image
          className="size-9"
          src="/link.svg"
          alt="link icon"
          width={500}
          height={500}
        />
      </button>
      {showLocationList && (
        <div className="absolute left-0 top-12 z-[999] w-full min-w-[280px] rounded-md bg-white p-4 shadow max-md:-translate-x-1/2">
          <ul
            role="list"
            className="divide-y divide-gray-100 [&>*]:py-2 [&>li]:cursor-pointer"
          >
            {
                locations.map((info,index) =>(
                    <li key={index} >
                        <Link href={`/${info.location}?latitude=${info.latitude}&longitude=${info.longitude}`}>
                        {info.location}
                        </Link>
                    </li>
                ))
            }
            
          </ul>
        </div>
      )}
    </div>
  );
};

export default LocationSwitcher;
