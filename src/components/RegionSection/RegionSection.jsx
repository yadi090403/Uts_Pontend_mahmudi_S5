import React from "react";
import styled from "styled-components";

const SectionContainer = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 margin: 50px 0px;
`;

const ContentWrapper = styled.div`
 padding: 20px;
 margin-bottom: 20px;
 text-align: center;
`;
const CardWrapper = styled.div`
 display: grid;
 grid-template-columns: repeat(3, 1fr);
 grid-gap: 40px;

 @media (max-width: 768px) {
  grid-template-columns: 1fr;
 }
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

const Card = styled.div`
 background-color: #fff;
 border-radius: 8px;
 box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
 padding: 20px;
 text-align: center;

 div {
  display: flex;
  justify-content: space-between;
  align-items: center;
 }
`;

const CardTitle = styled.h3`
 font-size: 20px;
 margin-bottom: 10px;
`;

const Info = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 margin-bottom: 10px;
`;

const Label = styled.span`
 font-size: 14px;
 color: #666;
`;

const Value = styled.span`
 font-size: 18px;
 font-weight: bold;
`;

function RegionSection({ data, title, paragraph }) {
 return (
  <SectionContainer>
   <ContentWrapper>
    <Title>{title}</Title>
    <Subtitle>{paragraph}</Subtitle>
   </ContentWrapper>
   <CardWrapper>
    {data.map((region, index) => (
     <Card key={index}>
      <CardTitle>{region.name}</CardTitle>
      <div>
       <Info>
        <Label>Positif</Label>
        <Value>{region.numbers.Positif}</Value>
       </Info>
       <svg
        xmlns="http://www.w3.org/2000/svg"
        height={"20px"}
        width={"20px"}
        viewBox="0 0 448 512"
       >
        <path d="M448 80v48c0 44.2-100.3 80-224 80S0 172.2 0 128V80C0 35.8 100.3 0 224 0S448 35.8 448 80zM393.2 214.7c20.8-7.4 39.9-16.9 54.8-28.6V288c0 44.2-100.3 80-224 80S0 332.2 0 288V186.1c14.9 11.8 34 21.2 54.8 28.6C99.7 230.7 159.5 240 224 240s124.3-9.3 169.2-25.3zM0 346.1c14.9 11.8 34 21.2 54.8 28.6C99.7 390.7 159.5 400 224 400s124.3-9.3 169.2-25.3c20.8-7.4 39.9-16.9 54.8-28.6V432c0 44.2-100.3 80-224 80S0 476.2 0 432V346.1z" />
       </svg>
      </div>
      <div>
       <Info>
        <Label>sembuh</Label>
        <Value>{region.numbers.sembuh}</Value>
       </Info>
       <svg
        xmlns="http://www.w3.org/2000/svg"
        height={"20px"}
        width={"20px"}
        viewBox="0 0 448 512"
       >
        <path d="M448 80v48c0 44.2-100.3 80-224 80S0 172.2 0 128V80C0 35.8 100.3 0 224 0S448 35.8 448 80zM393.2 214.7c20.8-7.4 39.9-16.9 54.8-28.6V288c0 44.2-100.3 80-224 80S0 332.2 0 288V186.1c14.9 11.8 34 21.2 54.8 28.6C99.7 230.7 159.5 240 224 240s124.3-9.3 169.2-25.3zM0 346.1c14.9 11.8 34 21.2 54.8 28.6C99.7 390.7 159.5 400 224 400s124.3-9.3 169.2-25.3c20.8-7.4 39.9-16.9 54.8-28.6V432c0 44.2-100.3 80-224 80S0 476.2 0 432V346.1z" />
       </svg>
      </div>
      <div>
       <Info>
        <Label>dirawat</Label>
        <Value>{region.numbers.dirawat}</Value>
       </Info>
       <svg
        xmlns="http://www.w3.org/2000/svg"
        height="20px"
        width="20px"
        viewBox="0 0 448 512"
       >
        <path d="M224 0C100.3 0 0 100.3 0 224s100.3 224 224 224 224-100.3 224-224S347.7 0 224 0zm121.5 303.7l-97.1 97.1c-4.7 4.7-12.3 4.7-17 0l-63.6-63.6c-4.7-4.7-4.7-12.3 0-17l22.6-22.6c4.7-4.7 12.3-4.7 17 0l44.4 44.4L278.4 245c4.7-4.7 12.3-4.7 17 0l22.6 22.6c4.8 4.8 4.8 12.4.5 17.1z" />
       </svg>
      </div>
      <div>
       <Info>
        <Label>meninggal</Label>
        <Value>{region.numbers.meninggal}</Value>
       </Info>
       <svg
        xmlns="http://www.w3.org/2000/svg"
        height="20px"
        width="20px"
        viewBox="0 0 512 512"
       >
        <path d="M256 8C119.034 8 8 119.033 8 256s111.034 248 248 248 248-111.034 248-248S392.967 8 256 8zm0 464c-118.664 0-216-96.055-216-216 0-118.663 96.055-216 216-216 118.664 0 216 96.055 216 216 0 118.663-96.055 216-216 216zm-80-304c-17.673 0-32 14.327-32 32s14.327 32 32 32 32-14.327 32-32-14.327-32-32-32zm160 0c-17.673 0-32 14.327-32 32s14.327 32 32 32 32-14.327 32-32-14.327-32-32-32zm4 144H232c-13.255 0-24 10.745-24 24v48c0 13.255 10.745 24 24 24h108c13.255 0 24-10.745 24-24v-48c0-13.255-10.745-24-24-24z" />
       </svg>
      </div>
     </Card>
    ))}
   </CardWrapper>
  </SectionContainer>
 );
}

export default RegionSection;
