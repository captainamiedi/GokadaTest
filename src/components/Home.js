import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Home screen</Text>
      <View style={{alignItems: 'center', paddingTop: 10}}>
      <Button title="Next" onPress={() => navigation.navigate('Details')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  paragraph: {
    textAlign: 'center',
  },
});
