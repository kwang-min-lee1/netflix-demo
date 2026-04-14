import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Outlet, Link, useNavigate } from 'react-router-dom';

const AppLayout = () => {

  const [keyword, setKeyword] = useState("")
  const navigate = useNavigate()

  const searchByKeyword=(event)=>{
    event.preventDefault()   // form 이므로 항상 작성 -> 리프레시를 막아줌
    // url을 바꿔주기
    navigate(`/movies?q=${keyword}`)
    setKeyword("")   // 서치박스에 setKeyword 값 비워주기
  }
 
  return (
    <div style={{ backgroundColor: "black", minHeight: "100vh", color: "white" }}>
     <Navbar  variant="dark" expand="lg" style={{ backgroundColor: "#000" }} >
      <Container fluid>
        <Navbar.Brand href="#">
            <img
                src="/netflix-logo.png"
                alt="Netflix Logo"
                style={{ height: "40px"  }}
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/movies">Movie</Nav.Link>
           
            
          </Nav>
          <Form className="d-flex" onSubmit={searchByKeyword}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={keyword}
              onChange={(event) => setKeyword(event.target.value)}
            />
            <Button variant="outline-danger" type="submit">
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Outlet/>   
    {/* Outlet: 라우터 안에 있는 자손들을 가지고 오도록 도와주는 컴포넌트 */}
    </div>
  )
}

export default AppLayout