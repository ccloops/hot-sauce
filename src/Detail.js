import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`

const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgb(227, 224, 224);
  width: 65%;
`

const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 35%;
  padding: 3em;
  font-size: 1em;
`

const BackButton = styled.div`
  color: rgb(162, 23, 23);
  border: none;
  font-family: Arial Black;
  padding: 1em;
  &:hover {
    cursor: pointer;
  }
`

const HeaderWrapper = styled.h1`
  font-family: Arial;
  font-size: 3em;
  color: rgb(114, 113, 113);
  padding-left: 0.4em;
`

const ImgWrapper = styled.img`
  width: 600px;
  height: 400px;
  object-fit: contain;
  align-self: center;
`

const Detail = ({ selectedSauce, toggleDetails }) => (
  <Wrapper>
    <LeftWrapper>
      <BackButton onClick={toggleDetails}>{String.fromCharCode(12296) + ' BACK TO HOT SAUCE LIST'}</BackButton>
      <HeaderWrapper>{selectedSauce.title}</HeaderWrapper>
      <ImgWrapper src={selectedSauce.imageURL} />
    </LeftWrapper>

    <RightWrapper>
      <p>{selectedSauce.description}</p>
    </RightWrapper>
  </Wrapper>
);

export default Detail;