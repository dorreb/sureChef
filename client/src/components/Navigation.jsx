import { useState } from "react";
import {
  Button,
  Container,
  Nav,
  Navbar,
  Offcanvas,
  Image
} from "react-bootstrap";
import Logout from "./Logout";
// import LightSwitchButton from "./LightSwitchButton.jsx"
import './Navigation.css'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCloudMoon } from "@fortawesome/free-solid-svg-icons";
import littleRobot from "../assets/littleRobot.gif"
// import { ThemeContext } from "./Dashboard";

function Navigation(props) {
  const [open, setOpen] = useState(false);

  const handleClick = (link) => {
    setOpen(false);
    props.onClick(link);
  };

  return (
    // This is work around testing...
    // <ThemeContext.Consumer> 
    //   {({theme, toggleTheme}) => (
    <Navbar expanded={open} expand={false} className="nav-header">
      <Navbar.Brand><strong>SureChef</strong></Navbar.Brand>
      <Navbar.Toggle
        aria-controls="offcanvasNavbar"
        onClick={() => setOpen(true)}
      />
      <Navbar.Offcanvas
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
        placement="end"
      >
        <Offcanvas.Header closeButton onClick={() => setOpen(false)}>
          <Offcanvas.Title id="offcanvasNavbarLabel" style={{ fontFamily: "Astro"}}>
            <strong>SureChef</strong>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="justify-content-end">
            {/* <div className='dark-mode'>
              <FontAwesomeIcon icon={faCloudMoon} />
              <LightSwitchButton />
            </div> */}
            <section className ='button-list'>
                <Button className='nav-button' onClick={() => handleClick("mykitchen")} variant="outline-dark">
                  My Kitchen
                </Button>
                <Button className='nav-button' onClick={() => handleClick("groceryList")} variant="outline-dark">
                  Grocery List
                </Button>
                <Button className='nav-button' onClick={() => handleClick("recipe")} variant="outline-dark">
                  Recipes
                </Button>
                <Button className='nav-button' onClick={() => handleClick("dashboard")} variant="outline-dark">
                  Dashboard
                </Button>
                {/* <Button className='nav-button' onClick={() => handleClick("saverecipe")} variant="outline-dark">
                  TEMP Save Recipe
                </Button>
                <Button className='nav-button' onClick={() => handleClick("loadingrecipe")} variant="outline-dark">
                  TEMP Loading Recipe
                </Button> */}
              </section>
          </Nav>
        </Offcanvas.Body>
          <div className='logout-container'>
          <hr className="solid-nav"/>
            <div className='nav-user'>
            Logged in as <strong>{props.user.name}</strong>
          </div>
          <Image src={littleRobot} alt="Robot Gif" className="w-50"/>
          <Logout />
        </div>
      </Navbar.Offcanvas>
    </Navbar>
    //   )}
    // </ThemeContext.Consumer>
  );
}

export default Navigation;
