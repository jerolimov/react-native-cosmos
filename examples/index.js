
import React, { Component, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import WrapperComponent from '../lib/wrap';

const styles = StyleSheet.create({
	title: {
		fontSize: 24,
	},
	likesInitially: {
		color: 'gray'
	},
	likesChanged: {
		fontWeight: 'bold'
	},
	button: {
		margin: 20,
		fontSize: 24,
		textAlign: 'center'
	}
});

export class LikeButton extends Component {
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
		const changed = this.props.initialValue !== this.state.value;
		return (
			<View style={ this.props.style }>
				<Text style={ styles.title }>
					{ this.props.title }
				</Text>
				<View style={{ flexDirection: 'row' }}>
					<TouchableOpacity onPress={ this.like.bind(this) }>
						<Text style={ styles.button }>👍</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={ this.dislike.bind(this) }>
						<Text style={ styles.button }>👎</Text>
					</TouchableOpacity>
				</View>
				<Text style={ changed ? styles.likesChanged : styles.likesInitially }>
					{ this.state.value } likes yet.
				</Text>
			</View>
		);
	}
}

export default class Example extends Component {
	render() {
		const fixture = {
			title: 'An awesome story!',
			initialValue: 2,
			state: { counter: 5 }
		}
		return <WrapperComponent style={{ paddingTop: 20 }} component={ LikeButton } fixture={ fixture } />;
	}
}
