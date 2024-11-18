import React from "react";
import styled from "styled-components";

const Container = styled.div`
 background-color: azure;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 margin-top: 30px;
`;

const ContentWrapper = styled.div`
 padding: 20px;
 margin-bottom: 20px;
 text-align: center;
`;

const Title = styled.h1`
 color: #118ab2;
 font-size: 40px;
 margin-bottom: 0.5rem;
`;

const Subtitle = styled.span`
 font-size: 20px;
 color: #666;
`;

const DataWrapper = styled.div`
 display: flex;
 justify-content: space-around;
 width: 80%;
 gap: 20px;
 margin-bottom: 50px;
 flex-direction: row;

 @media (max-width: 768px) {
  flex-direction: column;
 }
`;

const DataCard = styled.div`
 border-radius: 6px;
 background-color: #ffffff;
 color: #118ab2;
 font-weight: bold;
 flex: 1;
 text-align: center;
 margin: 0 10px;
 box-shadow: 3px 5px 5px 2px #333;
 padding: 50px 30px;
`;

function CardSection({ title, paragraph, data }) {
 return (
  <Container>
   <ContentWrapper>
    <Title>{title}</Title>
    <Subtitle>{paragraph}</Subtitle>
   </ContentWrapper>
   <DataWrapper>
    {data.map((items, index) => (
     <DataCard key={index}>
      {items.status}
      <br />
      {items.total}
     </DataCard>
    ))}
   </DataWrapper>
  </Container>
 );
}

export default CardSection;
