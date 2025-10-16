import { StatusBar } from 'expo-status-bar';
import { Text, View, Alert } from 'react-native';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles'; 

export default function App() {
  const [precio, setPrecio] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  
  useEffect(() => {
    const mostrarLocal = async () => {
      try {
        const data = await AsyncStorage.getItem('precio');
        if (data !== null) {
          setPrecio(JSON.parse(data));
          setLoading(false);
        }
      } catch (e) {
        console.error('Error al leer datos locales:', e);
      }
    };
    mostrarLocal();
  }, []);

  
  useEffect(() => {
    const fetchData = () => {
      fetch(
        'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,dogecoin,solana&vs_currencies=usd&include_24hr_change=true'
      )
        .then((response) => response.json())
        .then((data) => {
          setPrecio(data);
          setLoading(false);
          setError(null);
          AsyncStorage.setItem('precio', JSON.stringify(data));
        })
        .catch(() => {
          setLoading(false);
          setError('No hay conexión. Mostrando datos guardados.');
          Alert.alert('Sin conexión', 'No hay internet. Mostrando datos guardados.');
        });
    };

    fetchData();

    const interval = setInterval(fetchData, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Criptos</Text>
      <View style={styles.content}>
        <Text style={styles.subtitle}>Precios de Criptos</Text>

        {loading ? (
          <Text style={styles.loadingText}>Cargando...</Text>
        ) : (
          <>
            <Text style={styles.cryptoText}>
              Bitcoin: {precio.bitcoin?.usd ? `${precio.bitcoin.usd} USD` : 'N/A'}
              {precio.bitcoin?.usd_24h_change !== undefined
                ? `  (${precio.bitcoin.usd_24h_change.toFixed(2)}%)`
                : ''}
            </Text>
            <Text style={styles.cryptoText}>
              Ethereum: {precio.ethereum?.usd ? `${precio.ethereum.usd} USD` : 'N/A'}
              {precio.ethereum?.usd_24h_change !== undefined
                ? `  (${precio.ethereum.usd_24h_change.toFixed(2)}%)`
                : ''}
            </Text>
            <Text style={styles.cryptoText}>
              Dogecoin: {precio.dogecoin?.usd ? `${precio.dogecoin.usd} USD` : 'N/A'}
              {precio.dogecoin?.usd_24h_change !== undefined
                ? `  (${precio.dogecoin.usd_24h_change.toFixed(2)}%)`
                : ''}
            </Text>
            <Text style={styles.cryptoText}>
              Solana: {precio.solana?.usd ? `${precio.solana.usd} USD` : 'N/A'}
              {precio.solana?.usd_24h_change !== undefined
                ? `  (${precio.solana.usd_24h_change.toFixed(2)}%)`
                : ''}
            </Text>
          </>
        )}

        {error && <Text style={styles.errorText}>{error}</Text>}
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
