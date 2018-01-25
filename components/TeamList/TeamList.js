import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TeamListItem } from './TeamListItem'

export class TeamList extends React.Component {
  render() {
    return (
			<View style={s.list}>
				<TeamListItem title="Team one" />
				<TeamListItem title="Team two" />
				<TeamListItem title="Team three" />
			</View>
		)
  }
}

const s = StyleSheet.create({
  list: {
		width: '100%',
	}
})