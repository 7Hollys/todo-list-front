import React from "react"
import ReactDOM from "react-dom"
import { createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import { composeWithDevTools } from "redux-devtools-extension"
import ReduxThunk from "redux-thunk"
import "./index.scss"
import App from "./App"
import rootReducer from "./modules"

// const devtools = composeWithDevTools()
const store = createStore(rootReducer, applyMiddleware(ReduxThunk))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
)
