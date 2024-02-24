import React from 'react';

function Footer() {
  return (
    <footer style={footerStyle}>
      <p>Shogi© 2024 </p>
    </footer>
  );
}

const footerStyle = {
  backgroundColor: '#6c926d',
  color: '#fff',
  textAlign: 'center',
  padding: '10px',
  position: 'relative',
  top:"auto",
  left: '0',
  bottom: '0',
  width: '100%',
};

export default Footer;
