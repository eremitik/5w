import React from 'react';
import styled from 'styled-components';                                                 

const ContactContainer = styled.div`
  text-align: center;
  margin-right: 20px;
  margin-left: 20px;
  font-size: 2rem;
  h1{
    font-family: "Homemade Apple"
  }

`

function Contact() {
  return (
    <ContactContainer>
      <h1>Contact me.</h1>
      <p>hi@5whq.com</p>
    </ContactContainer>

  );
}

export default Contact;
