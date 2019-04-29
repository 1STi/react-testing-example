import React from 'react';
import { Provider } from 'react-redux';
import './App.css';

// App
import Todo from './components/Todo';

// Store
import configureStore from './store';

const store = configureStore({});

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Todo />
      </Provider>
    </div>
  );
}

export default App;
