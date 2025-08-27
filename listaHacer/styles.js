import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    width: 200,
    marginBottom: 10,
  },
  tareasContainer: {
    marginTop: 20,
    width: 200,
  },
  tareaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  tareaText: {
    flex: 1,
  },
  titulo: {
    fontSize: 20,
    marginBottom: 10,
  },
});

export default styles;
