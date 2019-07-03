import { StyleSheet } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from "react-native-responsive-screen";
import { Colors } from "../../config";

const styles = StyleSheet.create({
  contentContainer: {
    marginTop: hp("2%"),
    marginHorizontal: wp("10%")
  },
  backGround: {
    flex: 1,
    backgroundColor: Colors.appBackGround
  },
  navIconRowOne: {
    marginTop: hp("8%"),
    flexDirection: "row",
    justifyContent: "space-between"
  },
  navIconRowTwo: {
    marginTop: hp("11%"),
    flexDirection: "row",
    justifyContent: "space-between"
  }
});

export default styles;
