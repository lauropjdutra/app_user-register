import React from "react"
import { 
  BrowserRouter as Router, 
  Routes, 
  Route 
} from "react-router-dom"

import Home from "./containers/Home"
import PageUsers from "./containers/PageUsers"

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/users" element={<PageUsers />}/>
      </Routes>
    </Router>
  )
}

export default AppRoutes