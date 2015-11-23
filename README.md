> DX tool to test react-native components with defined props/state fixtures.

This brings the "[cosmos](https://github.com/skidding/cosmos) for
[React](http://facebook.github.io/react/)" idea
from [@skidding](https://twitter.com/skidding) into the
[react-native](https://facebook.github.io/react-native/) parallel-universe.

Please watch
[this](https://www.dropbox.com/s/wksnkea3vzs5jcy/react-native-cosmos.mov?dl=0) and
[this](https://www.dropbox.com/s/i5mi783zi8bsiic/react-native-cosmos2.mov?dl=0) video.

The current implementation contains only a single editable component.

And there is still many things todo:

* [x] Make component props and state editable.
* [ ] Serialize also child props and state.
* [ ] Show a ListView of components.
* [ ] Show a ListView of components fixtures.
* [ ] Provide a documentation howto import this into a react-native project.
* [ ] Add an option to add documentation to make this a living styleguide?

### If you're brave:

```bash
npm install --save `react-native-cosmos`
```

```js
import EditableComponent from '../lib/EditableComponent';

<EditableComponent component={ LikeButton } fixture={{
    propKey: "propValue",
    state: {
        stateKey: "stateValue"
    }
}} />
```
