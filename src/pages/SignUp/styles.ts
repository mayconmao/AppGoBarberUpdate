import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  margin-top: ${Platform.OS === 'android' ? 130 : 0}px;
  padding: 0 30px ${Platform.OS === 'android' ? 150 : 40}px;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #fff;
  font-family: 'Roboto-Medium';
  margin: 15px 0 24px;
`;

export const BackToSignIn = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  background: #312e38;
  border-top-width: 1px;
  border-color: #232129;
  padding: 10px 0 ${10 + getBottomSpace()}px;

  justify-content: center;
  align-items: center;
  flex-direction: row;
`;
export const BackToSignInText = styled.Text`
  color: #ff9000;
  font-size: 18px;
  font-family: 'Roboto-Regular';
  margin-left: 16px;
`;
