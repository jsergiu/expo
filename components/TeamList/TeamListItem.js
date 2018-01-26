import React from 'react';
import { StyleSheet, TouchableOpacity , Text } from 'react-native';

export class TeamListItem extends React.Component {	
  render() {
    return (
			<TouchableOpacity style={s.item} onPress={ this.props.onPress }>
				<Text style={s.title}>{ this.props.title }</Text>
			</TouchableOpacity>
		)
  }
}

const s = StyleSheet.create({
  item: {
		backgroundColor: '#eee',
		height: 150,
		marginBottom: 16,
		textAlign: 'center',
		width: '100%',
	},
	title: {
		fontSize: 24,
	}
})
