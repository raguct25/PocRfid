import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Dimensions } from "react-native";
import styles from "./RfidStyleSheet";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Colors } from "../../config";
import { Container, Body, Content, Text, Card, CardItem } from "native-base";
import FAB from "react-native-fab";
import HeaderView from "../../components/HeaderView";

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
  "BTBDR"
];

type Props = {};
class Rfid extends Component<Props> {
  constructor(props) {
    super(props);
  }

  // enum('flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly')
  // <Text>3456RF78YU67</Text>

  render() {
    return (
      <Container>
        <HeaderView />
        <Content>
          {cards.map((name, i) => {
            return (
              <Card style={styles.cardStyle} key={i}>
                <CardItem>
                  <TouchableOpacity style={styles.circleStyle}>
                    <Text style={styles.iconTextView}>{name.substr(0, 1)}</Text>
                  </TouchableOpacity>
                  <View style={styles.listRightView}>
                    <Text style={styles.title}>{name}</Text>
                    <Text style={styles.subtitle}>1234SC34Df23</Text>
                  </View>
                </CardItem>
              </Card>
            );
          })}
        </Content>
        <FAB
          buttonColor={Colors.floatingButton}
          iconTextColor={Colors.headerIconColor}
          visible={true}
          iconTextComponent={<Icon name="add" />}
        />
      </Container>
    );
  }
}

export default Rfid;
