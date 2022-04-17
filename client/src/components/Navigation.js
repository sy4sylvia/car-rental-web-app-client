import React from 'react';
import { useSelector } from 'react-redux';
import {Link, Outlet} from 'react-router-dom';


function Navigation() {
    return (
        <div>
            <nav
                style={{
                    borderBottom: "solid 1px",
                    paddingBottom: "1rem",
                }}
            >
                <Link to="/home">Home</Link> |{" "}
                <Link to="/register">Register</Link> |{" "}
                <Link to="/login">Log in</Link> |{" "}
                <Link to="/employee">Employee</Link> |{" "}
                <Link to="/test">Test</Link>
            </nav>
            <Outlet />
        </div>
    );



    // return (
    //     <Navbar collapseOnSelect expand="sm" bg="light" variant="light">
    //         <Container>
    //             <Navbar.Brand href="/">WOW</Navbar.Brand>
    //             <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    //             <Navbar.Collapse id="responsive-navbar-nav">
    //                 <Nav className="me-auto">
    //                     <Nav.Link href="/login">Log in</Nav.Link>
    //                     <Nav.Link href="/register">Register</Nav.Link>
    //
    //                     <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
    //                         <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
    //                         <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
    //                         <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
    //                         <NavDropdown.Divider />
    //                         <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
    //                     </NavDropdown>
    //                 </Nav>
    //                 <Nav>
    //                     <Nav.Link href="#deets">More deets</Nav.Link>
    //                     <Nav.Link eventKey={2} href="#memes">
    //                         Dank memes
    //                     </Nav.Link>
    //                 </Nav>
    //             </Navbar.Collapse>
    //         </Container>
    //     </Navbar>
    // );
}

export default Navigation;
// export default function Navigation() {
//
//     const [token, setToken] = React.useState(1000);
//
//      const token = useSelector(state => state.user.token);
//      const username = useSelector(state => state.user.username);
//
//     return (
//         <Navbar collapseOnSelect expand="sm">
//             <Navbar.Brand href="/"><img className="logo" src={logo} alt="Car Rentals" /></Navbar.Brand>
//             <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//             <Navbar.Collapse id="responsive-navbar-nav">
//                 <Nav className="mr-auto" />
//                 <Nav>
//                     {
//                         token === undefined || token === 'undefined' || token === ' '
//                             ? (
//                                 <>
//                                     <Link className="nav-link white" to="/login">SIGN IN</Link>
//                                     <Link className="nav-link" to="/register">
//                                         <span className="btn-menu">SIGN UP</span>
//                                     </Link>
//                                 </>
//                             )
//                             : (
//                                 <>
//                                     <Link className="nav-link white" to="/cars">Cars</Link>
//                                     <Link className="nav-link white" to="/favourites">Favourite Cars</Link>
//                                     <Link className="nav-link white" to="/logout">
//                                         LOGOUT
//                                         {' '}
//                                         {username}
//                                     </Link>
//                                 </>
//                             )
//                     }
//                 </Nav>
//             </Navbar.Collapse>
//         </Navbar>
//     );
// }
