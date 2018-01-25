import React from 'react';
import { Text, View } from 'react-native';

export class TeamListItem extends React.Component {
  render() {
    return (
		<View>
			<Text>{ this.props.title }</Text>
		</View>
	)
  }
}
