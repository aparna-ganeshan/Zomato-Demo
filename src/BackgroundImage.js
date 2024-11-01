import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './BackgroundImage.css'; 
import Navbar from "./Narbar";
import SearchBar from "./SearchBar";
import ZomatoHome from "./ZomatoHome";

const BackgroundImage = ({ children }) => (
  <>
    <div className="background-image">
      <Navbar/>
      <SearchBar/>
    </div>
    <div>
    <ZomatoHome/>
    </div>
    </>
  );
  
  export default BackgroundImage;