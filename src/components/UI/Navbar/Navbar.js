import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../../../context'
import MyButton from '../button/MyButton'

export const Navbar = () => {

    const { isAuth, setIsAuth } = useContext(AuthContext)

    const logout = () => {
        setIsAuth(false)
        localStorage.removeItem('auth')
    }

    return (
        <div className='navbar'>
            <div className="navbar__links">
                <NavLink className={'navbar__link'} to="about">about</NavLink>
                <NavLink className={'navbar__link'} to="posts">posts</NavLink>
            </div>
            <MyButton onClick={logout}>Выйти</MyButton>
        </div>
    )
}
