import React from "react";
import { View, Alert } from "react-native";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Screen } from "@/components/layout/Screen";
import { EmailField } from "@/features/auth/components/EmailField";
import { Button } from "@/components/ui/Button";
import { Text } from "@/components/ui/Text";
import { theme } from "@/theme";
import { forgotPassword } from "@/features/auth/api";

const schema = z.object({ email: z.string().email() });
type Form = z.infer<typeof schema>;

export default function ForgotPassword() {
  const { control, handleSubmit } = useForm<Form>({ resolver: zodResolver(schema), defaultValues: { email: "" } });

  const onSubmit = handleSubmit(async ({ email }) => {
    try {
      await forgotPassword(email);
      Alert.alert("Email sent", "Check your inbox for reset instructions.");
    } catch (e: any) {
      Alert.alert("Error", e?.response?.data?.message || "Please try again later");
    }
  });

  return (
    <Screen>
      <View style={{ gap: theme.spacing.lg }}>
        <Text style={{ fontSize: 24, fontWeight: "700" }}>Reset your password</Text>
        <EmailField control={control} />
        <Button title="Send reset link" onPress={onSubmit} />
      </View>
    </Screen>
  );
}
