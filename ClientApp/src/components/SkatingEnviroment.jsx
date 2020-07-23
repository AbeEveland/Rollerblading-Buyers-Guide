import React, { useState } from 'react'
import { Route, Switch } from 'react-router'
import { Home } from './Home'

const SkatingEnviroment = () => {
  return (
    <>
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
        <h1>Skating Enviroment</h1>
        <p>
          Some skates specialize to be a certain type, while others are more
          versatile for use across different styles. Inline Warehouse has two
          pages dedicated to the different disciplines of skating. On the IW
          Fitness page, you will see Recreational, Cross-Training and Speed
          skates predominantly featured; whereas on the IW Street page, you will
          be immersed in the adrenaline-filled world of Aggressive, Urban and
          All-Terrain skating.
        </p>{' '}
        <h2>The difference between free skating and urban skating</h2>
        <p>
          Although mostly similar there does seem to be a bit of difference
          between someone that does urban skating and free skating. Urban
          skaters tend to just use their skates to get from one place to another
          without doing tricks or skating obstacles along the way. Free skaters
          tend to do more aggressive skating inspired tricks and will skate
          obstacles when they come along. As the skates used for both styles of
          skating are urban style skates or Rollerblades you can really do both
          styles of skating and be considered a free skater and an urban skater
          or only stick to one style of skating. If you find yourself doing more
          free skating than any other type of skating you may want to look into
          powerblading which will offer you a slightly different frame style
          making it easier to grind objects
        </p>
      </div>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </>
  )
}

export default SkatingEnviroment
