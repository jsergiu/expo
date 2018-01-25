import React from 'react';
import { Button, Text, View } from 'react-native';
import TeamListItem from './TeamListItem'

export class TeamList extends React.Component {
  render() {
    return (
		<View>
			<Button title="Create new team" />
			<TeamListItem title="Team one" />
			<TeamListItem title="Team two" />
			<TeamListItem title="Team three" />
		</View>
	)
  }
}
