import { Button, TextInput } from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import PressableButton from '../Components/PressableButton';
import ThreeButtons from '../Components/ThreeButtons';
import data from '../data/Wine.js'
import { Divider, CheckBox } from '@rneui/themed';


function Question({ navigation, onClick, goToPreviousPage, currentPage }) {

    const [selectedIndex, setIndex] = React.useState(null);
    const isButtonDisabled = selectedIndex == null;

    return (
        <View style={styles.container}>
            <View style={styles.heading}>
                <Text style={styles.title}>First, let see what you know already</Text>
                <View style={styles.subHeading}>
                    <Text style={styles.subject}>{data.subject}</Text>
                    <Text style={[styles.questionCount]}>Q{currentPage+1}/4</Text>
                </View>
            </View>
            <View style={[styles.body]}>
                <Text style={[styles.listItem, styles.question]}>{data.test[currentPage].question}</Text>
                <Text style={styles.listItemDes}>Select one answer</Text>

            <View style={[styles.answers]}>

            {
                (data.test[0].answerOptions.map((suggestion, i) => {
                    return (
                    <TouchableOpacity key= {i} onPress={() => setIndex(i)}>
                        <View style={styles.answer}>
                            <View style={styles.text}>
                                <Text key={1} style={[styles.listItem, styles.question]}>{data.test[currentPage].answerOptions[i]}</Text>
                            </View>
                            <View style={[styles.checkBox]}>
                                <CheckBox
                                    onPress={() => setIndex(i)}
                                    checked={selectedIndex === i}
                                    checkedIcon="dot-circle-o"
                                    uncheckedIcon="circle-o"
                                />
                            </View>
                        </View>
                        <Divider />
                    </TouchableOpacity>
                    )}))
            }

            </View>
            </View>

            <View style={[styles.body, styles.bottom]}>
                <PressableButton
                    title="Confirm"
                    onPress={()=> onClick(selectedIndex === 1 ? true : false)}
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
    },
    heading: {
        padding: 12,
        backgroundColor: '#5DB075',
    },
    subHeading: {
        flexDirection: 'row'
    },
    subject: {
        fontSize: 32,
        color: 'white',
    },
    questionCount:{
        marginLeft: 'auto',
        // flexDirection: 'column',
        fontSize: 32,
        justifyContent: 'center',
        color: 'white',
    },
    title: {
        fontSize: 16,
        color: 'white',
    },
    question: {
        fontSize: 16,
        paddingTop: 12,
    },
    body: {
        padding: 12,
    },
    answer : {
        flexDirection: 'row',
        // backgroundColor: 'red',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {

    },
    checkBox: {
        marginLeft: 'auto',
    },
    listItem: {
        // marginTop: 12,
        // marginBottom: 12,
        marginLeft: 6,
        borderBottomColor: 'black',
        alignItems: 'center',
    },
    listItemDes: {
        paddingLeft: 6,
        paddingRight: 12,
        paddingTop: 12,
        paddingBottom: 0,
        color: 'grey'
    },
    bottom: {
        flex: 1,
        justifyContent: 'flex-end',
        // marginBottom: 36
    },
});


export default Question;