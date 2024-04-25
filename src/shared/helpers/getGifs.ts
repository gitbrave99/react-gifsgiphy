import { Gifs } from "../../interfaces/Gifs";
import { FetchUtils } from "../utils/FetchUtils";

export const getGifs=async (category:string)=>{
    try {
        const gifsList = await FetchUtils.getData<Gifs>(`https://api.giphy.com/v1/gifs/search?api_key=cYDeS2Qv6Qdi6P6OmyM5Fwmq1qvg6AM9&limit=10&q=${category}`)
        const newGifs= gifsList.data.map(img=>({
            id:img.id,
            title: img.title,
            url:img.images.downsized_medium.url
        }))
        console.log("new gifs: ", newGifs);
        return newGifs;
    } catch (error) {
        console.log("logo: ", error);
        return []
    }        
}