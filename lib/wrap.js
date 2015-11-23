
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

export default wrap;
