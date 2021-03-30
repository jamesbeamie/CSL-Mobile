import React, {useState, useEffect} from 'react';
import {Text, StyleSheet, View, SafeAreaView} from 'react-native';
import MainBtn from '../../common/buttons/MainBtn';
import SnackBar from '../../common/snackbar/SnackBar';
import Goals from '../Container/Goals';

const Home = () => {
  const [visible, setVisible] = useState(true);
  const [text, setText] = useState('');

  useEffect(() => {
    setText(
      'This is an app notification snackbar to show the user when they perform an action.Clicking it should change the text.',
    );
  }, []);

  const onToggleSnackBar = () => setVisible(true);

  return (
    <SafeAreaView style={styles.container}>
      {visible && (
        <SnackBar
          text={text}
          onPress={() => setText('New Text')}
          onClose={() => {
            setText(
              'This is an app notification snackbar to show the user when they perform an action.Clicking it should change the text.',
            ),
              setVisible(false);
          }}
        />
      )}
      <View style={styles.dashboard}>
        <Text style={styles.userName}>Afternoon, Jo</Text>
        <Text style={styles.msg}>Here's the latest</Text>
        <Text style={styles.balance}>KES 42,000</Text>
        <Text style={styles.funds}>Total Funds</Text>
      </View>
      <View style={styles.goalsContainer}>
        <Text style={styles.goalsTitle}>Your Goals</Text>
        <Goals />
        <MainBtn title={'Show Snackbar'} onPress={onToggleSnackBar} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 'auto',
    backgroundColor: 'rgba(35, 57, 93,0.9)',
  },
  goalsContainer: {
    height: 'auto',
    backgroundColor: 'white',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 40,
  },
  goalsTitle: {paddingTop: 5, color: 'black', fontSize: 20},
  userName: {paddingTop: 5, color: 'white', fontSize: 20},
  msg: {paddingVertical: 5, color: 'white'},
  balance: {paddingTop: 10, color: '#58D68D', fontSize: 30},
  funds: {paddingVertical: 3, color: 'white'},
  dashboard: {
    height: 'auto',
    paddingHorizontal: 40,
    paddingVertical: 40,
  },
});

export default Home;
