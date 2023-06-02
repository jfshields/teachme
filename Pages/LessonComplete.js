import { Button, Image, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import PressableButton from '../Components/PressableButton';



function LessonComplete({ capTopic }) {
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <Text style={styles.subText}>Congratulations</Text>
                <Text style={styles.subText}>You completed the lesson by TeachMe</Text>
            </View>
            <View style={styles.middle}>
                <Image source={require('../assets/teach-me-certificate.png')} style={styles.image} />
                <View style={styles.textContainer}>
                    <Text style={styles.text}>{capTopic}</Text>
                </View>
            </View>
            <View style={styles.bottom}>
                <View style={styles.button}>
                    <PressableButton
                        title="Share certifcate"
                        // onPress={() => navigation.navigate('Subject')}
                        bgColor='white'
                        disabled={false}
                    />
                </View>
                <View >
                    <PressableButton
                        title="Take another lesson"
                        // onPress={() => navigation.navigate('Subject')}
                        bgColor='#4B9460'
                        disabled={false}
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#5DB075',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 12
    },
    top: {
        color: 'white',
        justifyContent: 'flex-end',
        alignContent: 'center',
    },
    middle: {
        color: 'white',
        justifyContent: 'flex-end',
        alignContent: 'center',
        marginTop: 'auto',
    },
    overlapp: {
        flex: 1,
        justifyContent: 'center',
        resizeMode: 'cover',
    },
    bottom: {
        justifyContent: 'flex-end',
        alignContent: 'center',
        marginTop: 'auto',
        flexDirection: 'row'
    },
    button: {
        flex: 0,
        marginRight: 'auto',
        marginLeft: 'auto',
        paddingBottom: 12,
    },
    subText: {
        color: 'white',
        fontSize: 24,
        textAlign: 'center'
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
    },
    textContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 34,
        margin: 10,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
        padding: 20,
    },
    certTitle: {
        textAlign: 'center',
        // resizeMode: 'cover',
        alignContent: 'center',
        // position:'absolute',
        color: 'green',
    },
    image: {
        width: 300,
        height: 200,
        // resizeMode: 'contain',
        resizeMode: 'cover',

    }
});

export default LessonComplete;