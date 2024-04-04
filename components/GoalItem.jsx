import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const GoalItem = ({ itemData, deleteItem }) => {
    const [pressed, setPressed] = useState(false);

    return (
        <View style={[styles.goalItem, pressed && styles.pressedItem]}>
            <Text style={styles.goalText}>
                {itemData.index + 1}. {itemData.item.text}
            </Text>

            <Pressable
                android_ripple={{ color: "#dddddd" }}
                onPress={() => {
                    deleteItem(itemData.item.id);
                }}
                onPressIn={() => setPressed(true)} // Ustawia stan na true podczas naciśnięcia
                onPressOut={() => setPressed(false)} // Ustawia stan na false po zwolnieniu przycisku
            >
                <Icon name="trash-o" size={30} color="#aaaaaa" />
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        //this doesn't work on ios, we need to wrap text in view component
        borderRadius: 6,
        backgroundColor: "#eeeeee",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 8,
    },
    pressedItem: {
        backgroundColor: "#FF7F7F",
        opacity: 0.25,
    },
    goalText: {
        fontSize: 16,
    },
});
export default GoalItem;
