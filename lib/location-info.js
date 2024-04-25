

export const getLocationData = async(lat,lon) =>{

    try{
        const response = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}`)
        const data = await response.json()

        return data
    }catch(err){
        console.log(err.message)
    }
}

export const getLocationLatLongList = async () =>{

    try{
        const response = await fetch(`${process.env.NEXT_PUBLIC_URL_LINK}/api/location`)
        const data = await response.json()

        return data
    }catch(err){
        console.log(err.message)
    }
}

 
export const getLocationLatLong = async (locationName) =>{

    try{
        const response = await fetch(`${process.env.NEXT_PUBLIC_URL_LINK}/api/location/${locationName}`)
        const data = await response.json()

        return data
    }catch(err){
        console.log(err.message)
    }
}

 
export const getResolvedLatLon = async(location,lat,lon) =>{

    if(lat && lon){
        return {lat,lon}
    }

    const locationLatLon = await getLocationLatLong(location)
    console.log(locationLatLon)

    if(locationLatLon.latitude && locationLatLon.longitude){
        const lat = locationLatLon.latitude
        const lon = locationLatLon.longitude

        return {lat,lon}
    }


}


