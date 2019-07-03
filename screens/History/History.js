import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Picker,
  Modal,
  TouchableHighlight,
  ScrollView
} from "react-native";
import styles from "./HistoryStyleSheet";
import { Colors } from "../../config";
import { Container, Content, Text, Item, List, ListItem } from "native-base";
import HeaderView from "../../components/HeaderView";
import Icon from "react-native-vector-icons/MaterialIcons";

const dataList = [1000000, 22, 333, 4, 50000, 1, 22, 30, 400, 55];
const cards = [
  "RAGHU",
  "SIVAS",
  "NIDIN",
  "SPPST",
  "BTBLE",
  "RAGUL",
  "MTBST",
  "DEVBL",
  "SPBLE",
  "BTBDR",
  "RAGHU",
  "SIVAS",
  "NIDIN",
  "SPPST",
  "BTBLE",
  "RAGUL",
  "MTBST",
  "DEVBL",
  "SPBLE",
  "BTBDR",
  "RAGHU",
  "SIVAS",
  "NIDIN",
  "SPPST",
  "Last-RFID"
];

type Props = {};
class History extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: undefined,
      selected1: "key0",
      results: {
        items: []
      },
      modalVisible: false
    };
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  onValueChange(value: string) {
    this.setState({
      selected1: value
    });
  }

  render() {
    return (
      <Container>
        <HeaderView />

        <List style={styles.subHeader}>
          <TouchableHighlight
            onPress={() => {
              this.setModalVisible(!this.state.modalVisible);
            }}
            underlayColor={Colors.appBackGround}
          >
            <List style={styles.selectBoxStyle}>
              <Text style={styles.SelectTextStyle}>Select RFID name</Text>
              <Icon
                name="keyboard-arrow-down"
                style={styles.navigateIconStyle}
              />
            </List>
          </TouchableHighlight>
          <Icon name="get-app" style={styles.downloadIconStyle} />
        </List>

        <Content>
          {dataList.map((name, i) => {
            return (
              <View style={styles.listAlignment} key={i}>
                <View style={styles.listLeftView}>
                  <TouchableOpacity
                    style={styles.listLeftViewBackground}
                    disabled={true}
                  >
                    <Text style={styles.dateStyle}>12-06-2019</Text>
                    <View style={styles.timeAlignment}>
                      <Text style={styles.timeStyle}>12:55:45</Text>
                      <Text style={styles.timePMStyle}>PM</Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <View style={styles.listRightView}>
                  <View style={styles.rowView}>
                    <Text style={styles.rupeeIconStyle}>₹</Text>
                    <Text style={styles.textStyle}>9,99,999</Text>
                  </View>
                  <View style={styles.rowViewIconWithText}>
                    <View style={styles.rowAlignment}>
                      <Icon name="ev-station" style={styles.smallIconStyle} />
                      <Text style={styles.resultText}>{name}</Text>
                    </View>
                    <View style={styles.rowAlignment}>
                      <Icon name="timer" style={styles.smallIconStyle} />
                      <Text style={styles.resultText}>24hrs 59min</Text>
                    </View>
                    <View style={styles.rowAlignment}>
                      <Text style={styles.rupeeIconSmall}>₹</Text>
                      <Text style={styles.resultText}>99999.90</Text>
                    </View>
                  </View>
                </View>
              </View>
            );
          })}
        </Content>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.setModalVisible(false);
          }}
        >
          <View style={styles.modalStyle}>
            <TouchableHighlight
              onPress={() => {
                this.setModalVisible(!this.state.modalVisible);
              }}
              underlayColor={Colors.appBackGround}
            >
              <List style={styles.modalHeaderAlignment}>
                <Text style={styles.modalHeadingStyle}>RFID List</Text>
                <Icon name="close" style={styles.closeIconStyle} />
              </List>
            </TouchableHighlight>

            <ScrollView>
              {cards.map((name, i) => {
                return (
                  <List key={i}>
                    <ListItem
                      onPress={() => {
                        this.setModalVisible(!this.state.modalVisible);
                      }}
                    >
                      <Text style={styles.modalListText}>{name}</Text>
                    </ListItem>
                  </List>
                );
              })}
            </ScrollView>
          </View>
          <View />
        </Modal>
      </Container>
    );
  }
}

export default History;

// <Picker
//   mode="dropdown"
//   selectedValue={this.state.selected1}
//   onValueChange={this.onValueChange.bind(this)}
//   style={styles.pickerStyle}
//   itemStyle={{ borderColor: "#119952", color: "red", fontSize: 20 }}
// >
//   <Item label="Select RFID name" value="key0" />
//   <Item label="RAGHU" value="key1" />
//   <Item label="NIDIN" value="key2" />
//   <Item label="RAGUL" value="key3" />
//   <Item label="EDISH" value="key4" />
//   <Item label="SIVAS" value="key4" />
// </Picker>
