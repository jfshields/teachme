import { ActivityIndicator, useEffect } from 'react-native';
import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import PressableButton from '../Components/PressableButton';


const Lesson = ({ onClick, lessonCount, topic, data }) => {

    const [isCheckBox, setCard] = React.useState([]);

    // React.useEffect(() => {
    //     setCard([])
    // })

    const toggleCard = (i) => {
        const newList = [...isCheckBox]
        newList[i] = !newList[i]
        setCard(newList)
    };

    const onPreClick = () => {
        // var falseArray= data[lessonCount+1] ? data[lessonCount+1].map(() => false) : []
        // setCard(falseArray)
        onClick()
    };

    return (
        <View style={styles.container}>
            <View style={styles.heading}>
                <Text style={styles.title}>Let's learn!</Text>
                <View style={styles.subHeading}>
                    <Text style={styles.subject}>{topic}</Text>
                    <Text style={[styles.questionCount]}>{lessonCount + 1}/5</Text>
                </View>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>

                {(data.map((lesson, i) => {
                    return (
                        <TouchableOpacity onPress={() => toggleCard(i)} key={i}>
                            <View style={isCheckBox[i] ? [styles.lessonPartBox, styles.lessonPartBoxCheck] : styles.lessonPartBox}>
                                <Text style={isCheckBox[i] ? [styles.textPartCheck] : null}>{lesson}</Text>
                            </View>
                        </TouchableOpacity>)
                }))}

                <View style={[styles.bottom]}>
                    {/* <Text>Check all cards to proceed</Text> */}
                    <PressableButton
                        title="Next"
                        onPress={() => onPreClick()}
                        bgColor='#5DB075'
                        disabled={isCheckBox.some(item => item === false)}
                    />
                </View>

            </ScrollView>
        </View>)
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
        marginRight: 'auto',
        flexWrap: 'wrap',
        flex: 1,
    },
    questionCount: {
        marginLeft: 'auto',
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
    answer: {
        flexDirection: 'row',
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
    lessonPartBox: {
        marginTop: 10,
        padding: 10,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#898A8D',
        backgroundColor: 'white',
        shadowColor: '#898A8D',
        shadowOpacity: 0.5,
        shadowRadius: 4,
        shadowOffset: {
            width: 1,
            height: 2,
        },
        elevation: 4, // Only required for Android
    },
    lessonPartBoxCheck: {
        backgroundColor: 'rgba(36, 206, 133, 0.06)',
        borderColor: '#24CE85',
        shadowColor: '#24CE85',
        shadowOpacity: 'none',
        // backgroundColor:'white',
        shadowColor: '#898A8D',
    },
    textPartCheck: {
        // color: '#4B9460'
    },
    bottom: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingTop: 12,
        // marginBottom: 36
    },
});


export default Lesson;