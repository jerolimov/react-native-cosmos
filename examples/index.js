
import React, { Component, View, ScrollView } from 'react-native';

import EditableComponent from '../lib/EditableComponent';

import LkeButton from './LikeButton';

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
