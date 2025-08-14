import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './styles';

const PrimeraApp = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mi Primera App</Text>
      <View style={styles.imageBox}>
        {/* Puedes cambiar la imagen por la que quieras en assets */}
        <Image
          source={require('./assets/Agentes-de-IA-revolucionando-los-negocios.webp')}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <Text style={styles.subtitle}>
        Me gusta la IA , es el futuro, o tal vez solo una burbuja que pronto se romperá. Solo el tiempo lo dirá.
      </Text>
    </View>
  );
};

export default PrimeraApp;
