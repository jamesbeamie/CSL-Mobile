import React, {useState, useEffect} from 'react';
import {Text, StyleSheet, View, SafeAreaView, Animated} from 'react-native';
import MainBtn from '../../common/buttons/MainBtn';
import SnackBar from '../../common/snackbar/SnackBar';
import Goals from '../Container/Goals';

const Home = () => {
  const [visible, setVisible] = useState(false);
  const [text, setText] = useState('');
  const [bounceValue, setBounceValue] = useState();

  useEffect(() => {
    setText(
      'This is an app notification snackbar to show the user when they perform an action.Clicking it should change the text.',
    );
    setBounceValue(new Animated.Value(-200));
  }, []);

  let toValue = 110;

  if (!visible) {
    toValue = 0;
  }

  const onToggleSnackBar = () => {
    setVisible(true);
    Animated.spring(bounceValue, {
      toValue: toValue,
      velocity: 3,
      tension: 2,
      friction: 8,
      useNativeDriver: true,
    }).start();
    setTimeout(closeSnackBar, 9000);
  };

  const closeSnackBar = () => (
    setBounceValue(new Animated.Value(-200)),
    setText(
      'This is an app notification snackbar to show the user when they perform an action.Clicking it should change the text.',
    ),
    setVisible(false)
  );

  const renderTopInfo = () => (
    <View style={styles.dashboard}>
      <Text style={styles.userName}>Afternoon, Jo</Text>
      <Text style={styles.msg}>Here's the latest</Text>
      <Text style={styles.balance}>KES 42,000</Text>
      <Text style={styles.funds}>Total Funds</Text>
    </View>
  );

  const renderGoals = () => (
    <View style={styles.goalsContainer}>
      <Text style={styles.goalsTitle}>Your Goals</Text>
      <Goals />
      <MainBtn title={'Show Snackbar'} onPress={onToggleSnackBar} />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {visible && (
        <SnackBar
          text={text}
          bounceValue={bounceValue}
          onPress={() => setText('New Text')}
          onClose={closeSnackBar}
        />
      )}
      {renderTopInfo()}
      {renderGoals()}
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
    padding: 10,
  },
  goalsTitle: {
    paddingTop: 5,
    color: 'black',
    fontSize: 20,
    fontFamily: 'RobotoCondensed-Light',
  },
  userName: {
    paddingTop: 5,
    color: 'white',
    fontSize: 20,
    fontFamily: 'RobotoCondensed-Light',
  },
  msg: {
    paddingVertical: 5,
    color: 'white',
    fontFamily: 'RobotoCondensed-Light',
  },
  balance: {
    paddingTop: 10,
    color: '#58D68D',
    fontSize: 30,
    fontFamily: 'RobotoCondensed-Light',
  },
  funds: {
    paddingVertical: 3,
    color: 'white',
    fontFamily: 'RobotoCondensed-Light',
  },
  dashboard: {
    height: 'auto',
    padding: 10,
  },
});

export default Home;
