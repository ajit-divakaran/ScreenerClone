import { faAngleRight, faBullhorn } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const RightHover = ({head,icon}) => {
  return (
    <div className='px-2 d-flex justify-content-between common-hover right-hover'>
<div className='d-flex justify-content-center gap-2'>
            <FontAwesomeIcon className="fa-duotone"icon={icon}/>
            <h4 id='responsive-font' style={{'--bs-font':'0.8rem',margin:0}}>{head}</h4>
</div>
        <FontAwesomeIcon icon={faAngleRight}/>
    </div>
  )
}

export default RightHover

//faBullhorn