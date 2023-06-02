import { Button, TextInput } from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ThreeButtons from '../Components/ThreeButtons';

function Details({ navigation }) {
    const [text, onChangeText] = React.useState('Wine...');
    const [number, onChangeNumber] = React.useState('');

    return (
        <View style={styles.container}>
            <Text>Subject: Californian wine</Text>
            <Text style={styles.title}>Select the level you would like to learn</Text>
            <Text style={styles.subTitle}>You can always change this later you know</Text>
            <ThreeButtons onPress={() => navigation.navigate('Quiz')}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    buttons: {

    },
    title: {
        paddingTop: 24,
        fontSize: 24,
    },
    subTitle: {
        fontSize: 12,
        // textAlign: 'left',
    },
    input: {
        height: 40,
        width: 320,
        alignItems: 'stretch',
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});


export default Details;