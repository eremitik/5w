import React from 'react';
import styled from 'styled-components';

const MailingContainer = styled.div`
  text-align: center;
  margin-right: 20px;
  margin-left: 20px;
  font-size: 2rem;
  h1{
    font-family: "Homemade Apple";
  }
  input{
    text-align: center;
  }
`

const JoinButton = styled.button`
  background: transparent;
  border: 4px solid white;
  border-radius: 25px;
  outline: 0;
  width: 200px;
  height: 50px;
  color: white;
  margin-top: 75px;
  font-family: "Montserrat";
  font-size: 0.7em;
  font-weight: bold;
  letter-spacing: 0.5rem;
  text-indent: 0.5rem;
  cursor: pointer;
  transition: 0.4s;

  :hover{
    background: white;
    color: black;
  }
`

function Mailing() {
  return (
    <MailingContainer>
      <h1>Mailing list.</h1>
      <br/> 
      <input type="email"/>
      <br/>
      <JoinButton type="submit">JOIN</JoinButton>
    
    </MailingContainer>

  );
}

export default Mailing;
