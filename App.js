import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
  Dimensions,
} from 'react-native';
import MainScreen from "./src/screens/Main";
import {Colors} from "./src/utils/colors"

const App = () => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.safeAreaView}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.safeAreaView}>
          <View style={styles.body}>
            <MainScreen />
          </View>
        </ScrollView>
      </SafeAreaView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    backgroundColor: Colors.dark,
    color: Colors.white,
  },
  body: {
    backgroundColor: Colors.dark,
    height: Dimensions.get("window").height,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
