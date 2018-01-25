import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export class TeamListItem extends React.Component {
  render() {
    return (
		<View style={s.item}>
			<Text>{ this.props.title }</Text>
		</View>
	)
  }
}

const s = StyleSheet.create({
  item: {
		backgroundColor: '#eee',
		height: 150,
		marginBottom: 15,
		width: '100%',
	}
})