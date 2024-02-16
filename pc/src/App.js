import React from 'react';
import { Provider } from "react-redux"
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './redux/reduxStore'
import Routes from './routes/routes';



function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
