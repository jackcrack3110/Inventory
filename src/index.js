import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { Provider } from 'react-redux'
import ConfigStore from './store/ConfigStore'
import { BrowserRouter } from 'react-router-dom'
const ProviderComponent = () => {
  const store = ConfigStore();
  return (
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>

  )
}

ReactDOM.render(
  <ProviderComponent />,
  document.getElementById('app')
);

module.hot.accept();