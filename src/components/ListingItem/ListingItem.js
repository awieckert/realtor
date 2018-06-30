import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {formatPrice} from '../../helpers.js';
import {listingShapes} from '../../propz/listingProp.js';
import './ListingItem.css';

class ListingItem extends Component {
  static propType = {
    listing: listingShapes,
    index: PropTypes.number,
    onSelect: PropTypes.func,
  };

  listingClick = (e) => {
    e.stopPropagation();
    const {listing, onSelect} = this.props;
    onSelect(listing.id);
  };

  render () {
    const {listing, index} = this.props;
    return (
      <li className='ListingItem text-center' onClick={this.listingClick}>
        <span className="col-xs-2"><strong>Listing {index + 1}:</strong></span>
        <span className="col-xs-4">{listing.address} <br/> {listing.city}, {listing.state} {listing.zip}</span>
        <span className="col-xs-3">{listing.numBeds} Bed/{listing.numBaths} Bath <br/> Built in {listing.yearBuilt}</span>
        <span className="col-xs-3">{formatPrice(listing.price)} <br/> {listing.squareFootage} ft<sup>2</sup></span>
      </li>
    );
  }
};

export default ListingItem;
