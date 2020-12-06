import React, {useState} from 'react';
import {View, TextInput, Button } from 'react-native';
import MapView, {Marker} from "react-native-maps";
import Modal from 'react-native-modal';
import {findPlace} from "./PlaceUtil";
import { WebView } from 'react-native-webview';


const MapComponent = ({stores}) => {
    let [keyword, setKeyword] = useState('');
    let [places, setPlaces] = useState([]);
    let [modalVisible, setModalVisible] = useState(false);
    let [selectedPlaceUrl, setSelected] = useState(null);
    // 초기 데이터
    let [region, setRegion] = useState({
        latitude: 37.630814,
        longitude: 127.055037,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
    });

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
                            const radius = region.latitudeDelta * 10000;
                            const searchRet = await findPlace(keyword, {x: region.longitude, y:region.latitude}, radius);
                            setPlaces(searchRet);
                            setKeyword('');
                        }
                    }}
                />
            </View>
            <MapView                
                style={{flex: 1}}
                initialRegion={region}
                showsUserLocation={true}
                onRegionChange={(region) => setRegion(region) }
                onMarkerPress={(e) => {
                    // 마커 위치 정보(위도/경도)를 토대로, 선택된 항목 찾기
                    const coordiante = e.nativeEvent.coordinate;
                    const selected = places.filter(
                        item => item.coordinate.latitude === coordiante.latitude && item.coordinate.longitude === coordiante.longitude );
                
                    // 선택된 항목이 있으면 모달로 웹뷰 보이기        
                    if ( selected.length > 0 ) {
                        // Kakao API가 https로 나와야하는 결과를 http로 제공한다. 변환
                        const url = selected[0].url.replace('http://', 'https://');
                        // 선택된 항목의 url을 state에 설정
                        setSelected(url)
                        // 모달 보이기
                        setModalVisible(true);
                    }    
                }}
            >
                <Marker
                    title="인덕대학교"
                    description="이 수업이 진행됐어야 할 곳"
                    coordinate={{latitude:37.630814, longitude:127.055037}}
                />            
                {places && places.length > 0 ?    
                    places.map( (item) => (
                    <Marker
                        title={item.title}
                        description={item.description}
                        coordinate={item.coordinate} key={item.id} />
                    ))
                    : null
                }
            </MapView>
            <Modal
                visible={modalVisible}
                style={{alignItems:'center'}}
                onBackdropPress={() => {setModalVisible(false) }} // 모달 콘텐츠 영역 외 터치시 모달 닫기
                onRequestClose={() => { setModalVisible(false) }} // for android - backbutton
            >
                <View style={{width: '90%', height: '60%'}} >
                    <WebView source={{ uri: selectedPlaceUrl }} />
                </View>
            </Modal>
        </View>
    )
}

export default MapComponent;