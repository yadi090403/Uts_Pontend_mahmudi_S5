import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
 background-color: #118ab2;
 padding: 20px 100px;
 color: #ffffff;

 @media (max-width: 768px) {
  padding: 20px;
 }
`;

const NavContainer = styled.div`
 display: flex;
 align-items: center;
 margin-top: 1rem;
 flex-direction: row;
 justify-content: space-between;
`;

const FooterBrand = styled.div`
 font-size: 2rem;
 font-weight: bold;
`;

const FooterList = styled.ul`
 display: flex;
 flex-direction: column;
 list-style: none;
 padding: 0;
 margin: 1rem 0 0 0;

 @media (min-width: 768px) {
  flex-direction: row;
  margin: 0;
 }
`;

const FooterItem = styled.li`
 margin-bottom: 1rem;
 font-size: 1.5rem;

 @media (min-width: 768px) {
  margin: 0 1rem;
 }
`;

function Footer() {
 return (
  <FooterContainer>
   <NavContainer>
    <div>
     <FooterBrand>Covid ID</FooterBrand>
     <h4>Developed by mahmudi</h4>
    </div>
    <FooterList>
     <FooterItem>Provinsi</FooterItem>
     <FooterItem>Indonesia</FooterItem>
     <FooterItem>Global</FooterItem>
     <FooterItem>About</FooterItem>
    </FooterList>
   </NavContainer>
  </FooterContainer>
 );
}

export default Footer;
