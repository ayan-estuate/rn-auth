import { theme } from '@/theme';
import React from 'react';
import { ActivityIndicator, View } from 'react-native';

export function Spinner() {
  return (
    <View style={{ padding: theme.spacing.md }}>
      <ActivityIndicator />
    </View>
  );
}
