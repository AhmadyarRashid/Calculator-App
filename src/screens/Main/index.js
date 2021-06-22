import React, {useState} from "react"
import {View, Text, StyleSheet} from "react-native"
import Button from "../../components/Button"
import {Colors} from "../../utils/colors"

function MainScreen() {

  const [displayValue, setDisplayValue] = useState("0")

  const inputNumber = text => {
    setDisplayValue(displayValue === "0" ? text : displayValue + text)
  }

  return (
    <React.Fragment>
      {/*Display Calculation*/}
      <View style={styles.displayScreen}>
        <Text style={styles.textColor}>{displayValue}</Text>
        <Text style={styles.previousCalculation}>{"0"}</Text>
      </View>

      {/*Control Buttons*/}
      <View style={styles.body}>

        <View style={styles.row}>
          <Button isOperator text="AC" onPress={() => setDisplayValue("0")}/>
          <Button isOperator text="C"
                  onPress={() => setDisplayValue(displayValue.substring(0, displayValue.length - 1))}/>
          <Button isOperator text="%" onPress={() => inputNumber("%")}/>
          <Button isOperator text="/" onPress={() => inputNumber("/")}/>
        </View>

        <View style={styles.row}>
          <Button text="7" onPress={() => inputNumber("7")}/>
          <Button text="8" onPress={() => inputNumber("8")}/>
          <Button text="9" onPress={() => inputNumber("9")}/>
          <Button isOperator text="x" onPress={() => inputNumber("x")}/>
        </View>

        <View style={styles.row}>
          <Button text="4" onPress={() => inputNumber("4")}/>
          <Button text="5" onPress={() => inputNumber("5")}/>
          <Button text="6" onPress={() => inputNumber("6")}/>
          <Button isOperator text="+" onPress={() => inputNumber("+")}/>
        </View>

        <View style={styles.row}>
          <Button text="1" onPress={() => inputNumber("1")}/>
          <Button text="2" onPress={() => inputNumber("2")}/>
          <Button text="3" onPress={() => inputNumber("3")}/>
          <Button isOperator text="-" onPress={() => inputNumber("-")}/>
        </View>

        <View style={styles.row}>
          <Button text="0" onPress={() => inputNumber("0")}/>
          <Button text="." onPress={() => inputNumber(".")}/>
          <Button isOperator text="="/>
        </View>

      </View>
    </React.Fragment>
  )
}

const styles = StyleSheet.create({
  displayScreen: {
    height: "20%",
    backgroundColor: Colors.dark,
    padding: 20,
    display: 'flex',
    flexDirection: 'column-reverse',
  },
  body: {
    height: "80%",
    backgroundColor: Colors.dark
  },
  previousCalculation: {
    color: Colors.lightgrey,
    fontSize: 22,
    textAlign: 'right',
  },
  textColor: {
    color: Colors.lightgrey,
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'right',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12
  }
});

export default MainScreen;
