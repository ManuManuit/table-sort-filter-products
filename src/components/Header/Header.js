import React from 'react'
import { Link } from 'react-router-dom';

/**Styles */
import './Style.css'

const Header = () => {
    return (
        <div className="header">
            <div className="header__logo">
                <Link to="/">
                    <img src="https://www.gedesco.es/contenido/uploads/logo-gedesco-1.png" alt="logo_gedesco" />
                </Link>
            </div>
            <div className="header__links">
                <span>
                    <Link to="/table">Table</Link>
                </span>
                <span>
                    <Link to="/products">Products</Link>
                </span>
            </div>
        </div>
    )
}

export default Header
