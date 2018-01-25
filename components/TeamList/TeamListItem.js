import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export class TeamListItem extends React.Component {

	_handleClick = () => {
    const { navigate } = this.props.navigation;
    navigate('ViewTeam');
	}
	
  render() {
    return (
		<View style={s.item} onPress={ this._handleClick }>
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