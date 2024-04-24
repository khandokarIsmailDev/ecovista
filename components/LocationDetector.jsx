'use client'

import {useState,useEffect} from 'react';
import { useSearchParams,usePathname,useRouter } from 'next/navigation';
import Image from 'next/image'

const LocationDetector = () => {

    //firts we handle loading
    const [loading,setLoading] = useState(false)

    const searchParams = useSearchParams()
    const pathName = usePathname()
    const router = useRouter()

    useEffect(()=>{
        setLoading(true)
        
        //get url parameter
        const params = URLSearchParams(searchParams)

    },[])

    return (
        <div>
            
        </div>
    );
};

export default LocationDetector;