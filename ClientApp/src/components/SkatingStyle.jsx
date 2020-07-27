import React, { useState } from 'react'
import { Route, Switch } from 'react-router'
import { Home } from './Home'
import { NavBar } from './NavBar'

const SkatingStyle = () => {
  return (
    <>
      <div className="thingsToConsiderpractice">
        <h1> Style</h1>
        <p>
          Some skates specialize to be a certain type, while others are more
          versatile for use across different styles. Inline Warehouse has two
          pages dedicated to the different disciplines of skating. On the IW
          Fitness page, you will see Recreational, Cross-Training and Speed
          skates predominantly featured; whereas on the IW Street page, you will
          be immersed in the adrenaline-filled world of Aggressive, Urban and
          All-Terrain skating.
        </p>{' '}
        <div className="xxxp">
          <li>
            <a className="" href="/SkillLevel">
              {' '}
              Skill
            </a>
          </li>

          <li>
            <a className=" " href="/SkatingEnviroment">
              Enviroment
            </a>
          </li>
          <li>
            <a className=" " href="/BootMaterial">
              Boots{' '}
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
        </div>
      </div>
      <img
        className="userfeaturesimage"
        src="https://www.powerslide.com/bilder/_custom/kategorien/reign_01.jpg"
        alt=""
      />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </>
  )
}

export default SkatingStyle
