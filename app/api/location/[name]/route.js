import { getLocationByName } from "../location-util";

export async function GET(_request,{params:{name}}){
    const locationData = getLocationByName(name)
    return Response.json(locationData)
}