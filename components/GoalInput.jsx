import { useState } from "react";
import { Button, StyleSheet, TextInput } from "react-native";

const GoalInput = ({ onAddGoal}) => {
    const [input, setInput] = useState("");
    
    const goalInputHandler = (enteredText) => {
        setInput(enteredText);
    };

    const addGoalHandler = () => {
        onAddGoal(input);
    };
    return (
        <>
            <TextInput
                style={styles.textInput}
                placeholder="Your course goal!"
                onChangeText={goalInputHandler}
            />
            <Button title="Add Goal" onPress={addGoalHandler} />
        </>
    );
};
export default GoalInput;

const styles = StyleSheet.create({
    textInput: {
        borderWidth: 1,
        borderColor: "#cccccc",
        width: "70%",
        marginRight: 8,
        padding: 8,
    },
});
