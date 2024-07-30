import { Button, StyleSheet, Text, View } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="Open Detail"
        onPress={() => {
          navigation.navigate("Detail");
        }}
      />
    </View>
  );
}
function DetailScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Detail Screen</Text>
    </View>
  );
}
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingTop: 100,
    flex: 1,
  },
  inputContainer: {
    flexDirection: "row",
    marginBottom: 50,
    borderBottomWidth: 1,
    paddingBottom: 50,
    borderBottomColor: "grey",
    flex: 1,
    alignItems: "center",
  },
  textInput: {
    borderWidth: 2,
    borderColor: "blue",
    padding: 8,
    marginRight: 8,
    width: "70%",
  },
  todoList: {
    flex: 4,
  },
});
