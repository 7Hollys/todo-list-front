import React from "react"
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom"

import SignIn from "./pages/signIn/SignIn"
import TodoList from "./pages/todoList/TodoList"
import Token from "./pages/auth/token/Token"

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/auth/token" component={Token} />
        <Route path="/sign_in" component={SignIn} />
        <Route path="/todo_list" component={TodoList} />
        <Redirect to="/" />
      </Switch>
    </Router>
  )
}

export default Routes
