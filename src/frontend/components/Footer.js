import React from 'react'
import './../../css/Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className=' footer'>
        {/* <div classNameName='text-center '>
            Copyright © 2022 <b>YouthMM</b>. All rights reserved.
        </div> */}


      <div className="footer-section">
          <div className="card shadow-lg p-3 py-5">
              <div className="row g-2">
                  <div className="col-lg-4 p-3">
                      <div className="fs-1 fw-bold m-0 p-0"><span className="hero-logo-1">YOUTH</span> <span className="hero-logo-2">MM</span></div>
                      <div className="mt-3">
                          <span className="title-fs"><b>YOUTH MM</b> </span>
                          <span >
                                      has been built for those who are studying web development. Start Register now and improve your skills by diving into our quality video contents.
                              </span>
                      </div>
                  </div>
                  <div className="col-lg-4 p-3 d-flex justify-content-lg-center">
                      <div>
                          <h4 className="title-fs">Navigation</h4>
                          <ul className="list-unstyled mt-3">
                              <li>
                                  <Link to='' className="text-decoration-none ">Home</Link>
                              </li>
                              <li className="my-2">
                                  <Link to="/posts" className="text-decoration-none ">Posts</Link>
                              </li>
                              
                              <li>
                                  <Link to='' onclick="logout()" className="text-decoration-none ">Logout</Link>
                              </li>
                          </ul>
                      </div>
                  </div>
                  <div className="col-lg-4 p-3 d-flex justify-content-lg-end">
                      <div>
                          <h4 className="title-fs">Contact Us</h4>
                          <div className="mt-3">
                              <div className="mb-2">
                                  <Link to='' className="text-decoration-none "><i className="fa-solid fa-phone me-2"></i> 09988808027</Link>
                              </div>
                              <div>
                                  <Link to='' className="text-decoration-none "><i className="fa-solid fa-envelope me-2"></i> aungzawphyo@gmail.com</Link>
                              </div>
                              <div className="mt-3">
                                  <Link to=''><i className="fa-brands fa-facebook fs-3 social-icon"></i></Link>
                                  <Link to='' className="text-danger"><i className="fa-brands fa-youtube fs-3 mx-3 social-icon"></i></Link>
                                  <Link to=''><i className="fa-brands fa-linkedin fs-3 social-icon"></i></Link>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>

    </div>
  )
}

export default Footer