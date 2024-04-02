import { useState } from "react";
import { Button, StyleSheet, TextInput, View, FlatList } from "react-native";
import GoalItem from "./components/GoalItem";

export default function App() {
    const [input, setInput] = useState("");
    const [courseGoals, setCourseGoals] = useState([]);

    const goalInputHandler = (enteredText) => {
        setInput(enteredText);
    };

    const addGoalHandler = () => {
        setCourseGoals((prev) => [...prev, { text: input, id: Date.now() }]);
    };

    return (
        <View style={styles.appContainer}>
            <View style={styles.inputCointainer}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Your course goal!"
                    onChangeText={goalInputHandler}
                />
                <Button title="Add Goal" onPress={addGoalHandler} />
            </View>
            <View style={styles.goalsContainer}>
                {/* Flat list render only item whuch are on the screen */}
                <FlatList
                    data={courseGoals}
                    renderItem={(itemData) => {
                        return <GoalItem itemData={itemData} />;
                    }}
                    //if data has 'key' key, there is no need to keyExtractior
                    keyExtractor={(item, index) => {
                        return item.id;
                    }}
                />
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
