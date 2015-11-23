
import React, { Component, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

function wrap(component, props, state, onUpdateComponent) {
	return class WrappedComponent extends component {
		constructor(props) {
			super(props);
			this.state = {
				...this.state,
				...state
			};
		}

		/*componentDidMount() {
			onUpdateComponent(this, this.props, this.state);
			if (super.onUpdateComponent) {
				super.onUpdateComponent();
			}
		}*/

		componentDidUpdate() {
			onUpdateComponent(this, this.props, this.state);
			if (super.componentDidUpdate) {
				super.componentDidUpdate();
			}
		}

		_setState(state) {
			this.setState(state);
		}
	}
}

export default class EditableComponent extends Component {
	constructor(props) {
		super(props);

		// Clone props and state
		const initialProps = { ...props.fixture };
		const initialState = { ...props.fixture.state };
		delete initialProps['state'];

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
		console.log('shouldComponentUpdate ?');
		// TODO: Improve this
		return JSON.stringify(this.state) != JSON.stringify(nextState);
	}

	// Save new state when component is mounted or updated
	componentChanged(component, newProps, newState) {
		console.log('onUpdateComponent');
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

		console.log('value', fixture);

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
		console.log('render wrapped element');
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
