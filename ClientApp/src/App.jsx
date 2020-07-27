import React, { useState } from 'react'
import { Route, Switch } from 'react-router'

import { Home } from './components/Home'
import { SignUp } from './components/UserSignUp'
import { SignIn } from './components/SignIn'
import { NavBar } from './components/NavBar'
import SkillLevel from './components/SkillLevel'
import SkatingStyle from './components/SkatingStyle'
import SkatingEnviroment from './components/SkatingEnviroment'
import BootMaterial from './components/BootMaterial'
import Wheels from './components/Wheels'
import Frame from './components/Frame'
import { AddRollerblades } from './components/AddRollerblades'
import BuyersGuide from './components/Buyers Guide'
import { BuyersGuideQuestions } from './components/BuyersGuideQuestions'
import './custom.scss'
import Question2 from './components/Question2'
import Question3 from './components/Question3'
import Question4 from './components/Question4'
import Question5 from './components/Question5'
import RecommendedSkates from './components/RecomendedSkates'
import ShowRollerblades from './components/ShowRollerblades'
import { ShowUsers } from './components/ShowUsers'
import { AlterUser } from './components/AlterUser'
import YourRollerblades from './components/YourRollerblades'
import { Rollerblades } from './components/Rollerblades'
import practice from './components/practice'
import { UserFeatures } from './components/UserFeatures'
import ShopRollerblades from './components/ShopRollerblades'

import ThingsToConsider from './components/ThingsToConsider'

import { SkateSuggestion } from './components/SkateSuggestion'

export function App() {
  const [activeFilter, setActiveFilter] = useState('')

  return (
    <>
      <NavBar activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
      <main className="container-fluid p-4">
        <Switch>
          <Route exact path="/">
            {/* <Rollerblades activeFilter={activeFilter} /> */}
          </Route>
          <Route path="/restaurants/add">{/* <AddRestaurant /> */}</Route>
          <Route path="/restaurants/:id">{/* <ShowRestaurant /> */}</Route>
        </Switch>
      </main>
      <Switch>
        <Route exact path="/SkatingEnviroment" component={SkatingEnviroment} />
        <Route path="/Rollerblades/:id"></Route>
        <Route exact path="/SkillLevel" component={SkillLevel} />
        <Route exact path="/SkatingStyle" component={SkatingStyle} />
        <Route exact path="/BootMaterial" component={BootMaterial} />
        <Route exact path="/Wheels" component={Wheels} />
        <Route exact path="/Home" component={Wheels} />

        <Route exact path="/Frame" component={Frame} />
        <Route exact path="/BuyersGuide" component={BuyersGuide} />
        <Route exact path="/AddRollerblades" component={AddRollerblades} />
        <Route exact path="/SignUp" component={SignUp} />
        <Route exact path="/SignIn" component={SignIn} />
        <Route exact path="/Question2" component={Question2} />
        <Route exact path="/Question3" component={Question3} />
        <Route exact path="/Question4" component={Question4} />
        <Route exact path="/Question5" component={Question5} />
        <Route exact path="/AlterUser" component={AlterUser} />
        <Route exact path="/YourRollerblades" component={YourRollerblades} />
        <Route exact path="/Rollerblades" component={Rollerblades} />
        <Route exact path="/ShowRollerblades" component={ShowRollerblades} />
        <Route exact path="/ShowUsers" component={ShowUsers} />
        <Route exact path="/ShopRollerblades" component={ShopRollerblades} />

        <Route exact path="/RecommendedSkates" component={RecommendedSkates} />
        <Route exact path="/SkateSuggestion" component={SkateSuggestion} />
        <Route exact path="/practice" component={practice} />
        <Route exact path="/UserFeatures" component={UserFeatures} />

        <Route exact path="/" component={Home} />
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/UserFeatures">
          <UserFeatures />
        </Route>
        <Route exact path="/ThingsToConsider">
          <ThingsToConsider />
        </Route>
        <Route
          exact
          path="/BuyersGuideQuestions"
          component={BuyersGuideQuestions}
        />
      </Switch>
    </>
  )
}
