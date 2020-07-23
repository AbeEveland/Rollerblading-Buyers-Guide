import React, { useState } from 'react'
import { Route, Switch } from 'react-router'
import { Home } from './Home'
import Question3 from './Question3'

const Question2 = () => {
  return (
    <>
      {/* <div className="homePageContainer"> */}
      {/* <img
    className="logo"
    src="https://store-images.s-microsoft.com/image/apps.14716.9007199266365238.ab475298-d17b-437b-b143-0537efcad818.aabd06dc-87c7-47a9-addf-1e26155db4b4?mode=scale&q=90&h=300&w=300"
    alt=""
    width="30px"
  /> */}
      <div className="homePageHeader">
        <a href="/">Home</a>
        <h1 className="headinghH1">ROLLERBLADE WAREHOUSE</h1>

        <button className="homePageAccountButtons">
          <img
            className="homePageAccountButton"
            src="https://thumbs.dreamstime.com/b/user-account-line-icon-outline-person-logo-illustration-linear-pictogram-isolated-white-90234649.jpg"
            alt="Account"
            width="20px"
          />
        </button>
      </div>
      <div className="SkatingStyle">
        <h1>What is your priority?</h1>
        <a href="/Question3">Speed</a>
        <a href="/Question3">Manuverability</a>
        <a href="/Question3">Both</a>
      </div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Question3" component={Question3} />
      </Switch>
    </>
  )
}

export default Question2
