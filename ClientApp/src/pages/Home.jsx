import React from 'react'
import { Route, Switch } from 'react-router'
import SkillLevel from '../pages/_template/SkillLevel'
import SkatingStyle from '../pages/_template/SkatingStyle'
import SkatingEnviroment from '../pages/_template/SkatingEnviroment'
import BootMaterial from '../pages/_template/BootMaterial'
import Wheels from '../pages/_template/Wheels'
import Frame from '../pages/_template/Frame'
import BuyersGuide from '../pages/_template/Buyers Guide'

export function Home() {
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
      <div className="thingsToConsider">
        <h1>Rollerblade Buying Guide</h1>
        <p>
          With a wide range of inline skates built for varying types of skating,
          it can be difficult to find the skate that is best suited for you.
          This guide will take you through the many options presented on our
          site to help you use our filters and product descriptions to narrow
          down the field. The main factors we will guide you through on this
          page are:
        </p>
        <li>
          <a href="/SkillLevel"> Skill Level</a>
        </li>
        <li>
          <a href="/SkatingStyle">Skating style</a>
        </li>
        <li>
          {' '}
          <a href="/SkatingEnviroment">Skating Enviroment</a>
        </li>
        <li>
          {' '}
          <a href="/BootMaterial">Boot Types </a>
        </li>
        <li>
          {' '}
          <a href="/Wheels">Wheels </a>
        </li>
        <li>
          {' '}
          <a href="/Frame"> Frame</a>
        </li>

        <a>
          {' '}
          <a href="/BuyersGuide"> BuyersGuide</a>
        </a>
      </div>
      {/* </div> */}
      <Switch>
        <Route exact path="/SkillLevel" component={SkillLevel} />
        <Route exact path="/SkatingStyle" component={SkatingStyle} />
        <Route exact path="/SkatingEnviroment" component={SkatingEnviroment} />
        <Route exact path="/BootMaterial" component={BootMaterial} />
        <Route exact path="/Wheels" component={Wheels} />
        <Route exact path="/Frame" component={Frame} />
        <Route exact path="/BuyersGuide" component={BuyersGuide} />
      </Switch>
    </>
  )
}
