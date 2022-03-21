import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import { AuthContext } from '../context'
import About from '../pages/About'
import { PostIdPage } from '../pages/PostIdPage'
import Posts from '../pages/Posts'
import { privateRoutes, publicRoutes } from '../routerArray/routes'




export const AppRouter = () => {

    const { isAuth, setIsAuth } = useContext(AuthContext)

    console.log(isAuth)

    return (

        isAuth
            ? <Routes>

                {privateRoutes.map((route) => {
                    return <Route
                        path={route.path}
                        element={route.element}
                        exact={route.exact}
                        key={route.path}
                    />
                })}

            </Routes>

            : <Routes>
                {publicRoutes.map((route) => {
                    return <Route
                        path={route.path}
                        element={route.element}
                        exact={route.exact}

                    />
                })}
            </Routes>


    )
}
