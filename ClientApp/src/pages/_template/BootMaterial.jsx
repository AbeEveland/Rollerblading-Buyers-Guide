import React, { useState } from 'react'
import { Route, Switch } from 'react-router'
import { Home } from '../Home'
const BootMaterial = () => {
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
        <h1>Boot Types</h1>
        <p>
          The three main boot types are soft boots, molded plastic and
          composite/carbon. Soft boots are lighter and better ventilated, making
          them a good choice if planning to skate for hours at a time or long
          distances. Hard, molded plastic shells are more durable and limit boot
          stretch, making them highly responsive when pushing off, but heavier
          so that they can cause fatigue if skating for long periods. Composite
          or Carbon shells are extremely rigid and lightweight to focus on power
          transfer and performance.
        </p>{' '}
      </div>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </>
  )
}

export default BootMaterial
