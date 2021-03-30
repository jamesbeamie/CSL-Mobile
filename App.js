import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Home} from './custom_files/screens';

const App = () => {
  return (
    <View style={styles.container}>
      <Home />
    </View>
  );
};
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
