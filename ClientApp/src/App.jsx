import React, { Component } from 'react'
import { Route, Switch } from 'react-router'
// import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import SkillLevel from './pages/_template/SkillLevel'
import SkatingStyle from './pages/_template/SkatingStyle'
import SkatingEnviroment from './pages/_template/SkatingEnviroment'
import BootMaterial from './pages/_template/BootMaterial'
import Wheels from './pages/_template/Wheels'
import Frame from './pages/_template/Frame'
import BuyersGuide from './pages/_template/Buyers Guide'

// import HeyWorld from './pages/_template/HeyWorld'
// import NotFound from './pages/NotFound'
import './custom.scss'
export function App() {
  return (
    // <Layout>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/SkillLevel" component={SkillLevel} />
      <Route exact path="/SkatingStyle" component={SkatingStyle} />
      <Route exact path="/SkatingEnviroment" component={SkatingEnviroment} />
      <Route exact path="/BootMaterial" component={BootMaterial} />
      <Route exact path="/Wheels" component={Wheels} />
      <Route exact path="/Frame" component={Frame} />
      <Route exact path="/BuyersGuide" component={BuyersGuide} />

      {/* <Route exact path="*" component={NotFound} /> */}
    </Switch>
    // </Layout>
  )
}
