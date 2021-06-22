import React from 'react'
import {StyleSheet, TouchableOpacity, Text} from "react-native";
import {Colors} from "../../utils/colors"

function ButtonComponent({text = "0", isOperator = false, onPress}) {
  return (
    <TouchableOpacity
      title={text}
      style={[styles.btn, {backgroundColor: isOperator ? Colors.yellow : Colors.grey}, {width: text === "0" ? "45%" : "20%"}]}
      onPress={onPress}
    >
      <Text style={styles.textColor}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  btn: {
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 30,
    paddingRight: 30,
    borderRadius: 50,
  },
  textColor: {
    color: Colors.white,
    textAlign: 'center',
    fontWeight: 'bold'
  }
});

export default ButtonComponent;
