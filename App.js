import { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
    const [courseGoals, setCourseGoals] = useState([]);

    

    const addGoalHandler = (enteredGoalText) => {
        setCourseGoals((prev) => [...prev, { text: enteredGoalText, id: Date.now() }]);
    };

    return (
        <View style={styles.appContainer}>
            <View style={styles.inputCointainer}>
                <GoalInput
                    onAddGoal={addGoalHandler}
                />
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
    goalsContainer: {
        flex: 9,
    },
});
