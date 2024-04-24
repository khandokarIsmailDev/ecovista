

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
        const response = await fetch(``)
        const data = await response.json(`${process.env.URL_LINK}/api/location`)

        return data
    }catch(err){
        console.log(err.message)
    }
}

 
export const getLocationLatLong = async (locationName) =>{

    try{
        const response = await fetch(``)
        const data = await response.json(`${process.env.URL_LINK}/api/location/${locationName}`)

        return data
    }catch(err){
        console.log(err.message)
    }
}

 

