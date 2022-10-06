
// import './App.css';

import { Route, Routes } from "react-router-dom";
import Addpro from "./components/Addpro";
import Admin from "./components/Admin";
import Datatable from "./components/Datatable";
import Form from "./components/form";
import General from "./components/general";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import View_products from "./components/View_products";


function App() {
  return (
    <>
 <Routes>
  <Route path="/" element={<Admin/>}/>
  <Route path="/Login" element={<Login/>}/>
  <Route path="/Register" element={<Register/>}/>
  <Route path="/General" element={<General/>}/>
  <Route path="/Datatable" element={<Datatable/>}/>
  {/* <Route path="/Product" element={<Product/>}/> */}
  <Route path="/Form" element={<Form/>}/>
  <Route path="/Home" element={<Home/>}/>
  <Route path="/View_products" element={<View_products/>}/>
  <Route path="/Addpro" element={<Addpro/>}/>

 </Routes>
  
     </>
  );
}

export default App;
