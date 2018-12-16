import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.li`
  display: flex;
  flex-direction: column;
  border: 1px solid gray;
  width: 300px;
  position: relative;
  &:hover {
    cursor: pointer;
  }
`

const ImgWrapper = styled.img`
  width: 200px;
  height: 200px;
  object-fit: contain;
`

const TextWrapper = styled.div`
  background-color: lightGray;
  font-family: helvetica;
`

const DeleteButton = styled.div`
  position: absolute;
  top: 0; 
  right: 0;
`

const Sauce = ({ sauce, handleSauceHover, handleSauceClick, id }) => (
  <Wrapper
    onMouseEnter={() => handleSauceHover(id)}
    onClick={() => handleSauceClick(id)}
  >
    <ImgWrapper src={sauce.imageURL} />
    <TextWrapper>
      <h1>{sauce.title}</h1>
      <h2>{sauce.subtitle}</h2>
    </TextWrapper>
    <DeleteButton sauce={sauce}>x</DeleteButton>
  </Wrapper>
);

Sauce.propTypes = {
  sauce: PropTypes.string.isRequired,
}

export default Sauce;