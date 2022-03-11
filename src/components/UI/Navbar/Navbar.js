import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="navbar__links">
                <NavLink className={'navbar__link'} to="about">about</NavLink>
                <NavLink className={'navbar__link'} to="posts">posts</NavLink>
            </div>
        </div>
    )
}
