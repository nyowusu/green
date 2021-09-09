import React from 'react';
import merge from 'lodash/merge';
import styled from 'styled-components/native';

import { TextProps as NativeTextProps } from 'react-native';

import { white } from '../../constants/colors';
import {
  NunitoSansBold,
  NunitoSansSemiBold,
  NunitoSansRegular,
  NunitoSansBoldItalic,
} from '../../constants/font';
import { TextSize, DefaultTextSizes } from '../../types/text';

export type TextType = keyof TextSize;

export interface TextProps extends NativeTextProps {
  type?: TextType;
  children: React.ReactNode;
  fontFamily?: string;
  fontSize?: number;
  fontStyle?: 'normal' | 'italic' | 'oblique';
  fontWeight?:
    | 'normal'
    | 'bold'
    | 'bolder'
    | 'lighter'
    | 100
    | 200
    | 300
    | 400
    | 500
    | 600
    | 700
    | 800
    | 900;
  lineHeight?: number;
  color?: string;
  textTransform?: 'uppercase' | 'lowercase' | 'capitalize' | 'none';
  opacity?: number;
  marginTop?: number;
  marginLeft?: number;
  marginRight?: number;
  textAlign?: 'center' | 'left' | 'right' | 'justify' | 'auto';
}

const TextTypeSettings: { [key: string]: DefaultTextSizes } = {
  BigTitle: {
    fontFamily: `${NunitoSansBoldItalic}`,
    fontSize: 100,
    fontStyle: 'normal',
    fontWeight: 'normal',
    textTransform: 'uppercase',
    lineHeight: 90,
    color: `${white}`,
  },
  Title: {
    fontFamily: `${NunitoSansRegular}`,
    fontSize: 26,
    fontStyle: 'normal',
    fontWeight: 'normal',
    lineHeight: 34,
    color: `${white}`,
  },
  SubTitle: {
    fontFamily: `${NunitoSansSemiBold}`,
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: 'normal',
    lineHeight: 22,
    color: `${white}`,
  },
  SubTitleAlternate: {
    fontFamily: `${NunitoSansSemiBold}`,
    fontSize: 10,
    fontStyle: 'normal',
    fontWeight: 'normal',
    lineHeight: 10,
    textTransform: 'uppercase',
    color: `${white}`,
  },
  RegularText: {
    fontFamily: `${NunitoSansRegular}`,
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: 'normal',
    lineHeight: 21,
    color: `${white}`,
  },
  CompanyName: {
    fontFamily: `${NunitoSansBold}`,
    fontSize: 26,
    fontStyle: 'normal',
    fontWeight: 'bold',
    lineHeight: 25,
    color: `${white}`,
  },
  RegularSmall: {
    fontFamily: `${NunitoSansRegular}`,
    fontSize: 10,
    fontStyle: 'normal',
    fontWeight: 'normal',
    lineHeight: 10,
    color: `${white}`,
  },
};

export function Text({
  type = 'RegularText',
  children,
  color,
  fontFamily,
  fontSize,
  fontStyle,
  fontWeight,
  lineHeight,
  opacity,
  textTransform,
  marginTop,
  textAlign,
  marginLeft,
  marginRight,
}: TextProps) {
  // selected textSize
  const selectedType = TextTypeSettings[type];

  // merge props
  const props = merge(selectedType, {
    color,
    fontFamily,
    fontSize,
    fontStyle,
    fontWeight,
    lineHeight,
    opacity,
    textTransform,
    marginTop,
    textAlign,
    marginLeft,
    marginRight,
  });

  const StyledText = styled.Text`
    font-family: ${props.fontFamily || NunitoSansRegular};
    font-size: ${props.fontSize || 14}px;
    line-height: ${props.lineHeight || 21}px;
    color: ${props.color || white}
    font-style: ${props.fontStyle || 'normal'};
    font-weight: ${props.fontWeight || 'normal'};
    opacity: ${props.opacity || 1}
    text-transform: ${props.textTransform || 'none'};
    margin-top: ${props.marginTop || 0}px;
    text-align: ${props.textAlign || 'left'};
    margin-left: ${props.marginLeft || 0}px;
    margin-right: ${props.marginRight || 0}px;
  `;

  return <StyledText>{children}</StyledText>;
}
