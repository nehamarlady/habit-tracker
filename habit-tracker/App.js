import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [habits, setHabits] = useState([
    { name: "Workout", streak: 3, completedToday: false },
    { name: "Read", streak: 5, completedToday: false },
  ]);

  function completeHabit(index) {
    const updatedHabits = [...habits];

    if (!updatedHabits[index].completedToday) {
      updatedHabits[index].completedToday = true;
      updatedHabits[index].streak += 1;
    }

    setHabits(updatedHabits);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Habit Tracker</Text>

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
  habitContainer: {
    marginBottom: 20,
  },
  habitText: {
    fontSize: 18,
    marginBottom: 10,
  },
});