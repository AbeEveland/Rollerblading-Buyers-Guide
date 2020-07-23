import React, { useState } from 'react'
import { Route, Switch } from 'react-router'
import { Home } from './Home'
import Question4 from './Question4'

const Question3 = () => {
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
        <h1>Will your enviroment be trails or city?</h1>
        <a href="/Question4">Trails</a>
        <a href="/Question4">City</a>
        <a href="/Question4">Both</a>
      </div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Question4" component={Question4} />
      </Switch>
    </>
  )
}

export default Question3
