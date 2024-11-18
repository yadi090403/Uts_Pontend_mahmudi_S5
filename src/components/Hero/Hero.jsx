import React from "react";
import styled from "styled-components";
import Button from "../Button/Button";

const HeroContainer = styled.div`
 padding: 0;
 margin: 0;
 background-color: white;
 @media (max-width: 768px) {
  padding: 40px 20px;
 }
`;

const HeroContent = styled.div`
 padding: 80px 100px;
 display: flex;
 justify-content: space-between;
 align-items: center;
 @media (max-width: 768px) {
  flex-direction: column-reverse;
  padding: 40px 20px;
 }
`;

const HeroTitle = styled.h1`
 color: #118ab2;
 font-size: 40px;
 margin-bottom: 1rem;
 @media (max-width: 768px) {
  font-size: 32px;
 }
`;

const HeroDescription = styled.p`
 color: #333;
 font-size: 18px;
 margin-bottom: 2rem;
 @media (max-width: 768px) {
  font-size: 16px;
 }
`;

const HeroText = styled.div`
 flex-basis: 50%;
 @media (max-width: 768px) {
  flex-basis: auto;
  text-align: center;
  margin-top: 2rem;
 }
`;

const HeroImage = styled.img`
 width: 400px;
 margin-left: 2rem;
 @media (max-width: 768px) {
  width: 100%;
  max-width: 300px;
  margin-left: 0;
 }
`;

function Hero() {
 return (
  <HeroContainer>
   <HeroContent>
    <HeroText>
     <HeroTitle>Covid ID</HeroTitle>
     <HeroDescription>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, velit?
      Molestias iure sunt quidem architecto vitae ea aut eum aliquam
      voluptatibus, alias, nihil, quae unde est nostrum. Ut, delectus eos?
      Dolorem ex officiis iure.
     </HeroDescription>
     <Button>Vaccine</Button>
    </HeroText>
    <HeroImage src="/76n.png" alt="medical" />
   </HeroContent>
  </HeroContainer>
 );
}

export default Hero;
