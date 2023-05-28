import Nav from 'react-bootstrap/Nav';

function ColorSchemesExample() {
  return (
    <>
    <Nav fill variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/AddBlogs">Add Blog</Nav.Link>
      </Nav.Item>
       </Nav>
    </>
  );
}

export default ColorSchemesExample;