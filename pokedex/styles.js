import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5dc',
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 15,
    color: '#d62828',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 5,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 10,
    marginVertical: 8,
    borderRadius: 10,
    alignItems: 'center',
    elevation: 2,
  },
  imagen: {
    width: 80,
    height: 80,
    marginRight: 10,
    borderRadius: 10,
  },
  cardInfo: {
    flex: 1,
  },
  nombre: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  nombreAtrapado: {
    color: 'green',
    textDecorationLine: 'line-through',
  },
  tipo: {
    fontSize: 16,
    color: '#555',
  },
  botonAtrapado: {
    marginTop: 5,
    backgroundColor: '#f77f00',
    padding: 8,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  textoBoton: {
    color: '#fff',
    fontWeight: 'bold',
  },
  footer: {
    marginTop: 15,
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
});
