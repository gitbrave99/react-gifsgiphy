import { useEffect, useState } from "react"
import { getGifs } from "../shared/helpers/getGifs"

interface Gif {
    id: string,
    title: string,
    url: string
}

export const useFetchGifs = (category: string) => {

    const [gifsList, setGifsList] = useState<Gif[]>([] as Gif[])
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [isNoData, setIsNoData] = useState<boolean>(false)

    const getImages = async () => {
        const gifList = await getGifs(category)
        setGifsList(gifList)
        setIsLoading(false)
        setIsNoData(gifList.length>0?false:true);
        
    }
    useEffect(() => {
        getImages();
    }, [])
    return {
        gifsList,
        isLoading: isLoading,
        isNoData:isNoData,
        setIsNoData:setIsNoData
    }
}
