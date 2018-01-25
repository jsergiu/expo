import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

export default class TeamCreateScreen extends React.Component {
  static navigationOptions = {
    title: 'TeamCreateScreen',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>Edit teeeeam</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
