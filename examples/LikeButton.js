
import React, { Component, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	title: {
		fontSize: 24,
	},
	button: {
		margin: 20,
		fontSize: 24,
		textAlign: 'center'
	}
});

export default class LikeButton extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: props.initialValue || 0
		}
	}

	like() {
		this.setState({ value: this.state.value + 1 });
	}

	dislike() {
		this.setState({ value: Math.max(0, this.state.value - 1) });
	}

	render() {
		return (
			<View style={ this.props.style }>
				<Text style={ styles.title }>{ this.props.title }</Text>
				<View style={{ flexDirection: 'row' }}>
					<TouchableOpacity onPress={ this.like.bind(this) }>
						<Text style={ styles.button }>👍</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={ this.dislike.bind(this) }>
						<Text style={ styles.button }>👎</Text>
					</TouchableOpacity>
				</View>
				<View style={{ flexDirection: 'row' }}>
					<Text>{ this.state.value } likes yet.</Text>
				</View>
			</View>
		);
	}
}
