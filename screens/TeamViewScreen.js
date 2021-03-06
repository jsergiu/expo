import React from 'react';
import { Button, ScrollView, StyleSheet, Text } from 'react-native';

export default class TeamViewScreen extends React.Component {
  static navigationOptions = {
    title: 'TeamViewScreen',
  };

  _handleClick = () => {
    const { navigate } = this.props.navigation;
    navigate('DeleteTeam');
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>View team</Text>
        <Text>This is your team</Text>
        <Button title="Delete team" onPress={ this._handleClick } />
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
