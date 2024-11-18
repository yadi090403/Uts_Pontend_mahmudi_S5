import { useEffect, useState } from "react";
import CardSection from "../../components/CardSection/CardSection";
import axios from "axios";
import Table from "../../components/Table/Table";
import Hero from "../../components/Hero/Hero";

function IndonesiaPage() {
 const [dataIndonesia, setDataIndonesia] = useState([]);
 const [dataProvinsi, setDataProvinsi] = useState([]);

 useEffect(() => {
  const fetchData = async () => {
   try {
    const response = await axios.get(
     "https://covid-fe-2023.vercel.app/api/indonesia.json",
    );
    const result = response.data;
    setDataIndonesia(result.indonesia);
    setDataProvinsi(result.regions);
   } catch (error) {
    console.log(error);
   }
  };

  fetchData();
 }, []);
 return (
  <>
   <Hero />
   <CardSection
    title={"Indonesia Situation"}
    paragraph={"Data Covid Berdasarkan Indonesia"}
    data={dataIndonesia}
   />
   <Table
    title={"Situation by Provinces"}
    paragraph={"Data Covid Berdasarkan Provinsi"}
    data={dataProvinsi}
   />
  </>
 );
}

export default IndonesiaPage;
