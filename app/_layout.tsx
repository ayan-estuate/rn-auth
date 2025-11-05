import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { ThemeProvider } from "@/theme";
import "@/lib/i18n"; // optional init if you added i18n

export default function RootLayout() {
  return (
    <ThemeProvider>
      <View style={{ flex: 1 }}>
        <StatusBar style="light" />
        <Slot />
      </View>
    </ThemeProvider>
  );
}
