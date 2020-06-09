import React from "react"
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom"

import SignIn from "./pages/signIn/SignIn"
import TodoList from "./pages/todoList/TodoList"

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/sign_in" component={SignIn} />
        <Route path="/" component={TodoList} />
        <Redirect to="/" />
      </Switch>
    </Router>
  )
}

export default Routes
