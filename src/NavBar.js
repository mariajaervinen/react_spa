import React from 'react'
import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <nav class="navbar navbar-expand-md navbar-light bg-light fixed-top">
            <a class="navbar-brand" href="#">SPA Example</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <Link className='nav-link' to='/'>Home</Link>
                    </li>
                    <li class="nav-item">
                        <Link className='nav-link' to='/about'>About</Link>
                    </li>
                    <li class="nav-item">
                        <Link className='nav-link' to='/contactus'>Contact Us</Link>
                    </li>
                </ul>
            </div>
        </nav>
            )
}
