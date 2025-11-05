import { useColorScheme as rnUseColorScheme } from 'react-native';
export function useColorScheme() {
  const scheme = rnUseColorScheme();
  return scheme || 'light';
}
