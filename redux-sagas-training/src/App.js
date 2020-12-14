import './App.css';
import store from './store';
import { Provider } from 'react-redux';
import Header from './Pages/header'
import Main from './Pages/main';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Main />
      </div>
    </Provider>
  );
}

export default App;
