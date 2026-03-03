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
    }

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
          <Text style={styles.habitText}>
            {habit.name} | 🔥 {habit.streak}
          </Text>

          <Button
            title="Complete"
            onPress={() => completeHabit(index)}
          />
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
    marginBottom: 20,
  },
  habitText: {
    fontSize: 18,
    marginBottom: 10,
  },
});