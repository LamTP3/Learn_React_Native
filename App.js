import { Button, StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import HomeTabView from "./HomeTabView";

function HomeScreen({ navigation }) {
  return <HomeTabView />;
}
function DetailScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Detail Screen</Text>
    </View>
  );
}
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator> */}
      <Tab.Navigator
        screenOptions={({ route }) => ({
          // tabBarIcon dùng để đổi icon
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Home") {
              iconName = "home";
            } else if (route.name === "Detail") {
              iconName = "list";
            }
            return <Icon name={iconName} color={color} size={20} />;
          },
          // 2 dòng dưới dùng để đổi màu icon khi chuyển tab
          tabBarActiveTintColor: "blue",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Detail" component={DetailScreen} />
      </Tab.Navigator>
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
