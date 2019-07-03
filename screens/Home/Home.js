import React, { Component } from "react";
import PropTypes from "prop-types";
import { BackHandler } from "react-native";
import { Container, View, Content } from "native-base";
import styles from "./HomeStyleSheet";
import NavImage from "../../components/NavImage";
import { Navigation } from "react-native-navigation";
import { Colors } from "../../config";

import {
  goToRfidListPage,
  goToHistoryPage,
  goToSettingPage
} from "../../boot/navigation";

const addImg = require("../../images/add.png");
const historyImg = require("../../images/history.png");
const settingImg = require("../../images/setting.png");
const exitImg = require("../../images/exit.png");

class Home extends Component {
  gotoPage = screenName => {
    Navigation.push(this.props.componentId, {
      component: {
        name: screenName
      }
    });
  };

  exit = () => {
    BackHandler.exitApp();
  };

  render() {
    console.log("Home props", this.props);
    return (
      <Container style={styles.backGround}>
        <Content style={styles.contentContainer}>
          <View style={styles.navIconRowOne}>
            <NavImage
              image={addImg}
              navName="Add RFID"
              onPress={this.gotoPage.bind(this, "Rfid")}
            />
            <NavImage
              image={historyImg}
              onPress={this.gotoPage.bind(this, "History")}
              navName="History"
            />
          </View>
          <View style={styles.navIconRowTwo}>
            <NavImage
              image={settingImg}
              onPress={this.gotoPage.bind(this, "Setting")}
              navName="Setting"
            />
            <NavImage image={exitImg} onPress={this.exit} navName="Exit" />
          </View>
        </Content>
      </Container>
    );
  }
}

Home.propTypes = {
  navigation: PropTypes.object
};

export default Home;
