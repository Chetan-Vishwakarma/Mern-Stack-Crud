import { AppBar, Toolbar,styled } from '@mui/material'
import { NavLink } from 'react-router-dom';

const Header = styled(AppBar)`
background:#111111
`;

const Tabs = styled(NavLink)`
font-size:20px;
margin-right:20px;
color:inherit;
text-decoration:none;
`;

function NavBar() {
  return (
    <Header position='static'>
      <Toolbar>
        <Tabs to='/'>Home Page</Tabs>
        <Tabs to='/all'>All Users</Tabs>
        <Tabs to='/add'>Add Users</Tabs>
      </Toolbar>
    </Header>
  )
}

export default NavBar