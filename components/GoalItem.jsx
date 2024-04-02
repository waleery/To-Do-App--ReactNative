import { Pressable, StyleSheet, Text, View } from "react-native";

const GoalItem = ({ itemData, deleteItem }) => {
    return (
        <View style={styles.goalItem}>
            {/* move pressavble down to get better ripple effect */}
            <Pressable
                android_ripple={{ color: "#dddddd" }}
                onPress={() => deleteItem(itemData.item.id)}
                style={({pressed}) =>pressed && styles.pressedItem}
            >
                <Text style={styles.goalText}>
                    {itemData.index + 1}. {itemData.item.text}
                </Text>
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
    },
    pressedItem:{
        opacity:0.25
    },
    goalText: {
        padding: 8,
    },
});
export default GoalItem;
