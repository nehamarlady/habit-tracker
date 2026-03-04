import { useState } from 'react';
import { StyleSheet, Text, View, Button,TextInput } from 'react-native';

export default function App() {
  const [habits, setHabits] = useState([
    { name: "Workout", streak: 3, completedToday: false },
    { name: "Read", streak: 5, completedToday: false },
  ]);

  const [newHabit, setNewHabit] = useState("");
  function completeHabit(index) {
    const updatedHabits = [...habits];

    if (!updatedHabits[index].completedToday) {
      updatedHabits[index].completedToday = true;
      updatedHabits[index].streak += 1;
      setHabits(updatedHabits);
    }
  }
  function resetHabit(index){
    const updatedHabits=[...habits];
    updatedHabits[index].completedToday=false;
    updatedHabits[index].streak=0;
    setHabits(updatedHabits);
  }
  function addHabit(){
    if(newHabit.trim()==="") return;
    const habitToAdd={
      name: newHabit,
      streak:0,
      completedToday: false,
    };
    setHabits([...habits,habitToAdd]);
    setNewHabit(""); //clear input
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Habit Tracker</Text>

      <TextInput
      style ={styles.input}
      placeholder="Enter new Habit"
      value={newHabit}
      onChangeText={setNewHabit}
      />

      <Button title= "Add Habit" onPress={addHabit}/>

      {habits.map((habit, index) => (
        <View key={index} style={styles.habitContainer}>
          <Text style={[styles.habitText,
          habit.completedToday && styles.completedHabit]}>
            {habit.name} | 🔥 {habit.streak}
          </Text>

          <Button
            title={habit.completedToday ? "Completed" : "Complete"}
            onPress={() => completeHabit(index)}
            disabled={habit.completedToday}
          />
          <View style={{marginTop:5}}>
            <Button
            title="Reset"
            onPress={()=> resetHabit(index)}
            color="red"
            />
        </View>
    </View>
      ))}
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  input:{
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  habitContainer: {
    marginTop: 20,
    padding:10,
    borderWidth:1,
    borderColor: "#eee",
    borderRadius:8,
  },
  habitText: {
    fontSize: 18,
    marginBottom: 10,
  },
  completedHabit:{
    color:"green",
    fontWeight:"bold",
  },
});