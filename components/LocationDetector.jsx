"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import Image from "next/image";


const LocationDetector = () => {
  //firts we handle loading
  const [loading, setLoading] = useState(false);

  const searchParams = useSearchParams();
  const pathName = usePathname();
  const router = useRouter();

  useEffect(() => {
    setLoading(true);

    //get url parameter
    const params = new URLSearchParams(searchParams);

    // now we need geolocation , in browser property 'navigator'
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        // ai position er modde latitude and longitude available thake
        params.set("latitude", position.coords.latitude);
        params.set("longitude", position.coords.longitude);
        setLoading(false);
        //redirect korbo /current?latitude=234&lognitude=343
        router.push(`/current?${params.toString()}`);
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathName, searchParams]);

  return (
      <div className=" flex flex-col justify-center items-center h-screen bg-slate-700 text-white">
      {loading && (
        <>
          <Image
          src='/giphy.gif'
            width={500}
            height={700}
            alt="Loading animation"
            className=" border rounded-md my-4"
          />
          <p>Detecting Location...</p>
        </>
      )}
    </div>

  );
};

export default LocationDetector;
