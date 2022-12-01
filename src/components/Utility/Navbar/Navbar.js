import React, { Component } from 'react'
import '../Navbar/Navbar.css'
import { Container, Form, Nav, Navbar } from 'react-bootstrap'
import logo from '../../../images/logo.png'
import login from '../../../images/login.png'
import cart from '../../../images/cart.png'
import { Link } from 'react-router-dom'

class NavBar extends Component {
    state = {clicked: false}
    handleClick=()=> {
        this.setState({clicked: !this.state.clicked})
    }

    render(){
        return (
            <Navbar className="sticky-top" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        <Link to="/">
                            <img src={logo} alt='' className='logo' />
                        </Link>
                    </Navbar.Brand>
                    <div className='toggler'>
                        <div id='nav-list' className={this.state.clicked ? "active" : "#nav-list"}>
                            <Form.Control
                                type="search"
                                placeholder="ابحث..."
                                className="me-2 text-center search"
                                aria-label="Search"
                            />
                            <Nav className="me-auto nav">
                                <Link to='/Login' className="nav-link nav-text d-flex mt-3 justify-content-center">
                                    <img src={login} className="login-img" alt="sfvs" />
                                    <p style={{ color: "white" }}>دخول</p>
                                </Link>
                                
                                <Link to='/Cart' className="nav-link nav-text d-flex mt-3 justify-content-center"
                                    style={{ color: "white" }}>
                                    <img src={cart} className="login-img" alt="sfvs" />
                                    <p style={{ color: "white" }}>العربه</p>
                                </Link>
                            </Nav>
                        </div>
                        <div className='menuIcon text-white fs-4 d-none' onClick={this.handleClick}>
                            <i id='bar' className={this.state.clicked ? 'fa-solid fa-times' : 'fa-solid fa-bars'}></i>
                        </div>
                    </div>
                </Container>
            </Navbar>
        )
    }
}

export default NavBar