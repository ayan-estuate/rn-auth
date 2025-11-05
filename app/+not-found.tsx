import { theme } from '@/theme';
import { Link } from 'expo-router';
import { Button, Text, View } from 'react-native';

export default function NotFound() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.colors.bg,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text
        style={{ color: theme.colors.text, fontSize: 18, marginBottom: 12 }}
      >
        Page not found
      </Text>
      <Link href="/(auth)/sign-in" asChild>
        <Button title="Go to Sign In" onPress={() => {}} />
      </Link>
    </View>
  );
}
