import React, { Component } from 'react';
import superagent from 'superagent';
import styled from 'styled-components';

import Sauces from './Sauces';
import Detail from './Detail';

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
    this.handleSauceHover = this.handleSauceHover.bind(this);
    this.handleSauceClick = this.handleSauceClick.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.fetchSauce();
  }

  fetchSauce() {
    superagent.get('http://localhost:3000/sauces')
      .then(sauces => {
        this.setState({ sauces: JSON.parse(sauces.text) });
    })
      .catch(error => console.log('error', error));
  }

  handleSauceHover(id) {
    // handle hover for the close button
  }

  handleSauceClick(id) {
    let selected = this.state.sauces.find(sauce => sauce.id === id);
    this.setState({ selectedSauce: selected });
  }

  handleRemove(id) {
    let updatedSauces = this.state.sauces.filter(sauce => id !== sauce.id);
    this.setState({ sauces: updatedSauces });
  }


  render() {
    let { sauces, selectedSauce } = this.state;
    let { handleSauceHover, handleSauceClick, handleRemove } = this;
    if(selectedSauce) {
      return (
        <Detail
          selectedSauce={selectedSauce}
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
            handleSauceHover={handleSauceHover}
            handleSauceClick={handleSauceClick}
            handleRemove={handleRemove}
          />
        </div>
      )
    }
    return <p>loading...</p>
  }
}
