import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import axios from 'axios';

export default function AxiosPage() {
  const [data, setData] = useState('');

  useEffect(() => {
    axios.get('https://student-api.acpt.lk/api/companies')
      .then(response => {
        console.log(response.data);
        setData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <View style={styles.container}>
      <Text>AxiosPage</Text>

      <Button
        title="Show Data"
        onPress={() => console.log(data)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});
