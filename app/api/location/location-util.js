const data = [
    {
        location: "London",
        latitude: "51.5074",
        longitude: "-0.1278"
    },
    {
        location: "New York",
        latitude: "40.7128",
        longitude: "-74.0060"
    },
    {
        location: "Dhaka",
        latitude: "23.8103",
        longitude: "90.4125"
    },
    {
        location: "Toronto",
        latitude: "43.65107",
        longitude: "-79.347015"
    },
    {
        location: "Kolkata",
        latitude: "22.5726",
        longitude: "88.3639"
    }
];


function getLocations (){
    return data
}

function getLocationByName(locationName){
    if(!locationName) return null
    
    const findLocation = data.find(location => location.location.toLowerCase() === locationName.toLowerCase())
    return findLocation || {}
    
}

export {getLocations, getLocationByName}