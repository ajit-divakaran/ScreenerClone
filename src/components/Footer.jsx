import { faSun } from '@fortawesome/free-regular-svg-icons/faSun'
import { faDisplay, faMoon } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Footer = () => {
  return (
<div className='footer'>
        <div className='row w-100 py-4 px-4' style={{boxSizing:'border-box',gap:'0','--bs-gutter-x': '0'}}>
            <div className="d-none d-md-block col-md-6">
                <img src="https://cdn-static.screener.in/img/logo-black.f44abb4998d1.svg" width="128px" alt="" className='mb-4'  />
                <h4 id="responsive-font" style={{'--bs-font':'1rem'}} className='mb-4'>Stock analysis and screening tool</h4>
                <p className='m-0' id="responsive-font" style={{'--bs-font':'0.72rem',color:'#6e6d6d'}}>Mittal Analytics Private Ltd © 2009-2024</p>
                <p className='m-0 mb-3' id="responsive-font" style={{'--bs-font':'0.72rem',color:'#6e6d6d'}}>Made with love in India.</p>
                <p className='m-0 mb-1' id="responsive-font" style={{'--bs-font':'0.72rem',color:'#6e6d6d'}}>Data provided by C-MOTS Internet Technologies Pvt Ltd</p>
                <a href="#" id="responsive-font" style={{'--bs-font':'0.72rem',color:'#6e6d6d'}} className='common-hover'>Terms</a>
                <span id="responsive-font" style={{'--bs-font':'0.72rem',color:'#6e6d6d',margin:'0 3px'}}>&</span>
                <a href="" id="responsive-font" style={{'--bs-font':'0.72rem',color:'#6e6d6d'}} className='common-hover'>Privacy</a>
            </div>
            <div className="col-4 col-md-2 px-0">
                <ul style={{listStyle:'none',padding:'0'}}>
                    <li id="responsive-font" style={{fontWeight:'600', marginBottom:'0.3rem'}} >Product</li>
                    <li id="responsive-font" style={{color:"#5a5a5a",'--bs-font':'0.77rem',marginBottom:'0.25rem'}}>Premium</li>
                    <li id="responsive-font" style={{color:"#5a5a5a",'--bs-font':'0.77rem',marginBottom:'0.25rem'}}>What's new?</li>
                    <li id="responsive-font" style={{color:"#5a5a5a",'--bs-font':'0.77rem',marginBottom:'0.25rem'}}>Learn</li>
                    <button className='rounded' style={{border:'0.4px solid #625afc','--bs-font':'0.7rem',letterSpacing:'1px', padding:'5px 18px',color:'#625afc'}} id="responsive-font">INSTALL</button>
                </ul>
            </div>
            <div className="col-4 col-md-2 px-0">
                <ul style={{listStyle:'none',padding:'0'}}>
                    <li id="responsive-font" style={{fontWeight:'600', marginBottom:'0.3rem'}} >Team</li>
                    <li id="responsive-font" style={{color:"#5a5a5a",'--bs-font':'0.77rem',marginBottom:'0.25rem'}}>About us</li>
                    <li id="responsive-font" style={{color:"#5a5a5a",'--bs-font':'0.77rem',marginBottom:'0.25rem'}}>Support</li>
                </ul>
            </div>
            <div className="col-4 col-md-2 px-0">
                <ul id="responsive-font" className="modes" style={{listStyle:'none',padding:'0'}}>
                <li id="responsive-font" style={{fontWeight:'600',marginBottom:"0.3rem"}}>Theme</li>
                <li id="responsive-font" style={{'--bs-font':'0.77rem',marginBottom:'0.25rem',cursor:'pointer'}}><FontAwesomeIcon icon={faSun} className='me-2'/>Light</li>
                <li id="responsive-font" style={{'--bs-font':'0.77rem',marginBottom:'0.25rem',cursor:'pointer'}}>
                <FontAwesomeIcon icon={faMoon} className='me-2'/>  Dark
                    </li>
                <li id="responsive-font" style={{'--bs-font':'0.77rem',marginBottom:'0.25rem',cursor:'pointer'}}><FontAwesomeIcon icon={faDisplay} className='me-2'/>Auto</li>
                </ul>
            </div>
        </div>
            <div className="row d-md-none gap-0 w-100  px-4 ">
                    <div className="col-12">
                    <p className='m-0' id="responsive-font" style={{'--bs-font':'0.72rem',color:'#6e6d6d'}}>Mittal Analytics Private Ltd © 2009-2024</p>
                <p className='m-0 mb-3' id="responsive-font" style={{'--bs-font':'0.72rem',color:'#6e6d6d'}}>Made with love in India.</p>
                <p className='m-0 mb-1' id="responsive-font" style={{'--bs-font':'0.72rem',color:'#6e6d6d'}}>Data provided by C-MOTS Internet Technologies Pvt Ltd</p>
                <a href="#" id="responsive-font" style={{'--bs-font':'0.72rem',color:'#6e6d6d'}} className='common-hover'>Terms</a>
                <span id="responsive-font" style={{'--bs-font':'0.72rem',color:'#6e6d6d',margin:'0 3px'}}>&</span>
                <a href="" id="responsive-font" style={{'--bs-font':'0.72rem',color:'#6e6d6d'}} className='common-hover'>Privacy</a>
                    </div>
            </div>
</div>
  )
}

export default Footer