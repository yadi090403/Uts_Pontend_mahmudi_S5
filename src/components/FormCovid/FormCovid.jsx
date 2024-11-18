import React, { useContext, useState } from "react";
import styled from "styled-components";
import DataContext from "../../context/DataContext";

const FormContainer = styled.div`
 height: auto;
 padding: 80px 20px;
 background-color: azure;
 display: flex;
 justify-content: center;
 align-items: center;

 @media (max-width: 768px) {
  padding: 60px 20px;
 }
`;

const FormWrapper = styled.div`
 display: flex;
 justify-content: space-between;
 align-items: center;
 width: 80%;
 max-width: 1200px;

 @media (max-width: 768px) {
  flex-direction: column;
  align-items: flex-start;
 }
`;

const FormSection = styled.div`
 width: 300px;
 font-size: 20px;

 @media (max-width: 768px) {
  width: 100%;
  margin-top: 40px;
 }
`;

const Title = styled.h1`
 font-size: 50px;
 text-align: center;
 margin-bottom: 1rem;

 @media (max-width: 768px) {
  font-size: 40px;
 }
`;

const Form = styled.form`
 margin: 40px 0;
`;

const FormGroup = styled.div`
 margin-bottom: 1rem;
`;

const Label = styled.label`
 display: block;
 margin-bottom: 0.5rem;
`;

const Input = styled.input`
 width: 100%;
 padding: 10px 5px;
 border-radius: 5px;
`;

const SubmitButton = styled(Input)`
 margin-top: 20px;
 text-align: center;
 background-color: #118ab2;
 border-style: none;
 color: #fff;
 cursor: pointer;

 &:hover {
  background-color: #64748b;
 }
`;

const ImageWrapper = styled.div`
 padding: 20px;

 @media (max-width: 768px) {
  padding: 0;
  width: 100%;
  text-align: center;
 }
`;

const Image = styled.img`
 width: 400px;
 height: 401.79px;

 @media (max-width: 768px) {
  width: 100%;
  max-width: 300px;
  height: auto;
 }
`;

const Select = styled.select`
 width: 100%;
 padding: 10px 5px;
 border-radius: 5px;
 font-size: 16px;
 padding-right: 30px;
`;

function FormCovid() {
 const { dataProvinsi, setDataProvinsi } = useContext(DataContext);
 const [newData, setNewData] = useState({
  kota: "",
  status: "",
  jumlah: 0,
 });

 const handleInputChange = (e) => {
  const { name, value } = e.target;
  setNewData((prevData) => ({
   ...prevData,
   [name]: value,
  }));
 };

 const handleSubmit = (e) => {
  e.preventDefault();
  const { kota, status, jumlah } = newData;
  const existingData = dataProvinsi.find((data) => data.kota === kota);

  if (existingData) {
   // Update existing data
   const updatedData = {
    ...existingData,
    [status]: existingData[status] + parseInt(jumlah),
   };
   const updatedDataProvinsi = dataProvinsi.map((data) =>
    data.kota === kota ? updatedData : data,
   );
   setDataProvinsi(updatedDataProvinsi);
  } else {
   const updateData = {
    kota,
    kasus: status === "kasus" ? jumlah : 0,
    sembuh: status === "sembuh" ? jumlah : 0,
    meninggal: status === "meninggal" ? jumlah : 0,
    dirawat: status === "dirawat" ? jumlah : 0,
   };
   setDataProvinsi([...dataProvinsi, updateData]);
  }

  setNewData({
   kota: "",
   status: "",
   jumlah: 0,
  });
 };

 return (
  <FormContainer>
   <FormWrapper>
    <ImageWrapper>
     <Image src="/77n.png" alt="medical" />
    </ImageWrapper>
    <FormSection>
     <Title>Form Covid</Title>
     <hr />
     <Form onSubmit={handleSubmit}>
      <FormGroup>
       <Label>Provinsi</Label>
       <Select name="kota" value={newData.kota} onChange={handleInputChange}>
        <option value=""></option>
        {dataProvinsi.map((data, index) => (
         <option key={index} value={data.kota}>
          {data.kota}
         </option>
        ))}
       </Select>
      </FormGroup>
      <FormGroup>
       <Label>Status</Label>
       <Select
        name="status"
        value={newData.status}
        onChange={handleInputChange}
       >
        <option value=""></option>
        <option value="kasus">Positif</option>
        <option value="sembuh">Sembuh</option>
        <option value="meninggal">Meninggal</option>
        <option value="dirawat">Dirawat</option>
       </Select>
      </FormGroup>
      <FormGroup>
       <Label>Jumlah</Label>
       <Input
        type="number"
        name="jumlah"
        value={newData.jumlah}
        onChange={handleInputChange}
       />
      </FormGroup>
      <SubmitButton type="submit" value="Submit" />
     </Form>
    </FormSection>
   </FormWrapper>
  </FormContainer>
 );
}

export default FormCovid;
