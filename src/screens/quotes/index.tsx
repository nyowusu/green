import { useFocusEffect } from '@react-navigation/core';
import { StatusBar } from 'expo-status-bar';
import React, { useCallback } from 'react';
import { View, Dimensions, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import styled from 'styled-components/native';

import quotesImage from '../../../assets/images/login-bg-3.jpeg';
import Quote from '../../components/quote';
import { Text } from '../../components/text';
import { fetchQuotes } from '../../state/quotes/actions';
import { useTypedSelector } from '../../state/store';

const { width, height } = Dimensions.get('window');

const BackgroundImage = styled.ImageBackground`
  width: ${width}px;
  height: ${height}px;
  resize-mode: center;
`;

const BackgroundImageContainer = styled.View`
  flex: 1;
`;

const OverLay = styled.View`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  opacity: 0.8;
  background-color: 'rgba(0,0,0,1)';
`;

const Container = styled.FlatList`
  flex: 1;
`;

const PricingContainer = styled.View`
  margin-top: 24px;
  padding: 16px;
`;

export default function QuotesScreen() {
  const dispatch = useDispatch();
  const { list } = useTypedSelector(({ quotes: { list } }) => ({ list }));

  const { paymentDay, pricing, startDate } = list;

  useFocusEffect(
    useCallback(() => {
      dispatch(
        fetchQuotes({
          e7: 55,
          electric: 3100,
          gas: 12000,
          postcode: 'NE45TF',
        }) as any,
      );
    }, []),
  );

  return (
    <>
      <StatusBar />
      <BackgroundImageContainer
        style={{
          ...StyleSheet.absoluteFillObject,
          opacity: 0.4,
        }}>
        <BackgroundImage
          source={quotesImage}
          style={{ ...StyleSheet.absoluteFillObject }}
          resizeMode="cover"
        />
      </BackgroundImageContainer>
      <OverLay />
    </>
  );
}
