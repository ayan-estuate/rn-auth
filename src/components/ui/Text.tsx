import { theme } from '@/theme';
import React from 'react';
import { Text as RNText, TextProps } from 'react-native';

export function Text(props: TextProps) {
  return (
    <RNText
      {...props}
      style={[{ color: theme.colors.text, fontSize: 16 }, props.style]}
    />
  );
}
