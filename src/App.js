import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import './App.css';
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Product from './components/Product'
import Header from './components/Header';

function App() {

  return (
    
   
      <BrowserRouter>
        <div>
          <div className="App">
            <Header />
          </div>
          <Switch>
            <Route path='/dashboard' component={Dashboard} />
            <Route path='/product' component={Product} />
            <Route path='/' component={Login} />
          </Switch>
        </div>
      </BrowserRouter>
    
  );
}
export default App;