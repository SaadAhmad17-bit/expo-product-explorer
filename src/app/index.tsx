import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  const [messageVisible, setMessageVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>GitHub Actions Assignment</Text>

      <Text style={styles.info}>Name: Saad Ahmad</Text>
      <Text style={styles.info}>Roll No: 23i-3076</Text>

      <Pressable
        style={styles.button}
        onPress={() => setMessageVisible(!messageVisible)}
      >
        <Text style={styles.buttonText}>Test Interaction</Text>
      </Pressable>

      {messageVisible && (
        <Text style={styles.success}>Application is working!</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
  },

  info: {
    fontSize: 18,
    marginBottom: 10,
    color: '#37e2bd',
  },

  button: {
    backgroundColor: '#2563eb',
    paddingHorizontal: 24,
    paddingVertical: 14,
    borderRadius: 10,
    marginTop: 25,
  },

  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },

  success: {
    fontSize: 18,
    marginTop: 20,
    fontWeight: '600',
    color: 'green',
  },
});