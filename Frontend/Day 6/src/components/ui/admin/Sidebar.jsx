
// import React from 'react';
// import { AppstoreOutlined ,BankOutlined,SettingOutlined,BookOutlined} from '@ant-design/icons';
// import { Menu } from 'antd';
// import logo from "../../../assets/images/logo.svg";
// import { Typography } from '@mui/material';

// function getItem(label, key, icon, children, type) {
//   return {
//     key,
//     icon,
//     children,
//     label,
//     type,
//   };
// }

// const items = [
//   getItem('Dashboard', '1', <AppstoreOutlined />,'/dashboard'),
//   getItem('Institute', '2', <BankOutlined />,'academy'),
//   getItem('Course', '4', <BookOutlined />,'course'),
//   getItem('Learner', '3', <AppstoreOutlined />),
//   // getItem('Option 5', '5', <AppstoreOutlined />),
//   // getItem('Option 6', '6', <AppstoreOutlined />),
//   {
//     key: 'logout',
//     label: 'Log Out',
//     icon: <SettingOutlined />,
//     type: 'item',
//   },
// ];

// const Sidebar = () => {
//   const onClick = (e) => {
//     console.log('click ', e);
//   };

//   return (
//     <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
//       {/* Logo */}
//       <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: '', marginBottom: '20px', marginTop: '20px' }}>
//         <img src={logo} alt="Logo" style={{ maxHeight: '80px', maxWidth: '100%', margin: '0 auto' }} />
//       </div>
//       <center>

//       <Typography variant='h5' style={{color:"#6c926d",marginBottom:"20px"}}>
//         Welcome Admin!!!!
//       </Typography>
//       </center>

//       {/* Menu */}
//       <Menu
      
//         onClick={onClick}
//         style={{
//           width: 256,
          
//         }}
//         defaultSelectedKeys={['1']}
//         defaultOpenKeys={['sub1']}
//         mode="inline"
//         items={items}
//       />
      
//       {/* Logout Button */}
//       <div style={{ marginTop: 'auto', padding: '16px', background: 'rgba(255, 255, 255, 0.08)' }}>
//         <div  style={{ cursor: 'pointer', color: 'white', textAlign: 'center' }}>
//           Log Out
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;
import React from 'react';
import { Link } from 'react-router-dom';
import { AppstoreOutlined, BankOutlined, SettingOutlined, BookOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import logo from "../../../assets/images/logo.svg";
import { Typography } from '@mui/material';

function getItem(label, key, icon, children, type, path = null) {
  return {
    key,
    icon,
    children,
    label,
    type,
    path,
  };
}

const items = [
  getItem('Dashboard', '1', <AppstoreOutlined />, null, 'item', '/reign/admin/dashboard'),
  getItem('Institute', '2', <BankOutlined />, null, 'item', '/reign/admin/academy'),
  getItem('Course', '4', <BookOutlined />, null, 'item', '/reign/admin/course'),
  getItem('Learner', '3', <AppstoreOutlined />, null, 'item', '/reign/admin/learner'),
  {
    key: 'logout',
    label: 'Log Out',
    icon: <SettingOutlined />,
    type: 'item',
    path: '/reign/login',
  },
];

const Sidebar = () => {
  const onClick = (e) => {
    console.log('click ', e);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      {/* Logo */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: '', marginBottom: '20px', marginTop: '20px' }}>
        <img src={logo} alt="Logo" style={{ maxHeight: '80px', maxWidth: '100%', margin: '0 auto' }} />
      </div>
      <center>
        <Typography variant='h5' style={{ color: "#6c926d", marginBottom: "20px" }}>
          Welcome Admin!!!!
        </Typography>
      </center>

      {/* Menu */}
      <Menu
        onClick={onClick}
        style={{
          width: 256,
        }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
      >
        {items.map(item => {
          if (item.type === 'item') {
            return (
              <Menu.Item key={item.key} icon={item.icon}>
                <Link to={item.path}>{item.label}</Link>
              </Menu.Item>
            );
          } else {
            return (
              <Menu.SubMenu key={item.key} icon={item.icon} title={item.label}>
                {item.children.map(subItem => (
                  <Menu.Item key={subItem.key}>
                    <Link to={subItem.path}>{subItem.label}</Link>
                  </Menu.Item>
                ))}
              </Menu.SubMenu>
            );
          }
        })}
      </Menu>

      {/* Logout Button */}
      <div style={{ marginTop: 'auto', padding: '16px', background: 'rgba(255, 255, 255, 0.08)' }}>
        <div style={{ cursor: 'pointer', color: 'white', textAlign: 'center' }}>
          <Link to="/logout" style={{ color: 'white' }}>Log Out</Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
