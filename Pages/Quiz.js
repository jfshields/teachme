import { Button, TextInput } from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import PressableButton from '../Components/PressableButton';
import ThreeButtons from '../Components/ThreeButtons';
import data from '../data/Wine.js'
import { Divider, CheckBox } from '@rneui/themed';
import Question from './Question'
import QuizResults from './QuizResults'

const results = {}

function Quiz({ navigation }) {

    const [currentPage, setCurrentPage] = React.useState(4);

    const goToNextPage = (answerCorrect) => {
        results[currentPage]= answerCorrect
        setCurrentPage(currentPage + 1)
        console.log(results)
    };

    const goToPreviousPage = () => {
        setCurrentPage(currentPage - 1);
    };

    switch (currentPage) {
        case 0:
            return (
                <View style={styles.container}>
                    <Question 
                        onClick={(answerCorrect) => goToNextPage(answerCorrect)} 
                        currentPage={currentPage} 
                        goToPreviousPage={() => goToPreviousPage()}
                    />
                </View>
            )
        case 1:
            return (
                <View style={styles.container}>
                    <Question 
                        onClick={(answerCorrect) => goToNextPage(answerCorrect)} 
                        currentPage={currentPage} 
                        goToPreviousPage={() => goToPreviousPage()}
                    />
                </View>
            )
        case 2:
            return (
                <View style={styles.container}>
                    <Question 
                        onClick={(answerCorrect) => goToNextPage(answerCorrect)} 
                        currentPage={currentPage} 
                        goToPreviousPage={() => goToPreviousPage()}
                    />
                </View>
            )
        case 3:
            return (
                <View style={styles.container}>
                    <Question 
                        onClick={(answerCorrect) => goToNextPage(answerCorrect)}  
                        currentPage={currentPage}
                        goToPreviousPage={() => goToPreviousPage()}
                    />
                </View>
            )
        case 4:
            return (
                <View style={styles.container}>
                    <QuizResults navigation={navigation}/>
                </View>
            )
    }
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
    questionCount: {
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
    body: {
        padding: 12,
    },
    answer: {
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
    bottom: {
        flex: 1,
        justifyContent: 'flex-end',
        // marginBottom: 36
    },
});


export default Quiz;