import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { Colors } from "../../config";

const styles = StyleSheet.create({
  navImg: {
    height: hp("12%"),
    width: wp("24%")
  },
  navText: {
    marginTop: wp("6%"),
    color: Colors.gray,
    fontSize: wp("5%"),
    textAlign: "center",
    fontWeight: "bold"
  }
});

export default styles;
