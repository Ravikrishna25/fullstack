import React from 'react'
import PropTypes from "prop-types"
const AdminLayout = (children) => {
  return (
    <div className='admin_container'>
        <aside>
            {/* sidenav */}
        </aside>
        <main>
            {children}
        </main>
    </div>
  )
}
AdminLayout.propTypes = {
    children:PropTypes.node.isRequired
}
export default AdminLayout