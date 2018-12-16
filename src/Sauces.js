import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Sauce from './Sauce';

const Container = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: flex-start;
`

const Sauces = ({ sauces, ...props }) => (
  <Container>
    {
      sauces.map((item, index) => 
      <Sauce 
        key={`sauce-item-${index}`}
        sauce={item}
        id={item.id}
        {...props}
        >
        {item.title}
      </Sauce>)
    }
  </Container>
);

Sauces.propTypes = {
  sauces: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Sauces;