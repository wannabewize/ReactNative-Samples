import {KakaoAPI} from "./config";
import axios from "axios";

export const findPlace = async (keyword, center, radius = 1000) => {
    try {
        // Kakao 위치 검색 API
        const ret = await axios({
            method: 'get',
            url: 'https://dapi.kakao.com/v2/local/search/keyword.json',
            params: {
                query: keyword,
                x: center.x, y: center.y, radius
            },
            headers: {Authorization: `KakaoAK ${KakaoAPI}`}
        });        
        
        const res = ret.data;
        const documents = res.documents;
        const places = documents.map( item => {
            return {
                id: item.id,
                title: item.place_name,
                coordinate: {latitude: parseFloat(item.y), longitude: parseFloat(item.x)},
                url: item.place_url }
        });
        return places;
    } catch (error) {
        console.error(error);        
    }    
}