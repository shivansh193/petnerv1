import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f7f7f7;
  padding: 50px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
`;

const Image = styled.img`
  width: 40%;
  height: auto;
  margin-right: 50px;
`;

const TextWrapper = styled.div`
  width: 60%;
`;

const Title = styled.h2`
  font-size: 36px;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 20px;
  line-height: 1.5;
  margin-bottom: 30px;
`;

const KnowMoreButton = styled.button`
  background-color: #000;
  color: #fff;
  padding: 10px 20px;
  border-radius: 10px;
  border: none;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #fff;
    color: #000;
  }
`;

const ImageTextElement = ({ imageSrc, title, description }) => {
  return (
    <Wrapper>
      <Image src={imageSrc} alt="Example Image" />
      <TextWrapper>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <KnowMoreButton>Know More</KnowMoreButton>
      </TextWrapper>
    </Wrapper>
  );
};

export default ImageTextElement;
