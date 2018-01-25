import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

export default class TeamViewScreen extends React.Component {
  static navigationOptions = {
    title: 'TeamViewScreen',
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
