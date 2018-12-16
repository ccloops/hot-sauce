import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`

const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const BackButton = styled.a`
  color: red;
  text-decoration: none;
`

const ImgWrapper = styled.img`
  width: 500px;
  height: 400px;
  object-fit: contain;
`

const Detail = ({ selectedSauce }) => (
  <Wrapper>
    <LeftWrapper>
      <h1>{selectedSauce.title}</h1>
      <BackButton href='/'>BACK TO HOT SAUCE LIST</BackButton>
      <ImgWrapper src={selectedSauce.imageURL} />
    </LeftWrapper>
    <p>{selectedSauce.description}</p>
  </Wrapper>
);



export default Detail;