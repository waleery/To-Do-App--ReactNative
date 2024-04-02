import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
    const [input, setInput] = useState("")
    const [courseGoals, setCourseGoals] = useState([])

    const goalInputHandler = (enteredText) => {
      setInput(enteredText)
    };

    const addGoalHandler = () => {
      setCourseGoals(prev => [...prev, input])
    };

    return (
        <View style={styles.appContainer}>
            <View style={styles.inputCointainer}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Your course goal!"
                    onChangeText={goalInputHandler}
                />
                <Button title="Add Goal" onPress={addGoalHandler}/>
            </View>
            <View style={styles.goalsContainer}>
                {courseGoals.map((goal) => 
                  <Text>{goal}</Text>
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        paddingTop: 50,
        paddingHorizontal: 16,
        flex: 1,
    },
    inputCointainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: "#cccccc",
    },
    textInput: {
        borderWidth: 1,
        borderColor: "#cccccc",
        width: "70%",
        marginRight: 8,
        padding: 8,
    },
    goalsContainer: {
        flex: 9,
    },
});
