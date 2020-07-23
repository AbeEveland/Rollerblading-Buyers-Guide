import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Route, Switch } from 'react-router'
import SkillLevel from './SkillLevel'
import SkatingStyle from './SkatingStyle'
import SkatingEnviroment from './SkatingEnviroment'
import BootMaterial from './BootMaterial'
import Wheels from './Wheels'
import Frame from './Frame'
import { AddRollerblades } from './AddRollerblades'
import { SignUp } from './UserSignUp'
import { SignIn } from './SignIn'
import BuyersGuide from './Buyers Guide'
import { BuyersGuideQuestions } from './BuyersGuideQuestions'
import { ShowRollerblades } from './ShowRollerblades'
import { ShowUsers } from './ShowUsers'
import { SkateSuggestion } from './SkateSuggestion'

export function Home() {
  return (
    <>
      {/* <div className="homePageHeader">
        <h1 className="headinghH1">ROLLERBLADE WAREHOUSE</h1>
        <button className="homePageAccountButtons">
          <img
            className="homePageAccountButton"
            src="https://thumbs.dreamstime.com/b/user-account-line-icon-outline-person-logo-illustration-linear-pictogram-isolated-white-90234649.jpg"
            alt="Account"
            width="20px"
          />
        </button>
      </div> */}
      <div className="userfeatures">
        <ol>
          <li>
            <a className=" " href="/AddRollerblades">
              {' '}
              AddRollerblades
            </a>
          </li>

          <li>
            <a className=" " href="/ShowRollerblades">
              {' '}
              ShowRollerblades
            </a>
          </li>
          <li>
            <a className=" " href="/ShowUsers">
              {' '}
              ShowUsers
            </a>
          </li>
          <li>
            <a className=" " href="/SkateSuggestion">
              {' '}
              SkateSuggestion
            </a>
          </li>
        </ol>
      </div>
      <div className="thingsToConsider">
        <h1 className="NaveBarH1">Rollerblade Buying Guide</h1>
        <p>
          With a wide range of inline skates built for varying types of skating,
          it can be difficult to find the skate that is best suited for you.
          This guide will take you through the many options presented on our
          site to help you use our filters and product descriptions to narrow
          down the field. The main factors we will guide you through on this
          page are:
        </p>
        <li>
          <a className="" href="/SkillLevel">
            {' '}
            Skill Level
          </a>
        </li>
        <li>
          <a className=" " href="/SkatingStyle">
            Skating style
          </a>
        </li>
        <li>
          <a className=" " href="/SkatingEnviroment">
            Skating Enviroment
          </a>
        </li>
        <li>
          <a className=" " href="/BootMaterial">
            Boot Types{' '}
          </a>
        </li>
        <li>
          <a className=" " href="/Wheels">
            Wheels{' '}
          </a>
        </li>
        <li>
          <a className=" " href="/Frame">
            {' '}
            Frame
          </a>
        </li>
        <li>
          <a className=" " href="/BuyersGuide">
            {' '}
            BuyersGuide
          </a>
        </li>
      </div>
      {/* <div>
        <img
          className="rollerbladelogo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQDzPqIQfpjoh9y9Q2V2PrTCoepSsiBgL0Dbw&usqp=CAU"
          alt=""
          width="100px"
        />
      </div> */}

      <Switch>
        <Route exact path="/SkillLevel" component={SkillLevel} />
        <Route exact path="/SkatingStyle" component={SkatingStyle} />
        <Route exact path="/SkatingEnviroment" component={SkatingEnviroment} />
        <Route exact path="/BootMaterial" component={BootMaterial} />
        <Route exact path="/Wheels" component={Wheels} />
        <Route exact path="/Frame" component={Frame} />
        <Route exact path="/BuyersGuide" component={BuyersGuide} />
        <Route exact path="/AddRollerblades" component={AddRollerblades} />
        <Route exact path="/SignUp" component={SignUp} />
        <Route exact path="/SignIn" component={SignIn} />
        <Route exact path="/ShowRollerblades" component={ShowRollerblades} />
        <Route exact path="/ShowUsers" component={ShowUsers} />
        <Route exact path="/SkateSuggestion" component={SkateSuggestion} />

        <Route
          exact
          path="/BuyersGuideQuestions"
          component={BuyersGuideQuestions}
        />
      </Switch>
    </>
  )
}
