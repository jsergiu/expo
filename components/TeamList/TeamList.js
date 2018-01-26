import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TeamListItem } from './TeamListItem'

export class TeamList extends React.Component {

	_handlePress = () => {
		const { navigation } = this.props
		navigation.navigate('ViewTeam');
	}

  render() {
    return (
			<View style={s.list}>
				<TeamListItem onPress={ this._handlePress } title="Team one" />
				<TeamListItem onPress={ this._handlePress } title="Team two" />
				<TeamListItem onPress={ this._handlePress } title="Team three" />
				<TeamListItem onPress={ this._handlePress } title="Team four" />
				<TeamListItem onPress={ this._handlePress } title="Team five" />
				<TeamListItem onPress={ this._handlePress } title="Team six" />
				<TeamListItem onPress={ this._handlePress } title="Team seven" />
			</View>
		)
  }
}

const s = StyleSheet.create({
  list: {
		width: '100%',
	}
})