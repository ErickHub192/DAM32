import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import styles from './styles';

export default function App() {
  const [gastos, setGastos] = useState([]);
  const [nuevoNombre, setNuevoNombre] = useState("");
  const [nuevoMonto, setNuevoMonto] = useState("");

  const agregarGasto = () => {
    if (nuevoNombre.trim() !== "" && nuevoMonto.trim() !== "") {
      setGastos([...gastos, { nombre: nuevoNombre, monto: Number(nuevoMonto) }]);
      setNuevoNombre("");
      setNuevoMonto("");
    }
  };

  const quitarGasto = (i) => {
    setGastos(gastos.filter((__, index) => index !== i));
  };

  const totalGastos = () => {
    return gastos.reduce((acc, gasto) => acc + gasto.monto, 0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Gastos</Text>

      <TextInput
        style={styles.input}
        placeholder="Nombre del gasto"
        value={nuevoNombre}
        onChangeText={setNuevoNombre}
      />
      <TextInput
        style={styles.input}
        placeholder="Monto del gasto"
        keyboardType="numeric"
        value={nuevoMonto}
        onChangeText={setNuevoMonto}
      />
      <Button title="Agregar gasto" onPress={agregarGasto} />

      <View style={styles.lista}>
        {gastos.map((gasto, i) => (
          <View key={i} style={styles.itemGasto}>
            <Text style={styles.textoGasto}>
              {gasto.nombre} - ${gasto.monto}
            </Text>
            <Button title="Pagado" onPress={() => quitarGasto(i)} />
          </View>
        ))}
      </View>

      <View style={styles.totalContainer}>
        <Text style={styles.totalTexto}>Total: ${totalGastos()}</Text>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}
