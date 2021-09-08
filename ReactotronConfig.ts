import Reactotron from 'reactotron-react-native'; // asyncStorage, // openInEditor, // networking, // trackGlobalErrors,
import { reactotronRedux } from 'reactotron-redux';
import app from './app.json';

// setAsyncStorageHandler(AsyncStorage)
const reactotron = Reactotron.configure()
  .useReactNative({
    asyncStorage: true, // there are more options to the async storage.
    networking: {
      ignoreContentTypes: /^(image)\/.*$/i,
      // optionally, you can turn it off with false.
      ignoreUrls: /symbolicate/,
    },
    editor: true, // there are more options to editor
    errors: { veto: (stackFrame) => false }, // or turn it off with false
    overlay: false, // just turning off overlay
  })
  // .use(asyncStorage())
  .use(reactotronRedux())
  .connect();

// .useReactNative() // add all built-in react native plugins
// .connect(); // let's connect!

export default reactotron;
