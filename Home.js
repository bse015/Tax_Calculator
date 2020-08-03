import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import DrawerNavigator from './navigation/DrawerNavigation';
export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <DrawerNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
