import React, { Component } from "react";
import { StyleSheet, View, Alert, ActivityIndicator } from "react-native";
import styles from "./ScanStyleSheet";
import {
  Container,
  Right,
  Icon,
  Button,
  Content,
  List,
  Text,
  CardItem,
  Card
} from "native-base";
import { Navigation } from "react-native-navigation";
import { Colors } from "../../config";
import HeaderView from "../../components/HeaderView";

type Props = {};

const devices = [
  "BLE-spp",
  "MTB-ST05",
  "DEV-BLE-007",
  "SPPS-BLE-BT",
  "BT-BLE09",
  "BLE-spp",
  "MTB-ST05",
  "DEV-BLE-007",
  "SPPS-BLE-BT",
  "BT-BLE09"
];

class Scan extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      isScanning: false
    };
  }

  startScan = () => {
    this.setState({ isScanning: true });
    setTimeout(() => {
      this.setState({ isScanning: false });
    }, 5000);
  };

  showPopup = () => {
    Alert.alert(
      "Salzer",
      "Do you want to connect device ? ",
      [
        {
          text: "OK"
        },
        { text: "cancel" }
      ],
      { cancelable: false }
    );
  };

  render() {
    return (
      <Container>
        <HeaderView />
        <View>
          <List style={styles.listItem}>
            <Text style={styles.textStyle}>Available Devices</Text>
            {this.state.isScanning == true ? (
              <ActivityIndicator size="large" color={Colors.activeIconColor} />
            ) : (
              <Icon
                name="sync"
                style={styles.refreshIconStyle}
                onPress={this.startScan}
              />
            )}
          </List>
        </View>
        <Content>
          {devices.map((name, i) => {
            return (
              <Card style={styles.cardStyle} key={i}>
                <CardItem>
                  <Icon name="bluetooth" style={styles.iconStyle} />
                  <Text style={styles.deviceName}>{name}</Text>
                  <Right>
                    <Button style={styles.buttonStyle} onPress={this.showPopup}>
                      <Text uppercase={false} style={styles.buttonTextStyle}>
                        Connect
                      </Text>
                    </Button>
                  </Right>
                </CardItem>
              </Card>
            );
          })}
        </Content>
      </Container>
    );
  }
}

export default Scan;
