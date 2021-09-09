import { useFocusEffect } from '@react-navigation/core';
import React, { useCallback } from 'react';
import { View, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { fetchQuotes } from '../../state/quotes/actions';
import { IQuotesRequest } from '../../state/quotes/types';

export default function QuotesScreen() {
  const dispatch = useDispatch();

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
    <View>
      <Text></Text>
    </View>
  );
}
