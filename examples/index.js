
import React, { Component, View, Text, ScrollView, TouchableOpacity, ActivityIndicatorIOS, StyleSheet } from 'react-native';

import EditableComponent from '../lib/EditableComponent';

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

export default class Example extends Component {
	render() {
		const fixture2 = {
			title: 'An awesome story!',
			initialValue: 2,
			state: { value: 5 }
		}
		const fixture3 = {
			title: 'Another awesome story!'
		}
		return (
			<ScrollView>
				<EditableComponent style={{ paddingTop: 20 }} component={ LikeButton } />
				<EditableComponent style={{ paddingTop: 20 }} component={ LikeButton } fixture={ fixture2 } />
				<EditableComponent style={{ paddingTop: 20 }} component={ LikeButton } fixture={ fixture3 } />
			</ScrollView>
		);
	}
}
