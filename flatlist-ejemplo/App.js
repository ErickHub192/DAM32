import { StatusBar } from 'expo-status-bar';
import { FlatList, Text, View, Image } from 'react-native';
import styles from './styles';

const Item = ({ item }) => (
  <>
    <Text style={styles.itemText}>{item.nombre}</Text>
    <Image source={{ uri: item.url }} style={styles.image} />
  </>
);

export default function App() {
  const data = [
    {id:1, nombre:'tamales',url:'https://tse4.mm.bing.net/th/id/OIP.ORt_hUGQZ19xRvQg15EVdwHaE8?pid=Api&P=0&h=180'},
    {id:2, nombre:'Pozoles', url:'https://tse2.mm.bing.net/th/id/OIP.ee1Rk56DK6IWxxdoRkXQEwHaE6?pid=Api&P=0&h=180'},
    {id:3, nombre:'Sopes', url:'https://www.turimexico.com/wp-content/uploads/2016/02/sopes-mexicanos.jpg'},
    {id:4, nombre:'Tacos', url:'http://picale.mx/wp-content/uploads/IMG_0919.jpg'},
    {id:5, nombre:'Chilaquiles', url:'https://recetinas.com/wp-content/uploads/2017/10/chilaquiles-rojos.jpg'},
    {id:6, nombre:'Enchiladas', url:'https://coolandfantastic.com/wp-content/uploads/2020/02/authentic-mexican-enchiladas-rojas-luxury-authentic-queso-fresco-enchiladas-of-authentic-mexican-enchiladas-rojas.jpg'},
  ]
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ejemplo de flatList</Text>
      <StatusBar style="auto" />
      <View>
        <FlatList
          data={data}
          renderItem={({ item }) => <Item item={item} />}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </View>
  );
}

