import React from 'react'
import NavItem from './NavItem'
const FixedDownNav = () => {
  return (
    <div className='fixed-footer d-none w-100 bg-dark px-5 pb-1 pt-2 d-flex justify-content-between ' >

        <NavItem img={'https://cdn-icons-png.flaticon.com/128/5868/5868234.png'} title={'Feed'} />
        <NavItem img={'https://cdn-icons-png.flaticon.com/128/5752/5752153.png'} title={'Screens'}/>
     <div><button className='rounded-circle circle-btn'><img src="https://cdn-icons-png.flaticon.com/128/151/151773.png" width="25px"alt="" /></button></div>
        <NavItem img={'https://cdn-icons-png.flaticon.com/128/2963/2963823.png'} title={'Tools'}/>
        <NavItem img={'https://cdn-icons-png.flaticon.com/128/1077/1077114.png'} title={'Account'}/>

    </div>
  )
}

export default FixedDownNav