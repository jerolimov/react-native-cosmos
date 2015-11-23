
import React, { Component, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

import wrap from './wrap';

export default class EditableComponent extends Component {
	constructor(props) {
		super(props);

		let initialProps, initialState;

		if (props.fixture) {
			// Clone props and state
			initialProps = { ...props.fixture };
			initialState = { ...props.fixture.state };
			delete initialProps['state'];
		}

		// Initial state will be updated as soon as the component if mounted
		this.state = {
			fixture: {
				...initialProps,
				state: initialState
			}
		};

		this.wrappedComponent = wrap(props.component, initialProps, initialState, this.componentChanged.bind(this));
		this.wrappedElement = React.createElement(this.wrappedComponent, initialProps);
	}

	shouldComponentUpdate(nextProps, nextState) {
		// TODO: Improve this
		return JSON.stringify(this.state) != JSON.stringify(nextState);
	}

	// Save new state when component is mounted or updated
	componentChanged(component, newProps, newState) {
		this.setState({
			fixture: {
				...newProps,
				state: newState
			}
		});
	}

	fixtureChanged(fixtureAsString) {
		let fixture;
		try {
			fixture = JSON.parse(fixtureAsString);
		} catch (e) {
			this.setState({ error: true });
			return;
		}

		// Clone props and state
		const updateProps = { ...fixture };
		const updateState = { ...fixture.state };
		delete updateProps['state'];

		this.wrappedComponent = wrap(this.props.component, updateProps, updateState, this.componentChanged.bind(this));
		this.wrappedElement = React.createElement(this.wrappedComponent, updateProps);

		this.setState({
			fixture: {
				...updateProps,
				state: updateState
			},
			error: false
		});
	}

	render() {
		return (
			<View style={ this.props.style }>
				<View style={{ margin: 10, padding: 10, borderWidth: 1, borderColor: 'lightgray' }}>
					{ this.wrappedElement }
				</View>
				<TextInput ref='textInput'
					defaultValue={ JSON.stringify(this.state.fixture, null, 2) }
					multiline={ true }
					onChangeText={ this.fixtureChanged.bind(this) }
					style={{
						margin: 10,
						padding: 10,
						height: 200,
						borderWidth: 1,
						borderColor: this.state.error ? 'red' : 'lightgray',
						fontFamily: 'Courier'
					}}
				/>
			</View>
		);
	}
}
