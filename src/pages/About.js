import React from 'react';
import styled from 'styled-components';                                                 


const AboutContainer = styled.div`
  text-align: center;
  margin-right: 20px;
  margin-left: 20px;
  font-size: 2rem;
  p{
    white-space: pre-line;
  }
`;

const PHomemadeApple = styled.p`
  font-family: "Homemade Apple";
  font-weight: bold;
`

function About() {

  return (
    <AboutContainer>
      <PHomemadeApple>5w gives the last 'why' to the reader to answer.</PHomemadeApple>
      <p>Too much of today's news is colored with opinion and agenda. 
      {"\n"}The 'who', 'what', 'where' and 'when' cannot be altered. 
      {"\n"}The problem is always with the 'why', as it doesn't always have a clear answer.  </p>

    </AboutContainer>
  );
}

export default About;
