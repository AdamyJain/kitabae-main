import React from "react";
import LandingPage from "./Components/LandingPage";
import LP_slide2 from "./Components/LP_slide2";
import LP_slide3 from "./Components/LP_slide3";
import LP_slide4 from "./Components/LP_slide4";
import LP_slide5 from "./Components/LP_slide5";
// import Upload_page from "./Components/Upload_page";

function App() {

  return (
   <div className="app">
     <LandingPage/>
     <LP_slide2/>
     <LP_slide3/>
     <LP_slide4/>
     <LP_slide5/>
     {/* <Upload_page/> */}
     
   </div>
  );
} 

export default App; 