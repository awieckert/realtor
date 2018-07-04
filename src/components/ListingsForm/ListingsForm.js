import React from 'react';
import './ListingsForm.css';

class ListingsForm extends React.Component {
  state = {
    newListing: {
      address: '',
      city: '',
      squareFootage: 0,
    },
  };

  formSubmit = (e) => {
    const {onSubmit} = this.props;
    e.preventDefault();
    console.error('You clicked submit', e);
    onSubmit(this.state.newListing);
  };

  addressChange = (e) => {
    this.formFieldStringState('address', e);
  };

  cityChange = (e) => {
    this.formFieldStringState('city', e);
  };

  squareFootageChange = (e) => {
    this.formFieldNumberState('squareFootage', e);
  };

  formFieldStringState = (name, e) => {
    const tempListing = {...this.state.newListing};
    tempListing[name] = e.target.value;
    this.setState({newListing: tempListing});
  };

  formFieldNumberState = (name, e) => {
    const tempListing = {...this.state.newListing};
    tempListing[name] = e.target.value * 1;
    this.setState({newListing: tempListing});
  };

  render () {
    const {newListing} = this.state;
    return (
      <div className='ListingsForm col-xs-8 col-xs-offset-2'>
        <h2 className='text-center'>Submit new property:</h2>
        <form action="" onSubmit={this.formSubmit}>
          <div className='row'>
            <fieldset className='col-xs-3'>
              <label htmlFor="address">Address:</label>
              <br/>
              <input className='col-xs-12' type="text" id='address' placeholder='1234 Main Street' value={newListing.address} onChange={this.addressChange}/>
            </fieldset>
            <fieldset className='col-xs-3'>
              <label htmlFor="city">City:</label>
              <br/>
              <input className='col-xs-12' type="text" id='city' placeholder='Nashville' value={newListing.city} onChange={this.cityChange}/>
            </fieldset>
          </div>
          <div className='row'>
            <fieldset className='col-xs-3'>
              <label htmlFor="squareFootage">Square Footage:</label>
              <br/>
              <input className='col-xs-12' type="number" id='squareFootage' placeholder='123' value={newListing.squareFootage} onChange={this.squareFootageChange}/>
            </fieldset>
            <fieldset className='col-xs-3'>
              <label htmlFor="city">City:</label>
              <br/>
              <input className='col-xs-12' type="text" id='city' placeholder='Nashville' value={newListing.city} onChange={this.cityChange}/>
            </fieldset>
          </div>
          <button className='text-center btn-danger col-xs-6 col-xs-offset-3'>Save House</button>
        </form>
      </div>
    );
  }
}

export default ListingsForm;
