import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  NativeModules,
  Button,
  NativeEventEmitter,
  TouchableOpacity,
  Image,
  Alert,
  ActivityIndicator
} from "react-native";
import BleManager from "react-native-ble-manager";
import { stringToBytes, bytesToString } from "convert-string";
import bytesCounter from "bytes-counter";
import { Buffer as bf } from "buffer";
import { Colors } from "../../config";
// import { Navigation } from "react-native-navigation";

const Buffer = {
  decode: inputData => bf.from(inputData).toString()
};

type Props = {};

const BleManagerModule = NativeModules.BleManager;
const bleManagerEmitter = new NativeEventEmitter(BleManagerModule);
// const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

const bletiming = {
  scanTiming: 10
};

const id = "9C:1D:58:90:CD:D9";
const serviceId = "FFE0";
const characterID = "FFE1";
const notificationID = "2902";

class Setting extends Component<Props> {
  static get options() {
    return {
      topBar: {
        background: {
          color: "#119952"
        },
        backButton: {
          visible: true,
          color: Colors.light
        },

        title: {
          text: "Salzer",
          alignment: "center",
          color: Colors.light,
          fontSize: 28,
          fontFamily: "Helvetica"
        }
      }
    };
  }
  constructor() {
    super();
    this.state = {
      scannedDevices: new Map(),
      connectedPeripheralId: null,
      isScanning: false,
      isRefresh: false
    };
    // Navigation.events().bindComponent(this);
  }

  componentDidMount() {
    // BleManager.start();

    BleManager.start({ showAlert: false }).then(() => {
      console.log("Module initialized...");
    });

    this.handlerResponse = bleManagerEmitter.addListener(
      "BleManagerDidUpdateValueForCharacteristic",
      this.handleResponse
    );

    this.handlerDiscover = bleManagerEmitter.addListener(
      "BleManagerDiscoverPeripheral",
      this.handleDiscoverPeripheral
    );

    this.handlerStop = bleManagerEmitter.addListener(
      "BleManagerStopScan",
      this.handleStopScan
    );

    this.startScan();
  }

  componentWillUnmount() {
    this.handlerDiscover.remove();
    this.handlerStop.remove();
    this.handlerResponse.remove();
  }

  startScan = () => {
    console.log("scan called");
    if (!this.state.isScanning) {
      console.log("scannedDevices", this.state.scannedDevices);
      this.setState({ scannedDevices: new Map() });
      BleManager.scan([], bletiming.scanTiming, true).then(() => {
        this.setState({ isScanning: true });
      });
    }
  };

  handleDiscoverPeripheral = devices => {
    console.log("handleDiscoverPeripheral called");
    let scannedDevices = this.state.scannedDevices;
    if (!scannedDevices.has(devices.id)) {
      scannedDevices.set(devices.id, devices);
      this.setState({ scannedDevices });
    }
  };

  handleStopScan = () => {
    console.log("stop called");
    this.setState({
      isScanning: false,
      isRefresh: true
    });
  };

  handleResponse = data => {
    console.log("response called");
    const result = bytesToString(data.value);
    console.log("Data from the listener: ", result);
  };

  scanningRefresh = () => {
    this.setState({ isRefresh: false, isScanning: false }, () => {
      this.startScan();
    });
  };

  connectDevice = () => {
    const id = "9C:1D:58:90:CD:D9";
    BleManager.connect(id)
      .then(() => {
        console.log("Connected");
        BleManager.retrieveServices(id).then(peripheralInfo => {
          // Success code
          console.log("Peripheral info:", peripheralInfo);
          BleManager.startNotification("9C:1D:58:90:CD:D9", "FFE0", "FFE1")
            .then(() => {
              // Success code
              console.log("Notification started");
            })
            .catch(error => {
              // Failure code
              console.log(error);
            });
        });
      })
      .catch(error => {
        console.log("error", error);
      });
  };

  fetchRfid = () => {
    // const cmdCommand = "$RCD9999#";
    const cmdCommand = "$SYC9999#";
    const data = stringToBytes(cmdCommand);

    BleManager.write(id, serviceId, characterID, data)
      .then(() => {
        const result = bytesToString(data);
        console.log("Write:.. " + result);
      })
      .catch(error => {
        console.log(error);
      });
  };

  getHistory = () => {
    const cmdCommand = "$GHI9999#";
    const data = stringToBytes(cmdCommand);
    BleManager.write(id, serviceId, characterID, data)
      .then(() => {
        const result = bytesToString(data);
        console.log("Write:.. " + result);
      })
      .catch(error => {
        console.log(error);
      });
  };

  clearHistory = () => {
    const cmdCommand = "$CHI9999#";
    const data = stringToBytes(cmdCommand);
    BleManager.write(id, serviceId, characterID, data)
      .then(() => {
        const result = bytesToString(data);
        console.log("Write:.. " + result);
      })
      .catch(error => {
        console.log(error);
      });
  };

  addRfid = () => {
    const cmdCommand = "$ACD9999NIDIN#";
    const data = stringToBytes(cmdCommand);

    BleManager.write(id, serviceId, characterID, data)
      .then(() => {
        const result = bytesToString(data);
        console.log("Write:.. " + result);
      })
      .catch(error => {
        console.log(error);
      });
  };

  deleteRfid = () => {
    // const cmdCommand = "$DCD9999#";
    const cmdCommand = "$DCD9999#";

    const data = stringToBytes(cmdCommand);

    BleManager.write(id, serviceId, characterID, data)
      .then(() => {
        const result = bytesToString(data);
        console.log("Write:.. " + result);
      })
      .catch(error => {
        console.log(error);
      });
  };

  disconnectRfid = () => {
    const id = "9C:1D:58:90:CD:D9";
    BleManager.disconnect(id)
      .then(() => {
        console.log("Disconnected");
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    console.log("setting props", this.props);
    const listPeripherals = Array.from(this.state.scannedDevices.values());
    // const dataSource = ds.cloneWithRows(listPeripherals);
    console.log("listPeripherals", listPeripherals);
    // console.log("dataSource", dataSource);
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.buttonContainer}>
            <Button
              onPress={this.scanningRefresh}
              title="Refresh"
              color="#841584"
              accessibilityLabel="Learn more about this purple button"
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              onPress={this.connectDevice}
              title="connect"
              color="#841584"
              accessibilityLabel="Learn more about this purple button"
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              onPress={this.disconnectRfid}
              title="Disconnect"
              color="#841584"
              accessibilityLabel="Learn more about this purple button"
            />
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.buttonContainer}>
            <Button
              onPress={this.addRfid}
              title="Add"
              color="#841584"
              accessibilityLabel="Learn more about this purple button"
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              onPress={this.deleteRfid}
              title="Delete"
              color="#841584"
              accessibilityLabel="Learn more about this purple button"
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              onPress={this.fetchRfid}
              title="Fetch"
              color="#841584"
              accessibilityLabel="Learn more about this purple button"
            />
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.buttonContainer}>
            <Button
              onPress={this.getHistory}
              title="History"
              color="#841584"
              accessibilityLabel="Learn more about this purple button"
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              onPress={this.clearHistory}
              title="Clear History"
              color="#841584"
              accessibilityLabel="Learn more about this purple button"
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF",
    margin: 5
  },
  buttonContainer: {
    margin: 10
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 5
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});

export default Setting;
