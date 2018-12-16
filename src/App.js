import React, { Component } from 'react';
import superagent from 'superagent';
import styled from 'styled-components';

import Sauces from './Sauces';
import Detail from './Detail';

const DATA_URL = process.env.DATA_URL;

const Header = styled.h1`
  color: rgb(162, 23, 23);
  font-family: Arial Black;
  font-size: 2em;
  padding: 1em;
`
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      sauces: [],
      selectedSauce: null
    }
    this.fetchSauce = this.fetchSauce.bind(this);
    this.toggleDetails = this.toggleDetails.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.fetchSauce();  
  }

  fetchSauce() {
    superagent.get(DATA_URL)
      .then(sauces => {
        this.setState({ sauces: JSON.parse(sauces.text) });
    })
      .catch(error => console.log('error', error));
  }

  toggleDetails(id) { 
    let selected = this.state.sauces.find(sauce => sauce.id === id);
    this.setState({ selectedSauce: selected });

    if(id === undefined) {
      this.setState({ selectedSauce: null });
    }
  }

  handleRemove(id) {
    let updatedSauces = this.state.sauces.filter(sauce => id !== sauce.id);
    this.setState({ sauces: updatedSauces });
  }


  render() {
    let { sauces, selectedSauce } = this.state;
    let { toggleDetails, handleRemove } = this;
    if(selectedSauce) {
      return (
        <Detail
          selectedSauce={selectedSauce}
          toggleDetails={toggleDetails}
        >
        </Detail>
      )
    }

    if(sauces) {
      return (
        <div>
          <Header>HOT SAUCE LIST</Header>
          <Sauces
            sauces={sauces}
            toggleDetails={toggleDetails}
            handleRemove={handleRemove}
          />
        </div>
      )
    }
    return <p>loading...</p>
  }
}
