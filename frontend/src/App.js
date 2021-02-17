import React from "react"
import { BrowserRouter as Router } from "react-router-dom"
import RouterConfig from "./components/navigation/Route/RouteConfig"
import Layout from "./components/layout/Layout"
import { AuthContext } from "./components/context/auth-context"
import { connect } from "react-redux"
import Base from './components/layout/Base'


const App = (props) => {
    let route
    if (props.isLoggedIn) {
        route = (
            <Router>
                <Layout>
                    <RouterConfig />
                </Layout>
            </Router>
        )
    } else {
        route = <Base />
    }
    return (
        <AuthContext.Provider
            value={{
                isLoggedIn: props.isLoggedIn,
                userId: props.userId,
                login: (uid) => {
                    props.setLoginMode(true)
                    props.setUserId(uid)
                },
                lgout: () => props.setLoginMode(false),
            }}
        >
            {route}
        </AuthContext.Provider>
    )
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.isLoggedIn,
        userId: state.userId,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setLoginMode: (mode) =>
            dispatch({
                type: "SETLOGINMODE",
                payload: { data: mode },
            }),
        setUserId: (uid) =>
            dispatch({
                type: "SETUSERID",
                payload: { data: uid },
            }),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
