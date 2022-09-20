import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

//import Contador from './components/Estados/Contador.jsx';
import VotaCidade from './components/Estados/VotaCidade.jsx';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        <VotaCidade/>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
