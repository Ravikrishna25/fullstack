import React from "react";
import Loader from "react-js-loader";
// import "../../assets/css/user.css";
function Loaders() {
  return (
    <div style={{display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh"}} >
      <Loader
      
        type="bubble-top"
        bgColor={"#6c926d"}
        color={"#6c926d"}
        size={100}
        
      />
    </div>
  );
}

export default Loaders;
// import React from 'react'
// import "../../assets/css/user.css"
// function Loader() {
//   return (
//     <div className='loader'>

//     </div>
//   )
// }

// export default Loader
