import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import Colors from "./Colors";

const AppStyles = {
  headerView: {
    height: hp("8%"),
    backgroundColor: Colors.appBackGround
  },
  bodyHeader: {
    marginLeft: wp("28%"),
    flex: 1,
    alignContent: "center"
  },
  logoStyle: {
    height: hp("20px"),
    width: wp("46px")
  },
  headerRightIcon: {
    fontSize: wp("8%"),
    color: Colors.activeIconColor
  },
  RightIconAlignment: {
    marginRight: wp("2%")
  }
};

export default AppStyles;
