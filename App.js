import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="your todo" style={styles.textInput} />
        <Button title="Add todo" />
      </View>
      <View>
        <Text>The to do list</Text>
      </View>

      {/* <View style={{ padding: 50, flexDirection: "row" }}>
        <View
          style={{
            width: 100,
            height: 100,
            alignItems: "center", // sắp xếp theo theo trục dọc
            justifyContent: "center", // xắp sếp theo trục chính
            backgroundColor: "red",
          }}
        >
          <Text>1</Text>
        </View>
        <View
          style={{
            width: 100,
            height: 100,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "blue",
          }}
        >
          <Text>2</Text>
        </View>
        <View
          style={{
            width: 100,
            height: 100,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "yellow",
          }}
        >
          <Text>3</Text>
        </View>
      </View> */}
      <View
        style={{
          padding: 50,
          height: 300,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "stretch",
        }}
      >
        <View
          style={{
            alignItems: "center", // sắp xếp theo theo trục dọc
            justifyContent: "center", // xắp sếp theo trục chính
            backgroundColor: "red",
            flex: 1,
          }}
        >
          <Text>1</Text>
        </View>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "blue",
            flex: 2,
          }}
        >
          <Text>2</Text>
        </View>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "yellow",
            flex: 1,
          }}
        >
          <Text>3</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingTop: 100,
  },
  inputContainer: {
    flexDirection: "row",
  },
  textInput: {
    borderWidth: 2,
    borderColor: "blue",
    padding: 8,
    marginRight: 8,
    width: "70%",
  },
});
