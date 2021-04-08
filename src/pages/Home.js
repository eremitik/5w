import React from 'react';
import Form from '../components/form/Form.js';
import styled from 'styled-components';

const HomeContainer = styled.div`
  h1{
    text-align: center;
    font-family: "Homemade Apple";
    font-size: 5rem;
    font-weight: normal;
    margin: auto;
  }
`

function Home() {
  return (
    <HomeContainer>
      <h1 className="test">5w.</h1>
      <Form />
    </HomeContainer>

  );
}

export default Home;
