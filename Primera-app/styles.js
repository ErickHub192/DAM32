import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f6fa',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2d3436',
    marginBottom: 16,
    textAlign: 'center',
  },
  imageBox: {
    width: 180,
    height: 180,
    borderRadius: 20,
    backgroundColor: '#dfe6e9',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    overflow: 'hidden',
    shadowColor: '#636e72',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
  },
  image: {
    width: 160,
    height: 160,
    borderRadius: 16,
  },
  subtitle: {
    fontSize: 18,
    color: '#636e72',
    textAlign: 'center',
    marginTop: 8,
  },
});
