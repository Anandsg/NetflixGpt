import { Provider } from 'react-redux';
import Body from './components/pages/Body';
// import Header from './components/Header';
import appStore from './components/store/appStore';

function App() {
  return (
    <Provider store={appStore}>
      {/* <Header /> */}
      <Body />
    </Provider>
  );
}

export default App;
