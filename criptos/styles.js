import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 10,
  },
  content: {
    marginTop: 20,
    alignItems: 'center',
  },
  subtitle: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 15,
  },
  cryptoText: {
    fontSize: 16,
    marginVertical: 4,
  },
  loadingText: {
    fontSize: 16,
    color: 'gray',
  },
  errorText: {
    color: 'red',
    marginTop: 10,
  },
});

export default styles;
