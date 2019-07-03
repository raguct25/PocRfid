import React from "react";
import { Thumbnail, Header, Body, Right, Icon } from "native-base";
import styles from "./HeaderViewStyleSheet";

const logo = require("../../images/logo.jpg");

const HeaderView = props => {
  return (
    <Header style={styles.headerView}>
      <Body style={styles.bodyHeader}>
        <Thumbnail
          square
          resizeMode="contain"
          style={styles.logoStyle}
          source={logo}
        />
      </Body>
      <Right style={styles.RightIconAlignment}>
        <Icon name="bluetooth" style={styles.headerRightIcon} />
      </Right>
    </Header>
  );
};

export default HeaderView;
