import React, { Component } from 'react';
import connection from '../firebaseRequests/connection.js';
import listingRequests from '../firebaseRequests/listings.js';
import Listings from '../components/Listings/Listings.js';
import Building from '../components/Building/Building.js';
import ListingsForm from '../components/ListingsForm/ListingsForm.js';
import './App.css';

class App extends Component {
  state = {
    listings: [],
  }

  componentDidMount () {
    connection();
    listingRequests.getRequest().then((listingsArray) => {
      this.setState({listings: listingsArray});
    }).catch((err) => {
      console.error('Failed to grab firebase Listings: ', err);
    });
  }

  render () {
    return (
      <div className='text-center'>
        <div className='col-sm-6'>
          <Listings listings={this.state.listings}/>
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
