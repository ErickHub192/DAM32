import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f9f9f9',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 15,
    color: '#333',
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'justify',
    marginBottom: 15,
    color: '#555',
  },
  highlight: {
    fontWeight: '600',
    color: '#007AFF',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginTop: 10,
  },
});

export default styles;
