import { StyleSheet, Text, View } from "react-native";

const GoalItem = ({itemData}) => {
    return (
        <View style={styles.goalItem}>
            <Text>
                {itemData.index + 1}. {itemData.item.text}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        padding: 8,
        //this doesn't work on ios, we need to wrap text in view component
        borderRadius: 6,
        backgroundColor: "#eeeeee",
    },
})
export default GoalItem;
