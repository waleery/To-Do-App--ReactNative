import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
    const [courseGoals, setCourseGoals] = useState([]);

    const [showModal, setShowModal] = useState(false)

    const addGoalHandler = (enteredGoalText) => {
        setCourseGoals((prev) => [
            ...prev,
            { text: enteredGoalText, id: Date.now() },
        ]);
        endAddGoalHandler()
    };
    const deleteGoalHandler = (id) => {
        setCourseGoals((prev) => prev.filter((item) => item.id !== id));
    };

    const startAddGoalHandler = () => {
        setShowModal(true)
    }
    const endAddGoalHandler = () => {
        setShowModal(false)
    }

    return (
        <View style={styles.appContainer}>
            <Button title="Add new goal" onPress={startAddGoalHandler}/>
            <GoalInput onAddGoal={addGoalHandler} showModal={showModal} endAddGoalHandler={endAddGoalHandler}/>
            <View style={styles.goalsContainer}>
                {/* Flat list render only item whuch are on the screen */}
                <FlatList
                    data={courseGoals}
                    renderItem={(itemData) => {
                        return (
                            <GoalItem
                                itemData={itemData}
                                deleteItem={deleteGoalHandler}
                            />
                        );
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
    goalsContainer: {
        flex: 9,
    },
});
