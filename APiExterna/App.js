import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  Text,
  View,
  Button,
  ActivityIndicator,
  FlatList,
  Platform,
  StatusBar as RNStatusBar,
} from 'react-native';
import styles from './src/styles';
import { fetchJson } from './src/api/apiClient';

const SafeAreaViewCompat = ({ children, style }) => (
  <View
    style={[
      { paddingTop: Platform.OS === 'android' ? RNStatusBar.currentHeight || 0 : 0 },
      style,
    ]}
  >
    {children}
  </View>
);

export default function App() {
  const API_URL = 'https://jsonplaceholder.typicode.com/users';
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const loadApi = async () => {
    setError(null);
    setData(null);

    setLoading(true);
    try {
  const json = await fetchJson(API_URL);
      setData(json);
    } catch (err) {
      setError(err.message || String(err));
    } finally {
      setLoading(false);
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text>{JSON.stringify(item)}</Text>
    </View>
  );

  return (
    <SafeAreaViewCompat style={styles.container}>
      <Text style={styles.title}>Consumir API externa</Text>

      <Button title="Mostrar usuarios" onPress={loadApi} />

      {loading && <ActivityIndicator style={styles.loader} size="large" />}

      {error ? (
        <Text style={styles.error}>Error: {error}</Text>
      ) : null}

      {data ? (
        Array.isArray(data) ? (
          <FlatList
            data={data}
            keyExtractor={(_, idx) => String(idx)}
            renderItem={renderItem}
            style={styles.list}
          />
        ) : (
          <View style={styles.result}>
            <Text>{JSON.stringify(data, null, 2)}</Text>
          </View>
        )
      ) : null}

      <StatusBar style="auto" />
    </SafeAreaViewCompat>
  );
}

