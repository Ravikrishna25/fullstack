// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './assets/css/index.css'
// import { ToastContainer, toast } from 'react-toastify';
//   import 'react-toastify/dist/ReactToastify.css';
// import { BrowserRouter } from 'react-router-dom'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <ToastContainer
//      position="bottom-center"
//      autoClose={5000}
//      hideProgressBar={false}
//      newestOnTop={false}
//      closeOnClick
//      rtl={false}
//      pauseOnFocusLoss
//      draggable
//      pauseOnHover
//      theme="dark"
//      transition="Flip">

//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//     </ToastContainer>
//   </React.StrictMode>,
// )

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import App from './App.jsx';
import './assets/css/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToastContainer
      position="bottom-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      transition="Flip"
    />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
