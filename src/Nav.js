import React from 'react'
import {Link} from 'react-router-dom'
import {} from 'bootstrap/dist/css/bootstrap.min.css'

function Nav() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to='/' className="navbar-brand" >Aphatheology</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                

                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        {/* <li className="nav-item active">
                            <Link to='/' className="nav-link" >Home </Link>
                        </li> */}
                        
                    </ul>                    
                </div>
            </nav>
        </div>
    )
}

export default Nav