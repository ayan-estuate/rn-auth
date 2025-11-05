import { Screen } from '@/components/layout/Screen';
import { Button } from '@/components/ui/Button';
import { Text } from '@/components/ui/Text';
import { EmailField } from '@/features/auth/components/EmailField';
import { PasswordField } from '@/features/auth/components/PasswordField';
import { signUpSchema, type SignUpForm } from '@/features/auth/validators';
import { useAuthStore } from '@/store/auth-store';
import { theme } from '@/theme';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Alert, View } from 'react-native';

export default function SignUp() {
  const { control, handleSubmit } = useForm<SignUpForm>({
    resolver: zodResolver(signUpSchema),
    defaultValues: { name: '', email: '', password: '' },
  });

  const signUp = useAuthStore((s) => s.signUp);
  const loading = useAuthStore((s) => s.loading);

  const onSubmit = handleSubmit(async (values) => {
    try {
      await signUp(values);
      Alert.alert('Success', 'Account created successfully!');
      console.log('success');
    } catch (e: any) {
      Alert.alert(
        'Sign up failed',
        e?.response?.data?.message || 'Please try again',
      );
    }
  });

  return (
    <Screen>
      <View style={{ gap: theme.spacing.lg }}>
        <Text style={{ fontSize: 28, fontWeight: '700' }}>
          Create your account
        </Text>

        {/* Email + optional Name field */}
        <EmailField
          control={control}
          name="email"
          showNameField={true}
          controlName="name"
        />

        {/* Password */}
        <PasswordField control={control} label="Password" />

        {/* Submit Button */}
        <Button
          title={loading ? 'Creating...' : 'Create Account'}
          onPress={onSubmit}
          disabled={loading}
        />
      </View>
    </Screen>
  );
}
