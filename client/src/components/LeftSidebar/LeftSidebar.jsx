import React from 'react'
import './LeftSidebar.css'
import  {NavLink} from 'react-router-dom'
import Globe from '../../assets/Globe.svg'

const LeftSidebar = () => {
  return (
    <div className='left-sidebar'>
        <nav className='side-nav'>
            <NavLink to='/'  className="side-nav-links" activeClassname="active" /*style={{ paddingLeft: '40px'}}*/>
                <p className='dark-theme'>Home</p>
            </NavLink>
            <div className='side-nav-div'>
                    <div><p className='dark-theme'>PUBLIC</p></div>
                    <NavLink to='/Questions' className="side-nav-links" activeClassname="active">
                        <img src={Globe} alt="Globe" />
                        <p style={{paddingLeft:'10px'}} className='dark-theme'>Questions</p>
                    </NavLink>
                    <NavLink to='/Tags' className="side-nav-links" activeClassname="active" style={{paddingLeft:'40px'}}>
                        <p className='dark-theme'>Tags</p>
                    </NavLink>
                    <NavLink to='/Users' className="side-nav-links" activeClassname="active" style={{paddingLeft:'40px'}}> 
                        <p className='dark-theme'>Users</p>
                    </NavLink>
                   
            </div>

        </nav>
    </div>
  )
}

export default LeftSidebar

//changed className={(navData) => (navData.isActive ? "active side-nav-links" : 'none')}