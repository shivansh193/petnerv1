import React from 'react';
import styled from 'styled-components';
import Form from './form';

const Wrapper = styled.div`
  display: flex;
  height: 75vh;
`;

const TextWrapper = styled.div`
  width: 60%;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormWrapper = styled.div`
  width: 40%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Main = () => {
  return (
    <Wrapper>
      <TextWrapper>
        <h1>Welcome to My Website!</h1>
      </TextWrapper>
      <FormWrapper>
        <Form />
      </FormWrapper>
    </Wrapper>
  );
};

export default Main;
