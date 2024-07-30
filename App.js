import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react";
export default function App() {
  const [text, setText] = useState("");
  const [todo, setTodo] = useState([]);
  function textInputChanged(textChanged) {
    setText(textChanged);
  }
  function addTodo() {
    // setTodo([...todo, text]);
    setTodo((currentTodo) => [...currentTodo, text]);
    setText("");
  }
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={textInputChanged}
          placeholder="your todo"
          style={styles.textInput}
        />
        <Button onPress={addTodo} title="Add todo" />
      </View>
      <View style={styles.todoList}>
        {todo.map((item, index) => (
          <Text key={index}>{item}</Text>
        ))}
      </View>
    </View>
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
