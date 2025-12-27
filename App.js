import { StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native';
import Home from './src/screens/Home.js'
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <Home />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
