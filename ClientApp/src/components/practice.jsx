import React, { useState, useEffect, Component } from 'react'
import { isLoggedIn, logout } from './auth'
import { getUser } from './auth'
// import ShopRollerblades from './ShopRollerblades'

import { NavBar } from './NavBar'
const user = getUser()

const practice = () => {
  return (
    <>
      <NavBar />
      {/* <div className="featurespractice"> */}
      {/* <ol classNAme="userfeatures">
          <li classNAme="xxxp">
            <p className="xxxp">Welcome</p>
            <p className="xxxp">
              {isLoggedIn(user) && <h3>{user.fullName}</h3>}
            </p>
          </li>
          <li className="xxxp">
            <a className=" www" href="/AddRollerblades">
              {' '}
              Add a pair of rollerblades
            </a>
          </li>

          <li className="xxxp">
            <a className="www " href="/ShowRollerblades">
              {' '}
              View your Rollerblades
            </a>
          </li>
          <li className="xxxp">
            <a className=" www" href="/RecommendedSkates">
              {' '}
              View all Rollerblades
            </a>
          </li>
          <li className="xxxp">
            <a className="www " href="/ShowUsers">
              {' '}
              ShowUsers
            </a>
          </li>
        </ol>{' '}
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
      </div> */}
      <div className="bbb">
        <div className="thingsToConsiderpractice">
          <h1 className="">Rollerblades</h1>
          <div className="Borderbottom"></div>
          <p>
            With a wide range of rollerblades built for varying types of
            skating, it can be difficult to find the skate that is best suited
            for you. Here at Abe's rollerblade buyers guide, we offer assistance
            for someone that is interested in getting into the rollerblading
            scene.After creating a profile, click your name above to access the
            features that will assist you in buying a pair of blades! all skates
            out there on the web!
          </p>
          {/* <li>
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
          </li> */}
          {/* <li>
          <a className=" " href="/BuyersGuide">
          {' '}
          BuyersGuide
          </a>
        </li> */}
        </div>
        <img
          className="aaa"
          src="https://www.powerslide.com/bilder/_custom/kategorien/fitness_2018.jpg"
          alt=""
        />
      </div>
    </>
  )
}

export default practice
