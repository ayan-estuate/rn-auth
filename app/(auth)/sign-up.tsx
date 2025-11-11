import { Screen } from '@/components/layout/Screen';
import { Button } from '@/components/ui/Button';
import { Text } from '@/components/ui/Text';
import { EmailField } from '@/features/auth/components/EmailField';
import { NameField } from '@/features/auth/components/NameField';
import { PasswordField } from '@/features/auth/components/PasswordField';
import { signUpSchema, type SignUpForm } from '@/features/auth/validators';
import { useAuthStore } from '@/store/auth-store';
import { theme } from '@/theme';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link, router } from 'expo-router';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Alert, Pressable, View } from 'react-native';

export default function SignUp() {
  const { control, handleSubmit } = useForm<SignUpForm>({
    resolver: zodResolver(signUpSchema),
    defaultValues: { name: '', email: '', password: '' },
  });

  const signUp = useAuthStore((s) => s.signUp);
  const loading = useAuthStore((s) => s.loading);

  const onSubmit = handleSubmit(async (values) => {
    try {
      console.log('📤 Submitting signup data:', values);
      await signUp(values);

      Alert.alert('Success', 'Account created successfully!');

      // Navigate to sign-in page after success
      router.replace('/(auth)/sign-in');
    } catch (e: any) {
      console.error('❌ Signup failed:', e);
      const message =
        e?.response?.data?.message ||
        e?.message ||
        'Unable to create account. Please try again later.';
      Alert.alert('Sign up failed', message);
    }
  });

  return (
    <Screen>
      <View style={{ gap: theme.spacing.lg }}>
        <Text style={{ fontSize: 28, fontWeight: '700' }}>
          Create your account
        </Text>

        {/* Name field */}
        <NameField control={control} name="name" />

        {/* Email field */}
        <EmailField control={control} name="email" />

        {/* Password field */}
        <PasswordField control={control} name="password" label="Password" />

        {/* Submit Button */}
        <Button
          title={loading ? 'Creating...' : 'Create Account'}
          onPress={onSubmit}
          disabled={loading}
        />
        <Pressable>
          <Link href="/(auth)/sign-in" asChild>
            <Text style={{ textAlign: 'center' }}>
              Already have an account? Sign in
            </Text>
          </Link>
        </Pressable>
      </View>
    </Screen>
  );
}
