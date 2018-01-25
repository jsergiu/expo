import React from 'react';
import { StyleSheet, TouchableOpacity , Text } from 'react-native';
import { NavigationActions } from 'react-navigation';

export class TeamListItem extends React.Component {

	_handleClick = () => {
		console.log('wtf')
	}
	
  render() {
    return (
			<TouchableOpacity style={s.item}>
				<Text onPress={ this._handleClick } style={s.title}>{ this.props.title }</Text>
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