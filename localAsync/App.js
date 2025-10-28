import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native/types_generated/index';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Async Storage</Text>
      <View>
        <Text>Ingresa tu archivo a subir a local</Text>
        <TextInput ></TextInput>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
