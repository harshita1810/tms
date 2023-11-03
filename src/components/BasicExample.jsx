import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import { AiFillCaretDown } from "react-icons/ai";
import { AiFillPlusCircle } from "react-icons/ai";
import {useState} from 'react';
import './BasicExample.css';


function BasicExample() {

    const navigate = useNavigate();
    const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    };
    const nav = () => {
        navigate('/cards')
    }
    const igm = () => {
        navigate('/dashBoard')
    }
    const fom = () => {
      navigate('/login')
  }
    return (
      <>
    <Navbar expand="lg" className="bg-body-tertiary mainna" id='mainnav'>
      <Container fluid>
        <Navbar.Brand href="#">
        <img  src="https://tse2.mm.bing.net/th?id=OIP.kRR9X59XAfUXvjnqezpGsAAAAA&pid=Api&P=0&h=180"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
              onClick={igm}
            />
            </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Button variant="outline-success" className='bar' onClick={nav}>Trainers<AiFillCaretDown/></Button>
            {/* <Button variant="outline-success" className='bar'>Faculty<AiFillCaretDown/></Button> */}
            {/* <Button variant="outline-success" className='bar'>Subjects<AiFillCaretDown/></Button> */}
          </Nav>
          <div className="navbar-container">
              <div className={`icon-container ${isHovered ? 'hovered' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                  <p className='slide'>Add Trainer</p>
                  <p className="icon" onClick={fom}><AiFillPlusCircle size={35} /></p>
              </div>
     
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    {/* <DashBoard /> */}
    </>
  );
}

export default BasicExample;