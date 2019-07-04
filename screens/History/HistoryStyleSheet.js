import { StyleSheet } from "react-native";
import { Colors, AppStyles } from "../../config";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from "react-native-responsive-screen";

const styles = StyleSheet.create({
  ...AppStyles,

  pickerStyle: {
    width: wp("75%"),
    height: hp("5%"),
    color: Colors.textPrimary
  },
  listAlignment: {
    flex: 1,
    flexDirection: "row",
    marginLeft: wp("2%"),
    marginRight: wp("2%"),
    marginBottom: wp("2%")
  },
  listLeftView: {
    width: wp("30%"),
    height: hp("10%"),
    backgroundColor: Colors.listViewColor
  },
  listLeftViewBackground: {
    height: hp("16%"),
    marginLeft: wp("2%"),
    marginRight: wp("2%"),
    marginTop: hp("1%")
  },
  dateStyle: {
    alignSelf: "center",
    color: Colors.textSecondary,
    fontSize: wp("4%"),
    marginTop: hp("1.5%")
  },
  timeStyle: {
    alignSelf: "center",
    color: Colors.textSecondary,
    fontSize: wp("3%")
  },
  listRightView: {
    height: hp("10%"),
    flex: 1,
    flexDirection: "column",
    borderWidth: wp("0.5%"),
    borderColor: Colors.listViewColor
  },
  rowView: {
    // flex: 1,
    flexDirection: "row",
    marginLeft: wp("4%"),
    marginTop: hp("2%")
  },
  textStyle: {
    color: Colors.text,
    fontSize: wp("4%")
  },
  resultText: {
    color: Colors.textPrimary,
    fontSize: wp("3%")
  },
  lastRowView: {
    flex: 1,
    flexDirection: "row",
    marginLeft: wp("4%"),
    marginTop: hp("1%"),
    marginBottom: hp("1%")
  },
  downloadIconStyle: {
    fontSize: wp("8%"),
    color: Colors.activeIconColor,
    marginRight: wp("8%"),
    alignSelf: "center"
  },
  subHeader: {
    flexDirection: "row",
    justifyContent: "space-between"
  },

  closeIconStyle: {
    color: Colors.activeIconColor,
    fontSize: wp("10%")
  },
  navigateIconStyle: {
    color: Colors.activeIconColor,
    fontSize: wp("10%"),
    marginRight: wp("2%")
  },
  selectBoxStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: wp("8%"),
    marginBottom: hp("2%"),
    marginTop: hp("2%"),
    borderWidth: wp("0.5%"),
    borderRadius: wp("5%"),
    borderColor: Colors.selectBoxBorder
  },
  SelectTextStyle: {
    color: Colors.textPrimary,
    fontSize: wp("4%"),
    alignSelf: "center",
    marginLeft: wp("5%"),
    width: wp("50%")
  },
  modalStyle: {
    marginTop: hp("1%"),
    marginBottom: "6%"
  },
  modalHeaderAlignment: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: wp("5%"),
    marginRight: wp("5%"),
    marginBottom: hp("1%"),
    marginTop: hp("1%")
  },
  modalHeadingStyle: {
    color: Colors.textPrimary,
    fontSize: wp("5%"),
    alignSelf: "center",
    fontWeight: "bold",
    marginLeft: wp("5%")
  },
  modalListText: {
    fontSize: wp("4%"),
    color: Colors.textPrimary
  },
  rupeeIconStyle: {
    fontSize: wp("4%"),
    color: Colors.activeIconColor,
    marginRight: wp("1%")
  },
  rupeeIconSmall: {
    fontSize: wp("3%"),
    color: Colors.activeIconColor,
    marginRight: wp("1%"),
    marginLeft: wp("3%")
  },
  smallIconStyle: {
    fontSize: wp("4%"),
    color: Colors.activeIconColor,
    marginRight: wp("1%")
  },
  rowAlignment: {
    flex: 1,
    flexDirection: "row",
    marginLeft: wp("2.5%"),
    marginTop: hp("1%")
  },
  rowViewIconWithText: {
    // flex: 1,
    flexDirection: "row",
    marginLeft: wp("1%"),
    flexWrap: "wrap"
  },
  timePMStyle: {
    alignSelf: "center",
    color: Colors.textSecondary,
    fontSize: wp("2%"),
    marginLeft: wp("1%")
  },
  timeAlignment: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: hp("0.2%")
  },
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4"
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

export default styles;
