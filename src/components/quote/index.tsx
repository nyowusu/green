import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import { IEnergy } from '../../state/quotes/types';
import { Text } from '../../components/text';

const QuoteContainer = styled.View`
  border: 1px solid red;
`;

const ValueContainer = styled.View`
  display: flex;
  flex-direction: row;
`;
const Title = styled.View`
  margin-right: 32px;
`;

export default function Quote({ all, day, night, standing, title }: IEnergy) {
  return (
    <QuoteContainer>
      <ValueContainer>
        <Title>
          <Text>All:</Text>
        </Title>
        <Text>{title || 'Energy Rates'}</Text>
      </ValueContainer>
      <Text>{all}</Text>
      <Text>{day}</Text>
      <Text>{night}</Text>
      <Text>{standing}</Text>
    </QuoteContainer>
  );
}
