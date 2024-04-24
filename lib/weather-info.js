

export const weatherData = async(lat,lon) =>{

    try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.OPEN_WEATHER_API_KEY}&units=metric`)

        const data = await response.json()

        return data?.weather[0]
    }catch(err){
        console.log(err.message)
    }

}


export const getTempretureData = async(lat,lon) =>{
    
    try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.OPEN_WEATHER_API_KEY}&units=metric`)
        const data = await response.json()

        return data?.main
    }catch(err){
        console.log(err.message)
    }
}

export const getWinData =  async(lat,lon) =>{
    
    try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.OPEN_WEATHER_API_KEY}&units=metric`)
        const data = await response.json()

        return data?.wind
    }catch(err){
        console.log(err.message)
    }
}

export const getAQIData = async (lat,lon) =>{

    try{
        //aita air polution api, not same with upor
        const response = await fetch(`http://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=${lat}&lon=${lon}&appid=${process.env.OPEN_WEATHER_API_KEY}`)

        const data = await response.json()

        return data?.list[0]
    }catch(err){
        console.log(err)
    }
}