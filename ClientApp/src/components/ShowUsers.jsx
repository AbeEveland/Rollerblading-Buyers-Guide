import React, { useState, useEffect, Component } from 'react'
import { Route, Switch } from 'react-router'
import { Home } from './Home'
import { User } from './User'

import { Link } from 'react-router-dom'
import { getUser } from './auth'
import { NavBar } from './NavBar'
import { Rollerblades } from './Rollerblades'

export function ShowUsers() {
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
      {/* <NavBar activeFilter={activeFilter} setActiveFilter={setActiveFilter} /> */}

      {/* {rollerblades.length > 0 && (
        <div className="showrollerblades">
          <h3>These rollerblades have been picked for you</h3>

          {proUserSkate.map(skate => (
            <>
              <p>{skate.title}</p>
              <img src={skate.photoURL} alt="" width="50px" />
            </>
          ))}
        </div>
      )} */}
      <main className="">
        <div className="quser">
          <h1>Users</h1>
        </div>
        <Switch>
          <Route exact path="/ShowUsers">
            <User activeFilter={activeFilter} />
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
