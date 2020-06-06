import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"

import SignIn from "./pages/signIn/SignIn"

const Routes = () => {
  return (
    <Router>
      <Route path="/" component={SignIn} />
      <Route path="/signIn" component={SignIn} />
    </Router>
  )
}

export default Routes
