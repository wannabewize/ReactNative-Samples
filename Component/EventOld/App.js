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
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button,
    Switch,
    TouchableHighlight,
} from 'react-native';

import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
    let [switchValue, setSwitchValue] = useState(false);
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
                <ScrollView
                    contentInsetAdjustmentBehavior="automatic"
                    style={styles.scrollView}>

                    <Text style={{ fontSize: 30 }}>Control and Event</Text>
                    <View style={{marginTop: 20, width: 100, backgroundColor: 'lightgray'}}>
                        <Button
                            title="버튼"                          
                            onPress={() => {console.log('버튼 클릭')}}
                        />
                    </View>
                    <TouchableHighlight
                        style={{
                            marginTop:20, width: 200, height: 40,
                            justifyContent: 'center', alignItems: 'center',
                            backgroundColor: 'lightgray'}}
                        onPress={() => {console.log('Touchable View 클릭')}}
                    >
                        <Text>Touchable Highlight</Text>
                    </TouchableHighlight>

                    
                    <Switch
                        value={switchValue}
                        style={{marginTop: 20}}
                        onValueChange={(e) => { setSwitchValue(!switchValue) }}
                    />

                </ScrollView>
            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: Colors.lighter
    },
    engine: {
        position: 'absolute',
        right: 0,
    },
    body: {
        backgroundColor: Colors.white,
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: Colors.black,
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        color: Colors.dark,
    },
    highlight: {
        fontWeight: '700',
    },
    footer: {
        color: Colors.dark,
        fontSize: 12,
        fontWeight: '600',
        padding: 4,
        paddingRight: 12,
        textAlign: 'right',
    },
    controlStyle: {
        margin: 20,
    }
});

export default App;
