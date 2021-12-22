import React, {useEffect, useState} from 'react';
import {View, Text, Image, TouchableOpacity, PickerIOSItem} from 'react-native';
import { ScrollView} from 'react-native-gesture-handler';

import {useSelector, useDispatch} from "react-redux";
import {addFavorite, removeFavorite} from "./Action";

const MovieDetailScreen = ({route}) => {
    let [isFavorite, setFavorite] = useState(false);
    const {movie} = route.params;
    const favorites = useSelector( (state) => {return state.favorites});

    useEffect( () => {
        if ( favorites.length > 0 ) {
            let filtered = favorites.filter( item => {
                return item.id == movie.id
            });
            setFavorite( filtered.length > 0);
        }
        else {
            setFavorite( false );
        }
    }, [favorites])

    console.log('movie :', movie);
    const dispatch = useDispatch();

    function toggleFavorite() {
        console.log('toggle favorite :', movie);
        if ( isFavorite ) {
            dispatch(removeFavorite(movie.id));
        }
        else {
            dispatch(addFavorite(movie))
        }            
    }

    return (
        <ScrollView style={{padding: 12}}>
            <Image
                style={{height: 200, alignSelf: 'center', marginBottom: 12}}
                resizeMode='contain'
                source={movie.image} />

            <TouchableOpacity
                style={{position:'absolute', top: 5, right: 5}}
                onPress={toggleFavorite}
            >
                <Text>{isFavorite ? "즐겨찾기 제거" : "즐겨찾기 추가"}</Text>
            </TouchableOpacity>

            <Text style={style}>제목 : {movie.title}</Text>
            <Text style={style}>장르 : {movie.genre}</Text>
            <Text style={style}>출연 : {movie.stars}</Text>
            <Text style={style}>방연연도 : {movie.year}</Text>            
        </ScrollView>
    )
}

const style={height:30, fontSize: 16, marginVertical: 4}

export default MovieDetailScreen;