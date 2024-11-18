import React from "react";
import styled from "styled-components";

const Container = styled.div`
 background-color: white;
 display: flex;
 flex-direction: column;
 align-items: center;
 padding: 50px 20px;
 justify-content: center;

 @media (min-width: 768px) {
  padding: 50px 120px;
 }

 div {
  overflow-x: auto;
  max-width: 100%;
 }
`;
5;
const SectionTitle = styled.h1`
 text-align: center;
 font-size: 2rem;
 color: #118ab2;
 margin-top: 2rem;
 margin-bottom: 0.5rem;
`;

const SectionSubtitle = styled.span`
 display: block;
 text-align: center;
 color: #666;
 font-size: 1.2rem;
 margin-bottom: 2rem;
`;

const TableContainer = styled.table`
 margin: 2rem 0;
 font-size: 16px;
 table-layout: auto;
 border-collapse: collapse;

 @media (min-width: 768px) {
  table-layout: fixed;
 }

 th,
 td {
  border: 1px solid black;
  text-align: center;
  padding: 12px;
 }

 th {
  background-color: #118ab2;
  color: #fff;
 }

 tr:hover {
  background-color: #e0e0e0;
 }
`;

const DataCell = styled.td`
 text-align: ${(props) => props.align || "center"};
`;

const DataHeader = styled.th`
 text-align: ${(props) => props.align || "center"};
`;

function Table({ data, title, paragraph }) {
 const th = [
  { label: "No", align: "left" },
  { label: "Name", align: "left" },
  { label: "Positif", align: "right" },
  { label: "Sembuh", align: "right" }, 
  { label: "DiRawat", align: "right" },
  { label: "Meninggal", align: "right" },
 ];

 return (
  <Container>
   <SectionTitle>{title}</SectionTitle>
   <SectionSubtitle>{paragraph}</SectionSubtitle>
   <div>
    <TableContainer>
     <thead>
      <tr>
       {th.map((item, index) => (
        <DataHeader key={index} align={item.align}>
         {item.label}
        </DataHeader>
       ))}
      </tr>
     </thead>
     <tbody>
      {data.map((item, index) => (
       <tr key={index}>
        <DataCell>{index + 1}</DataCell>
        <DataCell>{item.name ? item.name : item.kota}</DataCell>
        <DataCell>
         {item.numbers?.kasus} {item.kasus}
        </DataCell>
        <DataCell>
         {item.numbers?.sembuh} {item.sembuh}
        </DataCell>
        <DataCell>
         {item.numbers?.dirawat} {item.dirawat}
        </DataCell>
        <DataCell>
         {item.numbers?.meninggal} {item.meninggal}
        </DataCell>
       </tr>
      ))}
     </tbody>
    </TableContainer>
   </div>
  </Container>
 );
}

export default Table;
