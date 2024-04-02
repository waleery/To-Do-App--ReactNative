import { useState } from "react";
import { Button, Modal, StyleSheet, TextInput, View } from "react-native";

const GoalInput = ({ onAddGoal, showModal, endAddGoalHandler }) => {
    const [input, setInput] = useState("");

    const goalInputHandler = (enteredText) => {
        setInput(enteredText);
    };

    const addGoalHandler = () => {
        onAddGoal(input);
        setInput("");
    };
    return (
        <Modal visible={showModal} animationType="slide">
            <View style={styles.inputCointainer}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Your course goal!"
                    onChangeText={goalInputHandler}
                    value={input}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="Add Goal" onPress={addGoalHandler} />
                    </View>
                    <View style={styles.button}>
                        <Button title="Cancel" onPress={endAddGoalHandler} />
                    </View>
                </View>
            </View>
        </Modal>
    );
};
export default GoalInput;

const styles = StyleSheet.create({
    textInput: {
        borderWidth: 1,
        borderColor: "#cccccc",
        width: "100%",
        marginRight: 8,
        padding: 8,
    },
    inputCointainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: "#cccccc",
        gap:"16px",
        paddingHorizontal:16  
    },
    buttonContainer: {
        flexDirection: "row",
    },
    button: {
        width: "30%",
        marginHorizontal: 8,
    },
});
