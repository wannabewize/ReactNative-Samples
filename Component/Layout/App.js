/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
} from 'react-native';

import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const MarginPaddingView = () => (
    <View style={{
        marginLeft: 100, marginTop: 100,
        paddingLeft: 50, paddingTop: 50,
        height: 200, width: 200,
        backgroundColor: 'gray'}}>
        <Text style={{color:'white', fontSize: 20}}>글자 출력하기</Text>
    </View>
)

const ContainerView = () => (
    <>
    <View style={{flex:1}}>
        <View style={{backgroundColor: 'gray'}}>
            <Text style={{marginTop: 100, marginLeft: 100, color: 'white', fontSize: 30}}>글자 기반의 콘텐츠</Text>
        </View>
    </View>

    <View style={{flex:1}}>
        <View style={{backgroundColor: 'gray', flex: 1}}>
            <Text style={{marginTop: 100, marginLeft: 100, color: 'white', fontSize: 30}}>글자 기반의 콘텐츠</Text>
        </View>
    </View>
    </> 
)

const ViewWidth = () => (
    <View style={{backgroundColor: 'white', width: '100%', height: '100%'}}>

        <Text style={{fontSize: 20, marginTop: 50}}>width:360</Text>
        <View style={{backgroundColor: 'red', width: 360, height: 50}}></View>

        <Text style={{fontSize: 20, marginTop:50}}>width: 50%</Text>
        <View style={{backgroundColor: 'green', width: '50%', height: 50}}></View>

        <Text style={{fontSize: 20, marginTop:50}}>marginLeft: 30, marginRight: 30</Text>
        <View style={{backgroundColor: 'blue', marginLeft: 30, marginRight: 30, height: 50}}></View>
    </View>
)

const FlexExample = () => (
    <View style={{flex: 1, backgroundColor: 'gray'}}>
        <Text style={{fontSize:30, color:'white', marginTop: 50}}>FlexDirection: column(default)</Text>
        <View style={{height:50}}>
            <Text style={{backgroundColor: 'white', margin: 5}}>Column1</Text>
            <Text style={{backgroundColor: 'white', margin: 5}}>Column2</Text>
        </View>

        <Text style={{fontSize:30, color:'white', marginTop: 50}}>FlexDirection: row</Text>
        <View style={{height: 50, flexDirection: 'row', marginTop: 20}}>
            <Text style={{backgroundColor: 'white', margin: 5}}>Row1</Text>
            <Text style={{backgroundColor: 'white', margin: 5}}>Row2</Text>
        </View>

        <View style={{height: 50, flexDirection: 'row', marginTop: 20}}>
            <Text style={{backgroundColor: 'white', flex: 1, margin: 5}}>Row1</Text>
            <Text style={{backgroundColor: 'white', flex: 1, margin: 5}}>Row2</Text>
        </View>

        <View style={{height: 50, flexDirection: 'row', marginTop: 20}}>
            <Text style={{backgroundColor: 'white', width:50, margin: 5}}>Row1</Text>
            <Text style={{backgroundColor: 'white', flex: 1, margin: 5}}>Row2</Text>
        </View>
    </View>
)

const StyleExample = ({showBlack}) => {
    myStyle = {width: 100, height: 100, backgroundColor: 'green'};


    myColorValue = 'white';

    return (
        <View style={{flex: 1, padding: 30, backgroundColor: 'gray'}}>
            <Text style={{fontSize:20, color:'white', marginTop: 20}}>Inner Style</Text>
            <View style={{backgroundColor: 'red', width: 100, height: 100}} />
            <Text style={{fontSize:20, color:'white', marginTop: 20}}>Style Variable</Text>
            <View style={myStyle} />
            <Text style={{fontSize:20, color:'white', marginTop: 20}}>Style Variable + Inner Style</Text>
            <View style={[myStyle, {backgroundColor: 'blue'}]} />
            <Text style={{fontSize:20, color:'white', marginTop: 20}}>Style Variable</Text>
            <View style={[myStyle, {backgroundColor: myColorValue}]} />
            <Text style={{fontSize:20, color:'white', marginTop: 20}}>Conditional Style</Text>
            <View style={[myStyle, {backgroundColor: showBlack ? 'black' : 'blue'}]} />

        </View>
)}


const App = () => {
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView style={{flex: 1}}>
                <MarginPaddingView />
                {/* <ContainerView /> */}
                {/* <ViewWidth /> */}
                {/* <FlexExample /> */}
                {/* <StyleExample showBlack={true}/> */}
            </SafeAreaView>
        </>
    );
};

export default App;
