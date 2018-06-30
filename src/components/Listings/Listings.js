import React from 'react';
import PropTypes from 'prop-types';
import './Listings.css';
import {listingShapes} from '../../propz/listingProp.js';
import ListingItem from '../ListingItem/ListingItem.js';

const listingShape = listingShapes;

class Listings extends React.Component {
  static propTypes = {
    listings: PropTypes.arrayOf(listingShape),
  };

  render () {
    // const listings = this.props.listings;
    const {listings} = this.props;
    const listingsItemComponents = listings.map((item, i) => {
      return (
        <ListingItem key={item.id} listing={item} index={i}/>
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
