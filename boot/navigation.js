import { Navigation } from "react-native-navigation";
import { Colors } from "../config";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

export const gotoHomePage = () =>
  Navigation.setRoot({
    root: {
      bottomTabs: {
        children: [
          {
            component: {
              name: "History",
              options: {
                bottomTab: {
                  text: "RFID",
                  icon: require("../images/card.png"),
                  iconColor: Colors.bottomBarIconColor,
                  selectedIconColor: Colors.activeIconColor,
                  fontSize: wp("3%"),
                  selectedFontSize: wp("4%"),
                  textColor: Colors.textPrimary,
                  selectedTextColor: Colors.activeTextColor
                }
              }
            }
          },
          {
            component: {
              name: "History",
              options: {
                bottomTab: {
                  text: "History",
                  icon: require("../images/history.png"),
                  iconColor: Colors.bottomBarIconColor,
                  selectedIconColor: Colors.activeIconColor,
                  fontSize: wp("3%"),
                  selectedFontSize: wp("4%"),
                  textColor: Colors.textPrimary,
                  selectedTextColor: Colors.activeTextColor
                }
              }
            }
          },
          {
            component: {
              name: "Scan",
              options: {
                bottomTab: {
                  text: "Ble Devices",
                  icon: require("../images/bluetooth.png"),
                  iconColor: Colors.bottomBarIconColor,
                  selectedIconColor: Colors.activeIconColor,
                  fontSize: wp("3%"),
                  selectedFontSize: wp("4%"),
                  textColor: Colors.textPrimary,
                  selectedTextColor: Colors.activeTextColor
                }
              }
            }
          }
        ]
      }
    }
  });
