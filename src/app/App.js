import React, { Component } from 'react';
import connection from '../firebaseRequests/connection.js';
import Listings from '../components/Listings/Listings.js';
import Building from '../components/Building/Building.js';
import ListingsForm from '../components/ListingsForm/ListingsForm.js';
import './App.css';

class App extends Component {
  componentDidMount () {
    connection();
  }

  render () {
    return (
      <div>
        <div className='col-sm-6'>
          <Listings />
        </div>
        <div className='col-sm-6'>
          <Building />
        </div>
        <div className='col-sm-12'>
          <ListingsForm />
        </div>
      </div>
    );
  }
}

export default App;
