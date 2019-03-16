/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import muster, {
  Provider,
  simpleContainer
} from '@dws/muster-react';

const app = muster({
  name: 'MUSTER 6.0'
});

function MyComponent({ name }) {
  return   <Text>Hello, {name}!</Text>;
}
const myContainer = simpleContainer({
  name: true
});

const MyConnectedComponent = myContainer(MyComponent);

export default class App extends Component {
  render() {
    return (

      <View style={styles.container}>
        <Provider muster={app}>
  
            <MyConnectedComponent />
        </Provider>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
