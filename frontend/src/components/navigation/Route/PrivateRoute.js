import React from 'react'
import { Route } from 'react-router-dom'


const PrivateRoute = (props) => {
    return <Route to={props.path} render={() => props.children} />
}

export default PrivateRoute