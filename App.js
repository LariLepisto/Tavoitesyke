import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function App() {
 
  const [age, setAge] = useState('');
  const [lowerLimit, setLowerLimit] = useState(null);
  const [upperLimit, setUpperLimit] = useState(null);

  
  const calculateHeartRateLimits = () => {
    const ageNum = parseInt(age);
    if (!isNaN(ageNum) && ageNum > 0) {
      const lower = (220 - ageNum) * 0.65;
      const upper = (220 - ageNum) * 0.85;
      setLowerLimit(lower.toFixed(2)); 
      setUpperLimit(upper.toFixed(2));
    } else {
      alert('Please enter a valid age');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Heart Rate Limits Calculator</Text>
      
      {/* Syöttökenttä iälle */}
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Enter your age"
        value={age}
        onChangeText={setAge}
      />

      {/* Laskentapainike */}
      <Button title="Calculate" onPress={calculateHeartRateLimits} />

      {/* Näytetään tulokset, jos laskenta on tehty */}
      {lowerLimit && upperLimit && (
        <View style={styles.results}>
          <Text>Lower Limit: {lowerLimit} BPM</Text>
          <Text>Upper Limit: {upperLimit} BPM</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  results: {
    marginTop: 20,
  },
});