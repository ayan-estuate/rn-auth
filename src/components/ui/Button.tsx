import { theme } from '@/theme';
import { Pressable, Text as RNText, StyleSheet, ViewStyle } from 'react-native';

type Props = {
  title: string;
  onPress?: () => void;
  loading?: boolean;
  variant?: 'primary' | 'secondary' | 'link';
  style?: ViewStyle;
  disabled?: boolean;
};

export function Button({
  title,
  onPress,
  loading,
  variant = 'primary',
  style,
  disabled,
}: Props) {
  const styles = StyleSheet.create({
    base: {
      borderRadius: theme.radius.lg,
      paddingVertical: theme.spacing.md,
      paddingHorizontal: theme.spacing.lg,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:
        variant === 'primary' ? theme.colors.primary : theme.colors.card,
      opacity: disabled ? 0.6 : 1,
      borderWidth: variant === 'secondary' ? 1 : 0,
      borderColor: theme.colors.border,
    },
    text: {
      color:
        variant === 'primary' ? theme.colors.primaryText : theme.colors.text,
      fontWeight: '600',
      letterSpacing: 0.3,
    },
  });

  return (
    <Pressable
      disabled={disabled || loading}
      onPress={onPress}
      style={[styles.base, style]}
      android_ripple={{ color: '#2b2b2b' }}
    >
      <RNText style={styles.text}>{loading ? 'Please wait…' : title}</RNText>
    </Pressable>
  );
}
