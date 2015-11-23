
import React, { Component, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default class WrapperComponent extends Component {
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
				initialState
			}
		};

		// Save new state when component is mounted or updated
		const onUpdateComponent = (component, props, state) => {
			this.setState({
				fixture: {
					...props,
					state
				}
			});
		}

		const wrappedComponent = class WrappedComponent extends props.component {
			constructor(props) {
				super(props);
				this.state = {
					...this.state,
					...initialState
				};
			}

			componentDidMount() {
				onUpdateComponent(this, this.props, this.state);
				if (super.onUpdateComponent) {
					super.onUpdateComponent();
				}
			}

			componentDidUpdate() {
				onUpdateComponent(this, this.props, this.state);
				if (super.componentDidUpdate) {
					super.componentDidUpdate();
				}
			}
		}

		this.wrappedElement = React.createElement(wrappedComponent, initialProps);
	}

	shouldComponentUpdate(nextProps, nextState) {
		// TODO: Improve this
		return JSON.stringify(this.state.fixture) != JSON.stringify(nextState.fixture);
	}

	render() {
		return (
			<View style={ this.props.style }>
				<View style={{ margin: 10, padding: 10, borderWidth: 1, borderColor: 'lightgray' }}>
					{ this.wrappedElement }
				</View>
				<View style={{ margin: 10, padding: 10, borderWidth: 1, borderColor: 'lightgray' }}>
					<Text>Serialized:</Text>
					<Text style={{ fontFamily: 'Courier' }}>{ JSON.stringify(this.state.fixture) + ' ' + new Date() }</Text>
				</View>
			</View>
		);
	}
}
