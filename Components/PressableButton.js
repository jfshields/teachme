import React from 'react';
import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';


const ButtonContainer = styled.TouchableOpacity`
  ${'' /* margin-vertical: 40px; */}
  ${'' /* width: 120px; */}
  height: 40px;
  padding: 12px;
  border-radius: 10px;
  background-color: ${props => props.disabled ? "#5DB075": props.bgColor };
`;
const ButtonText = styled.Text`
  ${'' /* font-size: 16px; */}
  text-align: center;
  color: ${props => props.bgColor ? "#5DB075": props.bgColor };
`;

const styles = StyleSheet.create({
  bottonEnabled: {
    backgroundColor: '#E8E8E8',
    color: 'white',
    // display: 'none',
  },
  bottonDisabled: {
    backgroundColor: '#5DB075',
    color: 'white',
  }
})

const PressableButton = ({ onPress, bgColor, title, disabled }) => (
  <ButtonContainer onPress={onPress} bgColor={bgColor} disabled={disabled} style={disabled ? styles.bottonEnabled : styles.bottonDisabled}>
    <ButtonText style={disabled ? styles.bottonEnabled : styles.bottonDisabled}>{title}</ButtonText>
  </ButtonContainer>
);
export default PressableButton;