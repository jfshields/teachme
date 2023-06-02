import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import PressableButton from '../Components/PressableButton';
import sendMessageToChatGPT from '../Connection/ChatGPT';

const QuizResults = ({navigation}) => {
  const [count, setCount] = useState(0);
  
  const handleSendMessage = (message) => {
    sendMessageToChatGPT(message);
  };

  return (
    <View style={styles.container}>
      <View style={styles.centered}>
        <Text>You scored 0</Text>
      </View>

      <Button title="Send Message" onPress={() => handleSendMessage('Hello, how are you?')} />

      <View style={styles.centered2}>
        <View style={[styles.bottom]}>
            <PressableButton
                title="Go to first lesson"
                onPress={() => navigation.navigate('Lesson')}
                bgColor='#5DB075'
                // disabled={isButtonDisabled}
            />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
      padding: 12
  },
  centered: {
    justifyContent: 'center',
    alignItems: 'center',
    // flex: 1,
    color: 'red',
    // backgroundColor: '#5DB075',
  },
  centered2: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },    
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    alignSelf: 'stretch'
}
})

export default QuizResults;