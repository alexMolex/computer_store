import React from 'react';
import { Provider } from "react-redux"
import { ConnectedRouter } from "connected-react-router";
import { BrowserRouter as Router } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';


import store, { history } from './redux/reduxStore'
import Routes from './routes/routes';



function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Router>
          <Routes />
        </Router>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
