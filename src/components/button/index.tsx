import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { NunitoSansRegular } from '../../constants/font';

const { width } = Dimensions.get('window');

export const Button = styled.Pressable<{ color: string; width?: number }>`
  background-color: ${(props) => props.color};
  width: ${(props) => props.width || width - 32}px;
  height: 60px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text<{ color: string; fontSize?: number }>`
  font-family: ${NunitoSansRegular};
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize || 16}px;
  line-height: 28.13px;
  text-align: center;
`;
