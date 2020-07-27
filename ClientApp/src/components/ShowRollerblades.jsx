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
      <div className="xxxp">
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
            View / All
          </a>
        </li>
        <li className="">
          <a className=" " href="/ShowUsers">
            {' '}
            Users
          </a>
        </li>
      </div>
      {rollerblades.length > 0 && (
        <div className="thingsToConsiderpractice">
          <h1 className="">These rollerblades have been picked for you!</h1>

          {proUserSkate.map(skate => (
            <>
              <div className="thingsToConsiderpractice">
                <p className="">{skate.title}</p>
                <img
                  className="userfeaturesimage"
                  src={skate.photoURL}
                  alt=""
                  width="500px"
                />
              </div>
            </>
          ))}
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
