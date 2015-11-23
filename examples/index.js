
import React, { Component, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import WrapperComponent from '../lib/wrap';

const styles = StyleSheet.create({
	label: {
		fontSize: 24
	}
});

export class Counter extends Component {
	constructor(props) {
		super(props);
		console.log('init counter', props);
		this.state = {
			counter: props.initialValue || 0
		}
	}

	render() {
		return (
			<View style={ this.props.style }>
				<Text style={ styles.label }>{ this.props.title }</Text>
				<TouchableOpacity onPress={ () => this.setState({ counter: this.state.counter - 1, lastButton: '-1' }) }>
					<Text style={ styles.label }>-1</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={ () => this.setState({ counter: this.state.counter + 1, lastButton: '+1' }) }>
					<Text style={ styles.label }>+1</Text>
				</TouchableOpacity>
				<Text style={ styles.label }>{ '= ' + this.state.counter }</Text>
				<Text style={ styles.label }>{ 'lastButton: ' + this.state.lastButton }</Text>
				<Text style={{ fontFamily: 'Courier' }}>{ 'Local props: ' + JSON.stringify(this.props) }</Text>
				<Text style={{ fontFamily: 'Courier' }}>{ 'Local state: ' + JSON.stringify(this.state) }</Text>
			</View>
		);
	}
}

export default class Example extends Component {
	render() {
		const fixture = {
			title: 'Plus / Minus',
			initialValue: 2,
			state: { lastButton: '+1' }
		}
		return <WrapperComponent style={{ paddingTop: 20 }} component={ Counter } fixture={ fixture } />;
	}
}
