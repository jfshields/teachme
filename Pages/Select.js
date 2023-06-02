import { Button, TextInput } from 'react-native';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import PressableButton from '../Components/PressableButton';
import { Divider } from '@rneui/themed';

function Select({ navigation }) {
    const [text, onChangeText] = React.useState('');
    const [isFocused, setIsFocused] = React.useState(false);
    const [isDisabled, setIsDisabled] = React.useState(false);

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    const handleDisable = () => {
        setIsDisabled(true);
    };

    const handleEnable = () => {
        setIsDisabled(false);
    };

    const handleSuggestionPress = (value) => {
        onChangeText(value)
        if (value === 'Quantum physics') {
            console.log('text', value)
        }
    }

    const handleButtonPress = () => {
        navigation.navigate('Lesson', { topic: text})
    };

    const isButtonDisabled = text.length < 3;

    const suggestions = ['Californian wine', 'Quantum physics', 'American history', 'Latest AI trends', 'The life of Henry VII'];

    return (
        <View style={styles.container}>
            <TextInput
                style={[styles.input, isFocused && styles.focusedTextInput]}
                onChangeText={onChangeText}
                value={text}
                placeholder="Type anything..."
                onFocus={handleFocus}
                onBlur={handleBlur}

            />
            <Text style={styles.subTitle}>Or how about...</Text>
            {
                (suggestions.map((suggestion, index) => {
                    return (

                        <TouchableOpacity key={index} onPress={() => handleSuggestionPress(suggestion)}>
                            <Text key={index} style={styles.listItem}>{suggestion}</Text>
                            <Divider />
                        </TouchableOpacity>)
                }))
            }
            <View style={styles.bottom}>
                <PressableButton
                    title="Let's go"
                    onPress={handleButtonPress}
                    bgColor='#5DB075'
                    disabled={isButtonDisabled}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 12
    },
    title: {
        fontSize: 32,
    },
    subTitle: {
        marginTop: 18,
        // marginBottom: 6,
        marginLeft: 6,
        fontSize: 16,
        color: '#5DB075'
    },
    listItem: {
        marginTop: 12,
        marginBottom: 12,
        marginLeft: 6,
        borderBottomColor: 'black',
    },
    input: {
        height: 50,
        borderWidth: 1,
        padding: 10,
        borderRadius: 100,
        fontSize: 16,
        backgroundColor: '#F6F6F6',
        borderColor: '#E8E8E8',
        color: 'black',
    },
    focusedTextInput: {
        borderColor: '#5DB075',
        color: 'black',
    },
    bottom: {
        flex: 1,
        justifyContent: 'flex-end',
        // marginBottom: 36
    },
    bottonEnabled: {
        backgroundColor: 'red',
    },
    bottonDisabled: {
        backgroundColor: 'blue',
    }
});


export default Select;