import React from "react"
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom"

import { connect } from "react-redux"
import { IStore } from "modules/index"

import SignIn from "./pages/signIn/SignIn"
import TodoList from "./pages/todoList/TodoList"
import ErrorPage from "./pages/errorPage/ErrorPage"
import Token from "./pages/auth/token/Token"

interface IProps {
  token: string
}

const Routes = ({ token }: IProps) => {
  return (
    <Router>
      <Switch>
        <PublicRoute path="/auth/token" component={Token} token={token} />
        <PublicRoute path="/sign_in" component={SignIn} token={token} />
        <PublicRoute path="/error_page" component={ErrorPage} />
        <PrivateRoute path="/todo_list" component={TodoList} token={token} />
        <Redirect to="/todo_list" />
      </Switch>
    </Router>
  )
}

const PrivateRoute = ({ component: Component, token, ...rest }: any) => {
  return <Route {...rest} render={() => (token ? <Component /> : <Redirect to="/sign_in"></Redirect>)} />
}

const PublicRoute = ({ component: Component, token, ...rest }: any) => {
  return <Route {...rest} render={() => (!token ? <Component /> : <Redirect to="/"></Redirect>)} />
}

export default connect((store: IStore) => ({
  token: store.user.token,
}))(Routes)
