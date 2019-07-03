import { StyleSheet } from "react-native";
import { Colors, AppStyles } from "../../config";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from "react-native-responsive-screen";

const styles = StyleSheet.create({
  ...AppStyles,
  cardStyle: {
    elevation: 6,
    marginLeft: wp("2%"),
    marginRight: wp("2%")
  },
  iconStyle: {
    color: Colors.activeIconColor,
    fontSize: wp("8%")
  },
  listRightView: {
    flex: 1,
    flexDirection: "column",
    marginLeft: wp("4%")
  },
  rowView: {
    flex: 1,
    flexDirection: "row",
    marginLeft: wp("4%"),
    marginTop: hp("1%")
  },
  title: {
    color: Colors.text,
    fontSize: wp("4%")
  },
  subtitle: {
    color: Colors.textPrimary,
    fontSize: wp("3%"),
    marginTop: hp("1%")
  },
  iconTextView: {
    color: Colors.appBackGround,
    fontSize: wp("5%")
  },
  circleStyle: {
    borderRadius: wp("10%"),
    width: hp("6%"),
    height: wp("12%"),
    backgroundColor: Colors.headerTheme,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default styles;
