import { Button, Image, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

function HomePage({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.middle}>
                <TouchableOpacity onPress={() => navigation.navigate('Subject')}>
                    <Image
                        style={styles.image}
                        source={require('../assets/teach-me-logo.png')}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.bottom}>
                <Text style={styles.subText}>Powered by OpenAI</Text>
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
        padding: 24
    },
    middle: {
        color: 'white',
        justifyContent: 'flex-end',
        alignContent: 'center',
        marginTop: 'auto',
    },
    bottom: {
        justifyContent: 'flex-end',
        alignContent: 'center',
        marginTop: 'auto',
    },
    subText : {
        color:'white',
        fontSize: 24,
    },
    image: {
        width: 300,
        height: 200,
        resizeMode: 'contain',
    }
});

export default HomePage;