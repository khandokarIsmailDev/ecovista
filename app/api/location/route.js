import { getLocations } from "./location-util";


export async function GET(req,res){
    const locationData = await getLocations()

    return Response.json(locationData)
}