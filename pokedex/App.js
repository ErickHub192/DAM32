import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, Image, TouchableOpacity } from 'react-native';
import styles from './styles';

export default function App() {
  const [nombre, setNombre] = useState('');
  const [tipo, setTipo] = useState('');
  const [imagen, setImagen] = useState('');
  const [pokemones, setPokemones] = useState([]);

  const agregarPokemon = () => {
    if (nombre && tipo && imagen) {
      const nuevoPokemon = {
        id: Date.now().toString(),
        nombre,
        tipo,
        imagen,
        atrapado: false,
      };
      setPokemones([...pokemones, nuevoPokemon]);
      setNombre('');
      setTipo('');
      setImagen('');
    }
  };

  const marcarAtrapado = (id) => {
    setPokemones(
      pokemones.map((poke) =>
        poke.id === id ? { ...poke, atrapado: !poke.atrapado } : poke
      )
    );
  };

  const totalAtrapados = pokemones.filter((p) => p.atrapado).length;

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Pokédex Básica</Text>

      <TextInput
        style={styles.input}
        placeholder="Nombre del Pokémon"
        value={nombre}
        onChangeText={setNombre}
      />
      <TextInput
        style={styles.input}
        placeholder="Tipo del Pokémon"
        value={tipo}
        onChangeText={setTipo}
      />
      <TextInput
        style={styles.input}
        placeholder="URL de la imagen"
        value={imagen}
        onChangeText={setImagen}
      />

      <Button title="Agregar Pokémon" onPress={agregarPokemon} />

      <FlatList
        data={pokemones}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.imagen }} style={styles.imagen} />
            <View style={styles.cardInfo}>
              <Text
                style={[
                  styles.nombre,
                  item.atrapado && styles.nombreAtrapado,
                ]}
              >
                {item.nombre}
              </Text>
              <Text style={styles.tipo}>{item.tipo}</Text>
              <TouchableOpacity
                style={styles.botonAtrapado}
                onPress={() => marcarAtrapado(item.id)}
              >
                <Text style={styles.textoBoton}>
                  {item.atrapado ? 'Liberar' : 'Atrapar'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      <View style={styles.footer}>
        <Text>Total registrados: {pokemones.length}</Text>
        <Text>Total atrapados: {totalAtrapados}</Text>
      </View>
    </View>
  );
}
