import React from "react";
import { Nav, NavLink, NavMenu } 
    from "./navbarelements";
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/" activeStyle>
            Főoldal
          </NavLink>
          <NavLink to="/concerts" activeStyle>
            Koncertek
          </NavLink>
          <NavLink to="/about" activeStyle>
            Rólunk
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;