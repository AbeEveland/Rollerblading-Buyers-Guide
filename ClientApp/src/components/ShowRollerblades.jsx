import React, { useState, useEffect, Component } from 'react'
import { Route, Switch } from 'react-router'
import { Home } from './Home'

import { Link } from 'react-router-dom'
import { getUser } from './auth'
import { NavBar } from './NavBar'
import { Rollerblades } from './Rollerblades'

const ShowRollerblades = () => {
  const [rollerblades, setRollerblades] = useState([])
  const [users, setUsers] = useState([])
  const [id, setId] = useState([])

  const user = getUser()
  console.log(user)
  useEffect(() => {
    fetch('/api/Rollerblades')
      .then(response => response.json())
      .then(apiData => {
        setRollerblades(apiData)
      })
  }, [])

  useEffect(() => {
    fetch('/api/Users')
      .then(response => response.json())
      .then(apiData => {
        setUsers(apiData)
      })
  }, [])

  const proUserSkate = rollerblades.filter(
    rollerblade => rollerblade.skill === user.skill
  )
  const [activeFilter, setActiveFilter] = useState('')

  return (
    <>
      <div className="s">
        <li className="">
          <a className=" " href="/ThingsToConsider">
            {' '}
            Things To Consider
          </a>
        </li>
        <li className="">
          <a className=" " href="/AddRollerblades">
            {' '}
            Add
          </a>
        </li>

        <li className="">
          <a className=" " href="/RecommendedSkates">
            {' '}
            All Blades
          </a>
        </li>
        <li className="">
          <a className=" " href="/ShowUsers">
            {' '}
            Users
          </a>
        </li>
      </div>
      <div className="skatesheader">
        <h1>Rollerblades</h1>
      </div>
      {rollerblades.length > 0 && (
        <div className="thingsToConsiderpracticepp">
          {/* <h1 className="">These rollerblades have been picked for you!</h1> */}
          <div className=" singlerollerbladefromlist">
            {proUserSkate.map(skate => (
              <>
                <div className="recommendedskatesitem">
                  <p className="">{skate.title}</p>
                  <img
                    className="userfeaturesimageall"
                    src={skate.photoURL}
                    alt=""
                  />

                  <li className="pics">
                    <strong>Skill: </strong>
                    {skate.skill}
                  </li>
                  <li className="pics">
                    <strong>Maneuverability:</strong>
                    {skate.maneuverability}
                  </li>
                  <li className="pics">
                    {' '}
                    <strong>Speed:</strong>
                    {skate.speed}
                  </li>
                  <li className="pics">
                    {' '}
                    <strong>Fit:</strong> {skate.fit}
                  </li>
                  <li className="pics">
                    {' '}
                    <strong>Skill:</strong>
                    {skate.price}
                  </li>

                  <p className="description">{skate.description}</p>
                </div>
              </>
            ))}
          </div>
        </div>
      )}
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
        <Route exact path="/" component={Home} />
      </Switch>
    </>
  )
}

export default ShowRollerblades
