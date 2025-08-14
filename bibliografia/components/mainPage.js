
import { Text, Image, ScrollView } from 'react-native';
import styles from '../styles';

export default function MainPage() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Mi Biografía</Text>

      <Text style={styles.paragraph}>
        Me llamo <Text style={styles.highlight}>Erick Arriola Aguillón</Text>, tengo 20 años
        y nací en Querétaro. Mis hobbies y gustos incluyen la música, especialmente
        tocar instrumentos como la guitarra y el piano. También me gusta el fútbol,
        aunque ya no lo practico, y la tecnología, en particular aprender sobre
        programación.
      </Text>

      <Text style={styles.paragraph}>
        Los fines de semana, por lo regular, trabajo en una cartonera y dedico tiempo
        a mis proyectos de programación.
      </Text>

      <Image
        source={ require('../images/foto_Mia.jpg') }
        style={styles.image}
      />
    </ScrollView>
  );
}
