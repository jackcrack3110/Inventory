import React from 'react';
import ReactDOM from 'react-dom';
 
import App from './App';
import { Provider } from 'react-redux'
import ConfigStore from './store/ConfigStore'

const ProviderComponent = () => {
  const store = ConfigStore();
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}
 
ReactDOM.render(
  <ProviderComponent />,
  document.getElementById('app')
);
 
module.hot.accept();