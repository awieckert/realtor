import React from 'react';
import './Listings.css';

class Listings extends React.Component {
  render () {
    // const listings = this.props.listings;
    const {listings} = this.props;
    const listingsItemComponents = listings.map((item) => {
      return (
        <li key={item.id}>{item.price}</li>
      );
    });
    return (
      <div className='Listings'>
        <h2>Listings</h2>
        <ul>
          {listingsItemComponents}
        </ul>
      </div>
    );
  }
}

export default Listings;
