import React, { Component } from "react";
import { View, Text } from "react-native";
import styles from "./BootStyleSheet";
import { gotoHomePage } from "./navigation";

class Boot extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {
    gotoHomePage();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.loadingText}>Loading</Text>
      </View>
    );
  }
}

export default Boot;
