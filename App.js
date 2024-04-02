import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
    return (
        <View style={styles.container}>
            <Text style={a}>Another piece of text</Text>
            <Text style={styles.dummyText}>Hello word!</Text>
            <Button title="Tap me!" />
        </View>
    );
}

const a = {
  borderColor:"green",
  borderWidth:2
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    dummyText: {
        marginTop: 16,
        padding: 16,
        borderColor: "red",
        borderWidth: "2px",
    },
});
