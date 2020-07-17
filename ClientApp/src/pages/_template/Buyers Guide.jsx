import React, { useState } from 'react'
import { Route, Switch } from 'react-router'
import { Home } from '../Home'
import BuyersGuideQuestions from '../_template/BuyersGuideQuestions'

const BuyersGuide = () => {
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
      <div className="buyersguide">
        <h1>Buyers Guide </h1>
        <p>
          Roller Blade Warehouse's buyers guide will help guide you through the
          process of buying your first pair of skates. After answering a series
          of questions, you will be provided with a detailed list of rollerblade
          options taylor made for you!
        </p>{' '}
        <a href="/BuyersGuideQuestions">Continue to the guide</a>
      </div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/BuyersGuideQuestions"
          component={BuyersGuideQuestions}
        />
      </Switch>
    </>
  )
}

export default BuyersGuide
