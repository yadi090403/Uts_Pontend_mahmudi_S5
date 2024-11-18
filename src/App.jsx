import { Routes, Route } from "react-router-dom";
import ProvinsiPage from "./pages/Provinsi/Provinsi";
import HomeLayout from "./components/layouts/HomeLayout";
import data from "./utils/constants/provinces";
import { useState } from "react";
import DataContext from "./context/DataContext";


function App() {
 const [dataProvinsi, setDataProvinsi] = useState(data?.provinces || []);
 const ContextValue = { dataProvinsi, setDataProvinsi };

 return (
  <HomeLayout>
   <DataContext.Provider value={ContextValue}>
    <Routes>
     {<Route path="/provinsi" element={<ProvinsiPage />} />
     /* <Route path="/" element={<GlobalPage />} />
     <Route path="/indonesia" element={<IndonesiaPage />} /> */}
     {/* <Route path="/about" element={<AboutPage />} /> */}
    </Routes>
   </DataContext.Provider>
  </HomeLayout>
 );
}

export default App;
