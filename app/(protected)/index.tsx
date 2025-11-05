import React from "react";
import { View } from "react-native";
import { Screen } from "@/components/layout/Screen";
import { Text } from "@/components/ui/Text";
import { Button } from "@/components/ui/Button";
import { useAuthStore } from "@/store/auth-store";
import { theme } from "@/theme";

export default function Home() {
  const user = useAuthStore((s) => s.user);
  const signOut = useAuthStore((s) => s.signOut);
  return (
    <Screen>
      <View style={{ gap: theme.spacing.lg }}>
        <Text style={{ fontSize: 22 }}>Hi {user?.name || "there"} 👋</Text>
        <Button title="Sign out" onPress={signOut} variant="secondary" />
      </View>
    </Screen>
  );
}
