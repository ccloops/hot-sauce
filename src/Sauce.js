import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const OuterWrapper = styled.li`
  position: relative;
  button {
    visibility: hidden;
    transition: visibility 0s, opacity 0.5s linear;
    opacity: 0;
  }
  &:hover {
    button {
      visibility: visible;
      opacity: 1;
    }
  }
`

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid gray;
  width: 300px;
  height: 350px;
  margin-bottom: 2em;
  &:hover {
    cursor: pointer;
    -webkit-box-shadow: 0 10px 6px -6px #777;
       -moz-box-shadow: 0 10px 6px -6px #777;
            box-shadow: 0 10px 6px -6px #777;
  }
`

const ImgWrapper = styled.img`
  width: 200px;
  height: 200px;
  object-fit: contain;
  align-self: center;
`

const TextWrapper = styled.div`
  color: rgb(75, 73, 73);
  background-color: rgb(227, 224, 224);
  height: 100%;
  padding-left: 0.5em;
  padding-bottom: 0.5em;
`

const TitleWrapper = styled.h1`
  font-size: 2em;
  padding-top: 1em;
`

const DeleteButton = styled.button`
  position: absolute;
  top: 0; 
  right: 0;
  font-size: 2em;
  border-color: gray;
  border-left: none;
  border-bottom: none;
  &:hover {
    cursor: pointer;
  }
`

const Sauce = ({ sauce, toggleDetails, handleRemove, id }) => (
  <OuterWrapper>
    <InnerWrapper
      onClick={() => toggleDetails(id)}
    >
      <ImgWrapper src={sauce.imageURL} />
      <TextWrapper>
        <TitleWrapper>{sauce.title}</TitleWrapper>
        <h2>{sauce.subtitle}</h2>
      </TextWrapper>
    </InnerWrapper>
    <DeleteButton onClick={() => handleRemove(id)}>x</DeleteButton>
  </OuterWrapper>
);

Sauce.propTypes = {
  sauce: PropTypes.string.isRequired,
  toggleDetails: PropTypes.func.isRequired,
  handleRemove: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired
}

export default Sauce;