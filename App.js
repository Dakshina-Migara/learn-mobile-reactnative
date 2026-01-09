import { StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native';
import Home from './src/screens/Home.js'
import Login from './src/screens/Login.js'
import Register from './src/screens/Register.js'
import Paper from './src/screens/Paper.js'
import AxiosPage from './src/screens/AxiosPage.js'
import CardComponent from './src/component/CardComponent.js'
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      {/* <Login /> */}
      <CardComponent/>
      {/* <Register /> */}
      {/* <Paper/> */}
      {/* <AxiosPage/> */}
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
