import React, { Component } from 'react';
import superagent from 'superagent';
import styled from 'styled-components';

import Sauces from './Sauces';
import Detail from './Detail';

const Header = styled.h1`
  color: red;
  font-family: Arial Black;
  font-size: 4em;
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


  render() {
    let { sauces, selectedSauce } = this.state;
    let { handleSauceHover, handleSauceClick } = this;
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
          />
        </div>
      )
    }
    return <p>loading...</p>
  }
}
