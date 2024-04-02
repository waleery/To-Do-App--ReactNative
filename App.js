import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
    Button,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
    FlatList,
} from "react-native";

export default function App() {
    const [input, setInput] = useState("");
    const [courseGoals, setCourseGoals] = useState([]);

    const goalInputHandler = (enteredText) => {
        setInput(enteredText);
    };

    const addGoalHandler = () => {
        setCourseGoals((prev) => [...prev, {text: input, key: Date.now()}]);
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
                        return (
                            <View style={styles.goalItem}>
                                <Text>{itemData.index + 1}. {itemData.item.text}</Text>
                            </View>
                        );
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
    goalItem: {
        margin: 8,
        padding: 8,
        //this doesn't work on ios, we need to wrap text in view component
        borderRadius: 6,
        backgroundColor: "#eeeeee",
    },
});
