
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { TextInput, Button, TouchableOpacity } from 'react-native';
import styles from './styles';

export default function App() {
  const [email, setEmail] = useState('');
  const [emailValido, setEmailValido] = useState(true);

  const validarEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleEmailChange = (text) => {
    setEmail(text);
    setEmailValido(validarEmail(text));
  };

  const handleLogin = () => {
    if (!validarEmail(email)) {
      setEmailValido(false);
      alert('Email no válido');
      return;
    }
    alert('Login pressed');
  };


  return (
    <View style={styles.container}>
      <Text>Interacción con el Usuario</Text>
      <TouchableOpacity style={styles.container}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={handleEmailChange}
          style={{ borderColor: emailValido ? '#ccc' : 'red', borderWidth: 1, marginBottom: 5, width: 200 }}
        />
        {!emailValido && (
          <Text style={{ color: 'red', marginBottom: 5 }}>Email no válido</Text>
        )}
        <TextInput placeholder="Password" secureTextEntry={true} style={{ marginBottom: 5, width: 200 }} />
        <TextInput placeholder="Name" style={{ marginBottom: 5, width: 200 }} />
        <TextInput placeholder="Fecha de Nacimiento" style={{ marginBottom: 5, width: 200 }} />
        <TextInput placeholder="Teléfono" style={{ marginBottom: 5, width: 200 }} />
        <Button title="Login" onPress={handleLogin} />
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}


