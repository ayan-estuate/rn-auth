import { theme } from '@/theme';
import React, { forwardRef, useState } from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from 'react-native';

type Props = TextInputProps & { label?: string; error?: string; style?: ViewStyle };

export const Input = forwardRef<TextInput, Props>(
  ({ label, error, style, secureTextEntry, ...props }, ref) => {
    const [hidden, setHidden] = useState(!!secureTextEntry);
    return (
      <View style={{ marginBottom: theme.spacing.lg }}>
        {label ? (
          <Text style={{ color: theme.colors.textMuted, marginBottom: 6 }}>
            {label}
          </Text>
        ) : null}
        <View style={[styles.wrapper, style]}>
          <TextInput
            ref={ref}
            placeholderTextColor={theme.colors.textMuted}
            secureTextEntry={hidden}
            style={styles.input}
            {...props}
          />
          {secureTextEntry && (
            <Pressable onPress={() => setHidden((x) => !x)}>
              <Text style={{ color: theme.colors.textMuted }}>
                {hidden ? 'Show' : 'Hide'}
              </Text>
            </Pressable>
          )}
        </View>
        {!!error && (
          <Text style={{ color: theme.colors.danger, marginTop: 6 }}>
            {error}
          </Text>
        )}
      </View>
    );
  },
);

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#0F1520',
    borderColor: '#1F2A37',
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: { flex: 1, color: '#E6EAF2', fontSize: 16, paddingVertical: 6 },
});
