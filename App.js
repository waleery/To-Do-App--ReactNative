import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
    return (
        <View style={styles.appContainer}>
            <View style={styles.inputCointainer}>
                <TextInput style={styles.textInput} placeholder="Your course goal!" />
                <Button title="Add Goal" />
            </View>
            <View>
              <Text>List of goals...</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
  appContainer: {
    padding:50,
  },
  inputCointainer:{
    flexDirection:"row",
    justifyContent: "space-between"
  },
  textInput:{
    borderWidth:1,
    borderColor: "#cccccc",
    width:"80%",
    marginRight:8,
    padding:8
  }
});
