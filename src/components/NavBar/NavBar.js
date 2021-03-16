import React from 'react';

const NavBar = () => {
    return (
        <div className="navBarMain">
            <nav class="navbar navbar-expand-lg navbar-light">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse navbarItems container" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 mt-5">
                            <li class="nav-item">
                                <a class="nav-link ms-5 h6 active" aria-current="page" href="/">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link ms-5 h6" href="/about">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link ms-5 h6" href="/dentalservices">Dental Services</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link ms-5 h6 text-light" href="/reviews">Reviews</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link ms-5 h6 text-light" href="/blog">Blog</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link ms-5 h6 text-light" href="/contact">Contacts Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;