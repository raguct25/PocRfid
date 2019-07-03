import { StyleSheet } from "react-native";
import { Colors, AppStyles } from "../../config";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from "react-native-responsive-screen";

const styles = StyleSheet.create({
  ...AppStyles,
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: wp("10%"),
    marginRight: wp("10%"),
    marginBottom: hp("2%"),
    marginTop: hp("2%")
  },
  textStyle: {
    color: Colors.textPrimary,
    fontSize: wp("5%"),
    alignSelf: "center",
    fontWeight: "bold"
  },
  cardStyle: {
    elevation: 6,
    marginLeft: wp("2%"),
    marginRight: wp("2%")
  },
  iconStyle: {
    color: Colors.activeIconColor,
    fontSize: wp("6%")
  },
  deviceName: {
    color: Colors.text,
    fontSize: wp("4%"),
    flexWrap: "wrap",
    flex: 1
  },
  buttonStyle: {
    backgroundColor: Colors.buttonColor,
    borderRadius: wp("2.5%"),
    height: hp("4%")
  },
  buttonTextStyle: {
    fontSize: hp("1.5%")
  },
  refreshIconStyle: {
    color: Colors.activeIconColor,
    fontSize: wp("10%")
  }
});

export default styles;
