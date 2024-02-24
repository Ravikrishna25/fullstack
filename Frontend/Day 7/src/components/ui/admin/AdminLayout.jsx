import React from 'react'
import PropTypes from "prop-types"
import Sidebar from './Sidebar'
import "../../../assets/css/admin.css"
function AdminLayout({ children }) {
  return (
    <div className='admin_container'>
        <aside>
            {/* sidenav */}
            <Sidebar />
        </aside>
        <main style={{width:"80vw",overflow:"auto", scrollbarWidth: "none" /* For Firefox */,
          "-ms-overflow-style": "none" /* For IE and Edge */,
          "::-webkit-scrollbar": {
            display: "none" /* For Chrome, Safari, and Opera */,
          },}}>
            {children}
        </main>
    </div>
  )
}
AdminLayout.propTypes = {
  children: PropTypes.node.isRequired, //send component as a children for validating we use node
}
export default AdminLayout