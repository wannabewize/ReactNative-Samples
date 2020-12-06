import axios from "axios";

export const findPlace = async (keyword) => {
    try {
        const ret = await axios({
            method: 'get',
            url: 'https://dapi.kakao.com/v2/local/search/keyword.json',
            params: {
                query: keyword,
                x: 37.630814, y: 127.055037, radius: 1000
            },
            headers: {Authorization: 'KakaoAK deb7adbb7fc4176e0df5d487611fa7d8'}
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