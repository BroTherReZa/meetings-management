import React from "react"
import { BrowserRouter as Router } from "react-router-dom"
import RouterConfig from "./components/navigation/Route/RouteConfig"
import Layout from "./components/layout/Layout"
import { AuthContext } from "./components/context/auth-context"
import { connect } from "react-redux"

const App = (props) => {
    return (
        <AuthContext.Provider
            value={{
                isLoggedIn: props.isLoggedIn,
                login: () => props.setLoginMode(true),
                lgout: () => props.setLoginMode(false),
            }}
        >
            <Router>
                <Layout>
                    <RouterConfig />
                </Layout>
            </Router>
        </AuthContext.Provider>
    )
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.isLoggedIn,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setLoginMode: (mode) =>
            dispatch({
                type: "SETLOGINMODE",
                payload: { data: mode },
            }),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
