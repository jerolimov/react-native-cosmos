# react-native-cosmos

> DX tool to test react-native components with defined props/state fixtures.

This project brings the "[cosmos](https://github.com/skidding/cosmos) for
[React](http://facebook.github.io/react/)" idea from
[@skidding](https://twitter.com/skidding) into the
[react-native](https://facebook.github.io/react-native/) universe.

Watch this
[youtube](https://www.dropbox.com/s/wksnkea3vzs5jcy/react-native-cosmos.mov?dl=0)
[videos](https://www.dropbox.com/s/i5mi783zi8bsiic/react-native-cosmos2.mov?dl=0)
for a quick introduction.

## Getting started

```bash
npm install --save react-native-cosmos
```

```js
import { EditableComponent } from 'react-native-cosmos';

<EditableComponent component={ YourComponent } fixture={{
    propKey: "propValue",
    state: {
        stateKey: "stateValue"
    }
}} />
```

## Roadmap

The current implementation contains a single editable component (see above).

* Extend documentation how to import this into a react-native project.
* Serialize also child props and state???
* Show a ListView of components and components fixtures???
* Add an option to add documentation to make this a living styleguide???

## Author

Christoph Jerolimov, [@jerolimov](https://twitter.com/jerolimov)

## Credits

Ideas, discussions and contributions are welcome: Just
[open a new issue](https://github.com/jerolimov/react-native-cosmos/issues/new)

## License

This project is released under the MIT License.
See the LICENSE file for further details.
