import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavbarContainer = styled.div`
 background-color: #118ab2;
 padding: 20px 100px;
 color: #ffffff;

 @media (max-width: 768px) {
  padding: 20px;
 }
`;

const NavbarWrapper = styled.nav`
 display: flex;
 flex-direction: column;
 align-items: start;

 @media (min-width: 768px) {
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
 }
`;

const BrandName = styled.h1`
 font-size: 2rem;
 margin-bottom: 1rem;

 @media (min-width: 768px) {
  margin-bottom: 0;
 }
`;

const NavList = styled.ul`
 display: flex;
 flex-direction: column;
 list-style: none;
 margin: 1rem;

 @media (min-width: 768px) {
  flex-direction: row;
 }
`;

const NavItem = styled.li`
 margin-bottom: 2rem;
 font-size: 1.5rem;

 @media (min-width: 768px) {
  margin: 0 1rem;
 }
`;

const NavLink = styled(Link)`
 color: #ffffff;
 text-decoration: none;
 transition: color 0.3s ease;

 &:hover {
  color: #64748b;
 }
`;

function Navbar() {
 return (
  <NavbarContainer>
   <NavbarWrapper>
    <BrandName>Covid ID</BrandName>
    <NavList>
     <NavItem>
      <NavLink to="provinsi">Provinsi</NavLink>
     </NavItem>
     <NavItem>
      <NavLink to="#">Indonesia</NavLink>
     </NavItem>
     <NavItem>
      <NavLink to="#">Global</NavLink>
     </NavItem>
     <NavItem>
      <NavLink to="#">About</NavLink>
     </NavItem>
    </NavList>
   </NavbarWrapper>
  </NavbarContainer>
 );
}

export default Navbar;
