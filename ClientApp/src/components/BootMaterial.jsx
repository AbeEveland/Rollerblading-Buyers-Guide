import React, { useState } from 'react'
import { Route, Switch } from 'react-router'
import { Home } from './Home'
import { NavBar } from './NavBar'

const BootMaterial = () => {
  return (
    <>
      <div className="xxxp">
        <li>
          <a className="" href="/SkillLevel">
            {' '}
            Skill
          </a>
        </li>

        <li>
          <a className=" " href="/SkatingStyle">
            Style
          </a>
        </li>
        <li>
          <a className=" " href="/SkatingEnviroment">
            Evironment{' '}
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
      <div className="thingsToConsiderpractice">
        <h1>Boots</h1>
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
      <img
        className="userfeaturesimage"
        src="https://www.powerslide.com/bilder/_custom/kategorien/race-boots_03.jpg"
        alt=""
      />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </>
  )
}

export default BootMaterial
