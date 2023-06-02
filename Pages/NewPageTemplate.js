import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const QuizResults = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  return (
    <View style={styles.container}>
      <View style={styles.centered}>
        <Text>HELLO WORLD</Text>
      </View>
      <View style={styles.centered2}>
        <Text>HELLO WORLD</Text>
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
    flex: 1,
    color: 'red',
    backgroundColor: 'coral',
  },
  centered2: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 2,
    color: 'red',
    backgroundColor: 'blue',
  }
})

export default QuizResults;