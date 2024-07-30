import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello React Native</Text>
      <Text style={styles.myText}>
        Open up App.js to start working on your app!
      </Text>
      <Text style={styles2.myText}>Test Text</Text>
      <StatusBar style="auto" />
      <Button title="Press me" />
    </View>
  );
}
const styles2 = StyleSheet.create({
  myText: {
    margin: 10,
    borderWidth: 2,
    borderColor: "red",
    padding: 10,
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  myText: {
    margin: 10,
    borderWidth: 2,
    borderColor: "red",
    padding: 10,
  },
});
