import { StatusBar } from 'expo-status-bar';
import styles from './styles';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [numero1, setNumero1] = useState('');
  const [numero2, setNumero2] = useState('');
  const [resultado, setResultado] = useState(null);

  const calcularSuma = () => setResultado(Number(numero1) + Number(numero2));
  const calcularResta = () => setResultado(Number(numero1) - Number(numero2));
  const calcularMulti = () => setResultado(Number(numero1) * Number(numero2));
  const calcularDiv = () =>
    setResultado(Number(numero2) !== 0 ? Number(numero1) / Number(numero2) : "Error (÷0)");

  return (
    <View style={styles.container}>
      <Text style={styles.Title}>Calculadora Style</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.TextInput}
          placeholder="Ingrese un número"
          placeholderTextColor="#aaa"
          keyboardType="numeric"
          value={numero1}
          onChangeText={setNumero1}
        />
        <TextInput
          style={styles.TextInput}
          placeholder="Ingrese otro número"
          placeholderTextColor="#aaa"
          keyboardType="numeric"
          value={numero2}
          onChangeText={setNumero2}
        />
      </View>

      <Text style={styles.resultado}>
        Resultado: {resultado !== null ? resultado : "-"}
      </Text>

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.Button} onPress={calcularSuma}>
          <Text style={styles.buttonText}>Sumar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Button} onPress={calcularResta}>
          <Text style={styles.buttonText}> Restar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.Button} onPress={calcularMulti}>
          <Text style={styles.buttonText}>Multiplicar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Button} onPress={calcularDiv}>
          <Text style={styles.buttonText}>Dividir</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}
