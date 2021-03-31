// import
import React from 'react';
import {Text, StyleSheet, View, FlatList, Image} from 'react-native';
import {icons} from '../../constants';
const GOALS = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    goal: 'Goal 1',
    amount: 'KES 12,000',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    goal: 'Goal 2',
    amount: 'KES 12,000',
  },
];

const MyGoal = ({goal, amount}) => (
  <View style={styles.item}>
    <View style={styles.content}>
      <View style={styles.goalAmount}>
        <Text style={styles.goal}>{goal}</Text>
        <Text style={styles.amount}>{amount}</Text>
      </View>
      <View style={styles.finishBtn}>
        <Text style={{color: 'white'}}>Finish Goal</Text>
      </View>
    </View>
    <View style={styles.toggleBtn}>
      <Image source={icons.right} resizeMode="contain" style={styles.icon} />
    </View>
  </View>
);

const Goals = () => {
  const renderGoals = ({item}) => (
    <MyGoal goal={item.goal} amount={item.amount} />
  );

  return (
    <FlatList
      data={GOALS}
      renderItem={renderGoals}
      keyExtractor={item => item.id}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'rgb(240,240,240)',
    borderRadius: 15,
    marginVertical: 8,
    marginRight: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  content: {flexDirection: 'row', justifyContent: 'space-between'},
  goal: {
    fontSize: 18,
    fontWeight: '600',
  },
  goalAmount: {flexDirection: 'column', padding: 20},
  amount: {
    fontSize: 18,
    fontWeight: '300',
  },
  finishBtn: {
    backgroundColor: '#58D68D',
    marginTop: 'auto',
    marginBottom: 'auto',
    left: 35,
    padding: 10,
    borderRadius: 8,
  },
  toggleBtn: {
    borderLeftWidth: 1,
    borderColor: 'rgb(240,240,240)',
    padding: 15,
  },
  icon: {width: 25, height: 25, marginTop: 'auto', marginBottom: 'auto'},
});

export default Goals;
