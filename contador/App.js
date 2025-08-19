import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState('');

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  const handleInputChange = (numeric) => {
    setInputValue(numeric);
    const numberValue = parseInt(numeric) || 0;
    setCounter(numberValue);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.Text}>Mi primer contador en React Native</Text>
      
      <TextInput
        placeholder='Ingresa un número'
        keyboardType='numeric'
        onChangeText={handleInputChange}
        value={inputValue}
        style={styles.input}
        placeholderTextColor="gray"
      />
      
      <Text style={styles.counterText}>Contador: {counter}</Text>
      
      <View style={styles.buttonContainer}>
        <Button title="Incrementar" onPress={increment} />
        <Button title="Decrementar" onPress={decrement} />
      </View>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    width: '80%',
    paddingHorizontal: 10,
    color: 'white',
    backgroundColor: '#333',
    borderRadius: 5,
  },
  Text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
    textAlign: 'center',
  },
  counterText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 10,
  },
});