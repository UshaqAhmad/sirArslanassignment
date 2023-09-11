import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'

function Navbar() {
    return (
<div className="ushaq111">
        <nav class="navbar navbar-expand-lg navbar-info  ">
            <div class="container-fluid">
                <img className='logoimg' src="https://infinitymining.com.au/wp-content/uploads/2022/03/lithium-rock-2.png"  alt="" />
                {/* <a class="navbar-brand bb mx-5" href="#"> e-<span className='text-info'>commerce</span> </a> */}
                <button class="navbar-toggler bg-primary" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon bg-light"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mx-auto mb-2 mb-lg-0 gap-5">
                        <li class="nav-item">
                            <Link class="nav-link active bb" aria-current="page" to="/"><span className='text-info'>Home</span> </Link>

                        </li>
                        <li class="nav-item">
                            <Link class="nav-link bb" to="/Products">Products</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link bb" to="/Newitems">New Items</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link bb" to="/ContactUs">AboutUs</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link bb" to="/SignUp">Signup</Link>
                        </li>
                        
                        
                       
                      

                    </ul>
                   
                </div>
            </div>
         
        </nav>
        </div>

    )
}

export default Navbar
