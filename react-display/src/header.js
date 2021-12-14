import React from 'react';
import { Navbar } from 'reactstrap';
import { Nav } from 'reactstrap';
import { NavLink } from 'reactstrap';
import { NavbarBrand } from 'reactstrap';

export const Header = () => {
    return (
        <>
        <Navbar color='light' expand='lg' light>
            <NavbarBrand href='#home'>Web Scraper</NavbarBrand>
            <Nav className='me-auto'>
                <NavLink href='/'>Home</NavLink>
                <NavLink href='/login'>Login</NavLink>
                <NavLink href='/history'>History</NavLink>
            </Nav>
        </Navbar>
        </>
    )
}