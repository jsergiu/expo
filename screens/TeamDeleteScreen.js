import React from 'react';
import { Button, ScrollView, StyleSheet, Text } from 'react-native';

export default class TeamDeleteScreen extends React.Component {
  static navigationOptions = {
    title: 'TeamDeleteScreen',
  };

  _handleClick = () => {
    const { navigate } = this.props.navigation;
    navigate('Main');
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>Are you sure you want to delete this team?</Text>
        <Button title="Delete team" onPress={ this._handleClick } />
        <Button title="Cancel" onPress={ this._handleClick } />
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
