import './App.css';
import { Button, Card, Container, Form, FormControl, Nav, Navbar, NavDropdown, Table } from 'react-bootstrap';




function App() {
  return (
    <div className="App">
      
      <Navbar bg="warning" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">Around the world</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="#action1">Home</Nav.Link>
        <Nav.Link href="#action2">Abouy Us</Nav.Link>
        <NavDropdown title="Destination" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Something else here
          </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#">
          Contact
        </Nav.Link>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
<div className='ttr'> <h1>All destination for tourism with the best offers </h1></div>
<div className='cartArea'>
      <Card style={{ width: '18rem',borderRadius:'10px' }}>
  <Card.Img className='cmg' variant="top" src="./berlin.jpg" alt='berlin'/>
  <Card.Body>
    <Card.Title>Berlin</Card.Title>
    <Card.Text>
    Berlin is the Germany's capital city (again since 1990), has an area of 892 km² , with a population of 3,4 million inhabitants, Germany's largest city and one of the most important cities in Europeespecially in tourism.
    </Card.Text>
    <Button variant="primary">Submit</Button>
  </Card.Body>
</Card>

<Card style={{ width: '18rem',borderRadius:'10px' }}>
  <Card.Img className='cmg' variant="top" src="./bangkok.jpg" alt='bangkok'/>
  <Card.Body>
    <Card.Title>Bangkok</Card.Title>
    <Card.Text>
    Bangkok,officially known in Thai as Krung Thep Maha Nakhon , is the capital and most populous city of Thailand. The city occupies 1,568.7 square kilometres (605.7 sq mi) in the Chao Phraya River delta in central Thailand.
    </Card.Text>
    <Button variant="primary">Submit</Button>
  </Card.Body>
</Card>

<Card style={{ width: '18rem',borderRadius:'10px' }}>
  <Card.Img className='cmg' variant="top" src="./california.jpg" alt='california'/>
  <Card.Body>
    <Card.Title>California</Card.Title>
    <Card.Text>
    California is a state in the Western United States. California borders Oregon to the north, Nevada and Arizona to the east, the Mexican state of Baja California to the south; and has a coastline along the Pacific Ocean to the west.
    </Card.Text>
    <Button variant="primary">Submit</Button>
  </Card.Body>
</Card>
</div>

<div className='Tbl'>
  <h1 className='ttt'>Mars's offers table</h1>
<Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>Offers</th>
      <th>Destination</th>
      <th>Flight Company</th>
      <th>Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Berlin</td>
      <td>Lufthansa</td>
      <td>850$</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Bangkok</td>
      <td>Turkish Airline</td>
      <td>750$</td>
    </tr>
    <tr>
      <td>3</td>
      <td>California</td>
      <td>Fly US</td>
      <td>800$</td>
    </tr>
  </tbody>
</Table>
</div>
<footer>
  <p>Copyright © 1998-2021</p>
  <p>Mail: <a href="AroundTheWorld@gmail.com">AroundTheWorld@gmail.com</a></p>
</footer>
    </div>
  );
}

export default App;
