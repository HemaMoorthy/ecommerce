import React from 'react'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Ecommerce</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/dashboard">DashBoard</a>
                            </li> 
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/addtocart">Add to Cart</a>
                            </li>
                            {/* <li className="nav-item">
                                <a className="nav-link" href="#">DashBoard</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Add to Cart</a>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar