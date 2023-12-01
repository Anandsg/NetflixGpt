import { Provider } from 'react-redux';
import Body from './components/pages/Body';
import appStore from './components/store/appStore';

function App() {
  return (
    <Provider store={appStore}>
      <Body />
    </Provider>
  );
}

export default App;
