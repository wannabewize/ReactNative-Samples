/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
    SafeAreaView,
    FlatList,
    Image,
    View,
    Text,
    StatusBar,
    TouchableOpacity,
    TouchableHighlight,
} from 'react-native';

const movies = [
    {
        "id": 0,
        "title": "킹덤",
        "year": 2019,
        "genre": "Action, Drama, Horror",
        "stars": "주지훈, 배두나, 류승룡 외",
        "image": require("./images/kingdom.jpg")
    },
    {
        "id": 1,
        "title": "위쳐",
        "year": 2019,
        "genre": "Action, Adventure, Fantasy",
        "stars": "헨리 카빌, 안야 차로트라, 프레이아 앨런",
        "image": require("./images/thewitcher.jpg")
    },
    {
        "id": 2,
        "title": "인간수업",
        "year": 2020,
        "genre": "Crime, Drama",
        "stars": "김동희, 박주현, 정다빈, 남윤수, 최민수, 김여진, 박혁권 외",
        "image": require("./images/extracurricular.jpg")
    },
    {
        "id": 3,
        "title": "사이코지만 괜찮아",
        "year": 2020,
        "genre": "Comedy, Drama, Romance",
        "stars": "김수현, 서예지, 오정세, 박규영 외",
        "image": require("./images/itsok.jpg")
    },
    {
        "id": 4,
        "title": "슬기로운 의사생활",
        "year": 2020,
        "genre": "Comedy, Drama",
        "stars": "조정석, 유연석, 정경호, 김대명, 전미도 외",
        "image": require("./images/hospital_playlist.jpg")
    },
    {
        "id": 5,
        "title": "러브, 데스 + 로봇",
        "year": 2019,
        "genre": "Animation, Short, Comedy",
        "stars": "토퍼 그레이스, 메리 엘리자베스 윈스티드, 게리 콜 외",
        "image": require("./images/lovedeathrobots.jpg")
    }
]



const BasicList = () => (
    <FlatList
        data={["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"]}
        keyExtractor={(item, index) => item}
        renderItem={({item, index}) => (
            <View style={{
                key:item,
                height:100,margin: 6,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'lightgray', }}>
                <Text>{item}</Text>
            </View>
        )}
    />    
)

const HorizontalList = () => (
    <FlatList
        horizontal={true}
        data={["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"]}
        keyExtractor={(item, index) => item}
        renderItem={({item, index}) => (
            <View style={{
                width:100, height:100,margin: 6,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'lightgray', }}>
                <Text>{item}</Text>
            </View>
        )}
    />    
)


const HeaderFooterList = () => (
    <FlatList
        data={["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"]}
        numColumns={3}
        keyExtractor={(item, index) => item}
        renderItem={({item, index}) => (
            <View style={{
                width:100, height:100,margin: 6,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'lightgray', }}>
                <Text>{item}</Text>
            </View>
        )}
        ListHeaderComponent = {<Text>List Header</Text>}
        ListHeaderComponentStyle={{
            height: 40,
            backgroundColor: 'lightblue',
            justifyContent: 'center', alignItems: 'center'}}
        ListFooterComponent = {<ListFooter />}        
    />    
)

const ListFooter = () => (
    <View style={{height:40,
        justifyContent: 'center',        
        alignItems: 'center',
        backgroundColor: 'lightgreen'}}>
        <Text>List Footer</Text>
    </View>
)

const TouchableList = () => {
    let [selected, setSelected] = useState(-1);
    return (
        <FlatList
            data={["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"]}
            keyExtractor={(item, index) => item}
            renderItem={({item, index}) => (
                <TouchableOpacity
                    onPress={() => { setSelected(index) }}
                >
                    <View style={{
                        key: index,
                        height:100, margin: 6,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: selected == index ? 'gray' : 'lightgray', }}>
                        <Text
                            style={{
                                color: selected == index ? 'white' : 'black',
                                fontSize: selected == index ? 32 : 16
                            }}
                        >{item}</Text>
                    </View>
                </TouchableOpacity>
            )}
        />    
    )
}


const MovieCell = ({movie}) => (
    <View style={{ height: 80, flexDirection: 'row', marginVertical: 4 }}>
        <Image
            style={{width: 80, height: 80, resizeMode: 'cover'}}
            source={movie.image} />
        <View 
            style={{flexDirection: 'column', marginLeft: 12, justifyContent: 'center'}}
        >
            <Text style={{fontSize: 18, marginBottom: 8}}>{movie.title} </Text>
            <Text>{movie.stars} </Text>
        </View>
        
    </View>
)

const MovieList = () => (
    <FlatList
        data={movies}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item, index }) => (
            <MovieCell movie={item}/>
        )}
    />    
)


const App = () => {
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
                {/* <BasicList /> */}
                {/* <HorizontalList /> */}
                {/* <HeaderFooterList /> */}
                {/* <TouchableList /> */}
                <MovieList />
            </SafeAreaView>
        </>
    );
};


export default App;
