import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import {listingShapes} from '../../propz/listingProp.js';

class ListingItem extends Component {
  static propType = {
    listing: listingShapes,
  };

  render () {
    const {listing} = this.props;
    return (
      <li index={listing.id}><h3>{listing.price}</h3></li>
    );
  }
};

export default ListingItem;
