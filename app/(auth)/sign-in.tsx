import React from "react";
import { View, Alert, Pressable } from "react-native";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInSchema, type SignInForm } from "@/features/auth/validators";
import { EmailField } from "@/features/auth/components/EmailField";
import { PasswordField } from "@/features/auth/components/PasswordField";
import { Button } from "@/components/ui/Button";
import { Screen } from "@/components/layout/Screen";
import { Text } from "@/components/ui/Text";
import { theme } from "@/theme";
import { useAuthStore } from "@/store/auth-store";
import { Link } from "expo-router";

export default function SignIn() {
  const { control, handleSubmit } = useForm<SignInForm>({ resolver: zodResolver(signInSchema), defaultValues: { email: "", password: "" } });
  const signIn = useAuthStore((s) => s.signIn);
  const loading = useAuthStore((s) => s.loading);

  const onSubmit = handleSubmit(async (values) => {
    try {
      await signIn(values);
    } catch (e: any) {
      Alert.alert("Login failed", e?.message || "Please check your credentials");
    }
  });

  return (
    <Screen>
      <View style={{ gap: theme.spacing.lg }}>
        <Text style={{ fontSize: 28, fontWeight: "700" }}>Welcome back</Text>
        <EmailField control={control} />
        <PasswordField control={control} />
        <Button title="Sign in" onPress={onSubmit} loading={loading} />
        <Pressable>
          <Link href="/(auth)/forgot-password" asChild>
            <Text style={{ color: theme.colors.textMuted, textAlign: "center" }}>Forgot password?</Text>
          </Link>
        </Pressable>
        <Pressable>
          <Link href="/(auth)/sign-up" asChild>
            <Text style={{ textAlign: "center" }}>New here? Create an account</Text>
          </Link>
        </Pressable>
      </View>
    </Screen>
  );
}
