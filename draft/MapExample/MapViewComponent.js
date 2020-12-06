import React, {useState} from 'react';
import {View, TextInput, Button } from 'react-native';
import axios from "axios";
import MapView, {Marker} from "react-native-maps";

const findPlace = async (keyword) => {
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

// (async () => {
//     resolvePlace('편의점')
// })();

const MapComponent = ({stores}) => {
    let [keyword, setKeyword] = useState('');
    let [places, setPlaces] = useState([]);
    return (
        <View style={{flex: 1}}>
            <View style={{flexDirection:'row', height: 48, marginHorizontal: 12}}>
                <TextInput
                    style={{flex: 1}}
                    value={keyword}
                    onChangeText={text => setKeyword(text)}
                />
                <Button                    
                    title="검색"
                    onPress={async () => {
                        if ( keyword.length > 3 ) {
                            const searchRet = await findPlace(keyword);                            
                            setPlaces(searchRet);
                            setKeyword('');
                        }
                    }}
                />
            </View>
            <MapView
                style={{flex: 1}}
                initialRegion={{
                    latitude: 37.630814,
                    longitude: 127.055037,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421
                }}
                showsUserLocation={true}
                onRegionChange={(region, byGesture) => { console.log('region changed :', region)}}
                onMarkerPress={(e) => {
                    console.log('marker press :', e.nativeEvent);
                    const coordiante = e.nativeEvent.coordinate;
                    const selected = places.filter(
                        item => item.coordinate.latitude === coordiante.latitude && item.coordinate.longitude === coordiante.longitude );
                    console.log('selected :', selected);
                }}
            >
                <Marker
                    title="인덕대학교"
                    description="이 수업이 진행됐어야 할 곳"
                    coordinate={{latitude:37.630814, longitude:127.055037}}
                />            
                {places && places.length > 0 ?    
                    places.map( (item) => (
                    <Marker title={item.title} description={item.description} coordinate={item.coordinate} key={item.id} />
                    ))
                    : null
                }
            </MapView>
        </View>
    )
}

export default MapComponent;