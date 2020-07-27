import React, { useState } from 'react'
import { Route, Switch } from 'react-router'
import { Home } from './Home'
import { NavBar } from './NavBar'

const Wheels = () => {
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
          <a className=" " href="/Frame">
            {' '}
            Frame
          </a>
        </li>
      </div>
      <div className="thingsToConsiderpractice">
        <h1>Wheel Size</h1>
        <p>
          Wheel size has traditionally been closely tied with speed,
          acceleration, comfort, and stability and as a result, is relied upon
          heavily when deciding which skate is best suited for your skill level.
          In our skate filter, you can search for skates based on specific wheel
          diameters offered and you will see the wheel size displayed
          prominently in every product description on our site.
        </p>{' '}
        <p>
          Small wheels are recommended for lower-skilled skaters for their high
          stability and control. Large wheels are typically reserved for more
          advanced skaters looking for more speed.
        </p>
        <p>
          If you are interested in the benefits of large wheel skating, without
          fear of losing too much stability or control, we recommend looking at
          a 3 Wheel Skate. These skates allow lower skill levels to gain access
          to the large wheel experience thanks to shorter frames that allow for
          better maneuverability.{' '}
        </p>
      </div>

      <img
        className="userfeaturesimage"
        src="https://www.powerslide.com/bilder/_custom/kategorien/wheels_800_02.jpg"
        alt=""
      />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </>
  )
}

export default Wheels
