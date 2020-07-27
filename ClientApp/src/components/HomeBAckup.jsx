import React, { useState, useEffect, Component } from 'react'
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
import RecommendedSkates from './RecomendedSkates'
import YourRollerblades from './YourRollerblades'
import { Rollerblades } from './Rollerblades'
import ShowRollerblades from './ShowRollerblades'
// import ShopRollerblades from './ShopRollerblades'

import { ShowUsers } from './ShowUsers'
import { SkateSuggestion } from './SkateSuggestion'
import { AlterUser } from './AlterUser'
import { getUser, isLoggedIn } from './auth'
import { NavBar } from './NavBar'

export function Home() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('/api/Users')
      .then(response => response.json())
      .then(apiData => {
        setUsers(apiData)
      })
  }, [])

  const user = getUser()
  console.log(isLoggedIn(user))
  // const proUserSkate = users.filter(users => users.skill === user.skill)

  // function userInformation() {
  //   return <h3>{user.fullName}</h3>
  // }
  const [activeFilter, setActiveFilter] = useState('')
  console.log(user)
  return (
    <>
      <NavBar activeFilter={activeFilter} setActiveFilter={setActiveFilter} />

      {/* <NavBar /> */}
      {/* DO NOT USE */}
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
      {/* {proUserSkate.map(skate => (
        <>
        <p>{skate.fullName}</p>
        </>
      ))} */}
      {/* DO NOT USE */}
      {/* {isLoggedIn(user) && <h3>{user.fullName}</h3>} */}
      {/* {isLoggedIn(user) ? <h3>{user.fullName}</h3> : <h3>huh</h3>} */}
      <div className="userfeatures">
        <ol className="">
          <li>
            <p className="xxxp">Welcome</p>
          </li>
          <li className="">{isLoggedIn(user) && <h3>{user.fullName}</h3>}</li>
          <li>
            <a className="xxx " href="/AddRollerblades">
              {' '}
              Add a pair of rollerblades
            </a>
          </li>

          <li>
            <a className="xxx " href="/ShowRollerblades">
              {' '}
              View your Rollerblades
            </a>
          </li>
          <li>
            <a className=" xxx" href="/RecommendedSkates">
              {' '}
              View all Rollerblades
            </a>
          </li>
          <li>
            <a className="xxx " href="/ShowUsers">
              {' '}
              ShowUsers
            </a>
          </li>
          <li>
            <a className=" xxx" href="/ShopRollerblades">
              {' '}
              Shop Rollerblades
            </a>
          </li>
          <a href="/practice">practice</a>

          {/* <li>
            <a className=" " href="/SkateSuggestion">
              {' '}
              SkateSuggestion
            </a>
          </li> */}
          {/* <li>
            <a className=" " href="/AlterUser">
              {' '}
              AlterUser
            </a>
          </li> */}
          {/* <li>
            <a className=" " href="/YourRollerblades">
              {' '}
              YourRollerblades
            </a>
          </li> */}
        </ol>
      </div>
      <div className="thingsToConsider">
        <h1 className="NaveBarH1">
          Things to consider when buying rollerblades
        </h1>
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
        {/* <li>
          <a className=" " href="/BuyersGuide">
            {' '}
            BuyersGuide
          </a>
        </li> */}
      </div>
      <div>
        <img
          className="rollerbladelogo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQDzPqIQfpjoh9y9Q2V2PrTCoepSsiBgL0Dbw&usqp=CAU"
          alt=""
          width="100px"
        />
      </div>
      {/* <form
        id="cercator"
        action="https://www.rollerblade.com/usa/search-results/"
        class="search-form"
        method="post"
      >
        <input
          class="ui-searchinput"
          type="text"
          name="search"
          id="cercainp"
          placeholder="Start typing what you're looking for"
        />
        <input type="hidden" name="solonome" id="solo_nome" value="N" />
      </form> */}
      {/* <NavBar activeFilter={activeFilter} setActiveFilter={setActiveFilter} /> */}
      <main className="thingsToConsiderpractice">
        <Switch>
          <Route exact path="/RecommendedSkates">
            <Rollerblades activeFilter={activeFilter} />
          </Route>
          {/* <Route path="/restaurants/add">
            <AddRestaurant />
          </Route>
          <Route path="/restaurants/:id">
            <ShowRestaurant />
          </Route>  */}
        </Switch>
      </main>
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
        <Route exact path="/RecommendedSkates" component={RecommendedSkates} />
        <Route exact path="/ShowUsers" component={ShowUsers} />
        <Route exact path="/SkateSuggestion" component={SkateSuggestion} />
        <Route exact path="/AlterUser" component={AlterUser} />
        <Route exact path="/YourRollerblades" component={YourRollerblades} />
        <Route exact path="/Rollerblades" component={Rollerblades} />
        <Route exact path="/ShowRollerblades" component={ShowRollerblades} />
        {/* <Route exact path="/ShopRollerblades" component={ShopRollerblades} /> */}

        <Route
          exact
          path="/BuyersGuideQuestions"
          component={BuyersGuideQuestions}
        />
      </Switch>
    </>
  )
}
