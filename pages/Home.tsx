import { createTheme, ThemeProvider, Text, makeStyles } from "@rneui/themed";
import Header from "../components/Header";
import List from "../components/ListItem";
import React = require("react");

const theme = createTheme({
  lightColors: {},
  darkColors: {},
});


export default function HomeScreen() {
  const styles = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <List></List>
      <Text style={styles.footer}>Work on God, you and God!</Text>
    </ThemeProvider>
  );
}

const useStyles = makeStyles((theme) => ({
  footer: {
    textAlign: "center",
    opacity: 0.7,
    fontSize: 10,
    backgroundColor: "#01ad02",
    fontWeight: "800"
  }
}));
