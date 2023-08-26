import React = require("react");
import { View } from "react-native";
import { makeStyles, Text, Button, useThemeMode } from "@rneui/themed";
import { DarkIcon, LightIcon } from "./Icons";

export default function App() {
  const styles = useStyles();
  const { setMode, mode } = useThemeMode();

  const handleOnPress = () => {
    setMode(mode === "dark" ? "light" : "dark");
  };

  return (
    <View style={styles.container}>
      <View style={{ flex: 1, justifyContent: "space-between", width: "100%", marginTop: 20, padding: 10, flexBasis: 1, flexDirection: "row" }}>
        <Text h3>Things</Text>
        <Button onPress={handleOnPress} type="clear" style={styles.button}>{mode == "dark" ? <DarkIcon /> : <LightIcon />}</Button>
      </View>
    </View>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    padding: 0,
    width: 48,
    height: 48
  }
}));
