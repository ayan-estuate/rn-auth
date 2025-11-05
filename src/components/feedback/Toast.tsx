import { theme } from '@/theme';
import React from 'react';
import { Text, View } from 'react-native';

export function Toast({ message }: { message: string }) {
  if (!message) return null;
  return (
    <View
      style={{
        position: 'absolute',
        bottom: 40,
        left: 20,
        right: 20,
        backgroundColor: theme.colors.card,
        padding: 12,
        borderRadius: 10,
      }}
    >
      <Text style={{ color: theme.colors.text }}>{message}</Text>
    </View>
  );
}
