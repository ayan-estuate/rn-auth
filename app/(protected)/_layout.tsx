import { Stack } from "expo-router";
import { useAuthGuard } from "@/hooks/useAuthGuard";

export default function ProtectedLayout() {
  useAuthGuard();
  return <Stack screenOptions={{ headerStyle: { backgroundColor: "#0B0F14" }, headerTintColor: "#E6EAF2" }} />;
}
