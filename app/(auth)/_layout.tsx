import { Stack } from "expo-router";
import { View } from "react-native";
import { theme } from "@/theme";

export default function AuthLayout() {
  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.bg }}>
      <Stack screenOptions={{ headerShown: false }} />
    </View>
  );
}
