import { Navigation } from "react-native-navigation";

export function registerScreens() {
  Navigation.registerComponent("Boot", () => require("./Boot").default);
  Navigation.registerComponent("App", () => require("../App").default);
  Navigation.registerComponent(
    "Home",
    () => require("../screens/Home").default
  );
  Navigation.registerComponent(
    "Rfid",
    () => require("../screens/Rfid").default
  );
  Navigation.registerComponent(
    "History",
    () => require("../screens/History").default
  );
  Navigation.registerComponent(
    "Setting",
    () => require("../screens/Setting").default
  );
  Navigation.registerComponent(
    "Scan",
    () => require("../screens/Scan").default
  );
}
