import * as React from "react";
import { Dimensions } from "react-native";
import { View, StyleSheet, Text } from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";

const FirstRoute = () => (
  <View style={[styles.scence, { backgroundColor: "#FF9999" }]}>
    <Text>First Route</Text>
  </View>
);
const SecondRoute = () => (
  <View style={[styles.scence, { backgroundColor: "#FF66FF" }]}>
    <Text>Second Route</Text>
  </View>
);

const initialLayout = { width: Dimensions.get(`window`).width };

const HomeTabView = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "First" },
    { key: "second", title: "Second" },
  ]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });
  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
    />
  );
};
export default HomeTabView;
const styles = StyleSheet.create({
  scence: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
