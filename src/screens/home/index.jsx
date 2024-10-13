import {FlatList, StyleSheet, Text, View} from 'react-native';
import FloatActionButton from '../../components/uı/floatActionButon';
import {ADDTASKS} from '../../utils/routes';
import {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TaskCard from '../../components/home/taskCard';

const Home = ({navigation}) => {
  const [tasks, setTasks] = useState([]);
  const getTask = async () => {
    let myTask = [];
    try {
      const task = await AsyncStorage.getItem('task');
      myTask.push(JSON.parse(task));
      setTasks(myTask);
      console.log(task);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getTask();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        renderItem={({item}) => <TaskCard item={item} />}
      />
      <FloatActionButton onPress={() => navigation.navigate(ADDTASKS)} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {flex: 1},
});
