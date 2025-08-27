import { StatusBar } from 'expo-status-bar';
import { Button, View, TextInput, Text } from 'react-native';
import React, { useState } from 'react';
import styles from './styles';

export default function App() {
  const [tareas, setTarea] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState('');


  const agregarTarea = () => {
    if (nuevaTarea.trim() !== '') {
      setTarea([...tareas, nuevaTarea]);
      setNuevaTarea('');
    }
  };

  
  const borrarTarea = (i) => {
    setTarea(tareas.filter((_, index) => index !== i));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista de tareas</Text>
      <TextInput
        style={styles.input}
        placeholder="Escribe una tarea"
        value={nuevaTarea}
        onChangeText={setNuevaTarea}
      />
      <Button title="Agrega tu tarea" onPress={agregarTarea} />
      <View style={styles.tareasContainer}>
        {tareas.map((tarea, index) => (
          <View key={index} style={styles.tareaRow}>
            <Text style={styles.tareaText}>{tarea}</Text>
            <Button title="Borrar" onPress={() => borrarTarea(index)} />
          </View>
        ))}
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
