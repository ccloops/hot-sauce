import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Sauce from './Sauce';

const Container = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex-grow: 1;
  justify-content: space-between;
`

const Sauces = ({ sauces, ...props }) => (
  <Container>
    {
      sauces.map((item, index) => 
      <Sauce 
        key={`sauce-item-${index}`}
        sauce={item}
        id={index}
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