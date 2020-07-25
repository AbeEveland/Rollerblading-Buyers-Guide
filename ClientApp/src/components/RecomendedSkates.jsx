import React, { useState, useEffect, Component } from 'react'
import { Route, Switch } from 'react-router'
import { Home } from './Home'

import { Link } from 'react-router-dom'
import { getUser } from './auth'

const RecommendedSkates = () => {
  const [rollerblades, setRollerblades] = useState([])
  const [users, setUsers] = useState([])

  const user = getUser()

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

  const proSkates = rollerblades.filter(
    rollerblade => rollerblade.skill === 'Pro'
  )
  const proUsers = users.filter(user => user.skill === 'Beginner')
  const proUserSkate = rollerblades.filter(
    rollerblade => rollerblade.skill === user.skill
  )
  return (
    <>
      {rollerblades.length > 0 && (
        <div className="showrollerblades">
          <h3>Roller Blades</h3>
          {proSkates.map(proSkate => (
            <p>{proSkate.title}</p>
          ))}
          {proUsers.map(user => (
            <p>{user.fullName}</p>
          ))}
          {proUserSkate.map(skate => (
            <p>{skate.title}</p>
          ))}
        </div>
      )}

      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </>
  )
}

export default RecommendedSkates
