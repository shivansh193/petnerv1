import React from 'react';
import styled from 'styled-components';

const SecondComponent = () => {
  return (
    <Wrapper>
      <Container>
        <TextWrapper>
          <h2>Heading</h2>
          <p>Description goes here</p>
          <ButtonWrapper>
            <button>Know More</button>
          </ButtonWrapper>
        </TextWrapper>
        <ImageWrapper>
          <img src="https://example.com/image.jpg" alt="Example" />
        </ImageWrapper>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 75vh;
  background-color: #f5f5f5;
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.1);
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
`;

const TextWrapper = styled.div`
  flex: 0.6;
`;

const ImageWrapper = styled.div`
  flex: 0.4;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 100%;
    max-height: 100%;
  }
`;

const ButtonWrapper = styled.div`
  margin-top: 1rem;

  button {
    background-color: #333;
    color: #fff;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    transition: all 0.3s ease;

    &:hover {
      background-color: #fff;
      color: #333;
      border: 1px solid #333;
    }
  }
`;

export default SecondComponent;
