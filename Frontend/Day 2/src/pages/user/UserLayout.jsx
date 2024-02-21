import React from 'react'
import PropTypes from "prop-types";
import Navbar from './Header';
function UserLayout({children}) {
  return (
    <div className='user_container'>
        <header><Navbar /></header>
        <main>
            {children}
        </main>
        <footer></footer>
    </div>
  )
}

UserLayout.propTypes = {
    children : PropTypes.node.isRequired   //send component as a children for validating we use node
}
export default UserLayout