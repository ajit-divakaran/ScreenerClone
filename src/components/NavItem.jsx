import React from 'react'

const NavItem = ({img,title}) => {
  return (
    <div className='nav-item-div'>
        <div className='d-flex flex-column align-items-center justify-content-center pt-2 rounded' style={{height:'fit-content',zIndex:'1'}}>
        <img src={img} width="35px" alt="" />
        <h5 className='mt-2' style={{fontSize:"15px"}}>{title}</h5>
        </div>
    </div>
  )
}

export default NavItem