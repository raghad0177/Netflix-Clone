import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function navbar() { // Changed the function name to start with a capital letter
  return (

    <Navbar style={{ paddingLeft: '20px', marginBottom: '20px', backgroundColor: '#BE857A' }}>

      <Navbar.Brand style={{ fontSize: '32px', color: '#9F000F', fontWeight: 'bold' }}>
        <img style={{ height: '60px', width: '60px' }} src='https://static.vecteezy.com/system/resources/previews/017/396/804/non_2x/netflix-mobile-application-logo-free-png.png' />
        NetFlix</Navbar.Brand>

      <Navbar.Collapse >
        <Nav className="me-auto">
          <Nav.Link style={{ fontSize: '20px', color: '#9F000F' }} href="/" className="navbar-link">Home</Nav.Link>
     
          <Nav.Link style={{ fontSize: '20px', color: '#9F000F'}} href="/FavList" className="navbar-link">Favourite List</Nav.Link>
        </Nav>
      </Navbar.Collapse>

    </Navbar>

  );
}
export default navbar;