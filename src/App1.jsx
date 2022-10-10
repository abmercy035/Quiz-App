import React, { useState } from 'react'
import View from './components/View1'
import './App.css'
export default function App() {
  const [route, setRoute] = useState({
    url : 'welcome'
  });

  const SetRoute = (newRoute) => {
    setRoute({
      url : newRoute
    })
  }
  return (
   <>
   <View changeRoute={SetRoute} Route={route.url} welcome='welcome'/>
   </>
  )
}
