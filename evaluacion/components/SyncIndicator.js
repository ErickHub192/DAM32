import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

const SyncIndicator = ({ isOnline, isSyncing, pendingCount }) => {
  const getStatusInfo = () => {
    if (isSyncing) {
      return {
        text: 'Sincronizando...',
        color: '#007AFF',
        showSpinner: true,
      };
    }
    
    if (!isOnline) {
      return {
        text: 'Sin conexión',
        color: '#FF3B30',
        showSpinner: false,
      };
    }
    
    if (pendingCount > 0) {
      return {
        text: `${pendingCount} cambio${pendingCount > 1 ? 's' : ''} pendiente${pendingCount > 1 ? 's' : ''}`,
        color: '#FF9500',
        showSpinner: false,
      };
    }
    
    return {
      text: 'Todo sincronizado',
      color: '#34C759',
      showSpinner: false,
    };
  };

  const status = getStatusInfo();

  return (
    <View style={[styles.container, { backgroundColor: status.color + '15' }]}>
      <View style={styles.content}>
        {status.showSpinner ? (
          <ActivityIndicator size="small" color={status.color} />
        ) : (
          <Text style={styles.icon}>{status.icon}</Text>
        )}
        <Text style={[styles.text, { color: status.color }]}>
          {status.text}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginHorizontal: 16,
    marginVertical: 8,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    fontSize: 16,
    marginRight: 8,
  },
  text: {
    fontSize: 14,
    fontWeight: '600',
  },
});

export default SyncIndicator;