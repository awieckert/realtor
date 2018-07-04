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
    selectedId: -1,
  }

  formSubmitEvent = (newListing) => {
    listingRequests.postRequest(newListing).then(() => {
      listingRequests.getRequest().then((listingsArray) => {
        this.setState({listings: listingsArray});
      });
    }).catch((err) => {
      console.error('Error with Post: ', err);
    });
  };

  listingSelectEvent = (id) => {
    this.setState({
      selectedId: id,
    });
  };

  componentDidMount () {
    connection();
    listingRequests.getRequest().then((listingsArray) => {
      this.setState({listings: listingsArray});
    }).catch((err) => {
      console.error('Failed to grab firebase Listings: ', err);
    });
  }

  render () {
    const {selectedId, listings} = this.state;
    const selectedListing = listings.find(item => item.id === selectedId) || {nope: 'nope'};
    return (
      <div className='text-center'>
        <div className='col-sm-6'>
          <Listings
            onListingSelection={this.listingSelectEvent}
            listings={this.state.listings}/>
        </div>
        <div className='col-sm-6'>
          <Building listing={selectedListing}/>
        </div>
        <div className='col-sm-12'>
          <ListingsForm onSubmit={this.formSubmitEvent}/>
        </div>
      </div>
    );
  }
}

export default App;
