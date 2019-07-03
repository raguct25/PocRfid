import { StyleSheet } from "react-native";
import { Colors } from "../../config";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.appBackGround
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  }
});

export default styles;
