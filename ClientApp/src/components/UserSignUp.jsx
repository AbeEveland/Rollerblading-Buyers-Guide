import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { Route, Switch } from 'react-router'
import { Home } from './Home'

import { authHeader } from './auth'

export function SignUp() {
  const history = useHistory()
  const [errorMessage, setErrorMessage] = useState()
  const [newRollerblade, setNewRollerblade] = useState({
    skill: '',
    maneuverability: '',
    speed: '',
    fit: '',
    fullName: '',
    password: '',
    email: '',
    username: '',
  })

  const handleFieldChange = event => {
    const value = event.target.value
    const fieldName = event.target.id

    const updatedRollerblade = { ...newRollerblade, [fieldName]: value }

    setNewRollerblade(updatedRollerblade)
  }

  const handleFormSubmit = async event => {
    event.preventDefault()

    const response = await fetch('/api/Users', {
      method: 'POST',
      headers: { 'content-type': 'application/json', ...authHeader() },
      body: JSON.stringify(newRollerblade),
    })
      .then(response => response.json())
      .then(apiResponse => {
        if (apiResponse.status === 400) {
          setErrorMessage(Object.values(apiResponse.errors).join(' '))
        } else {
          history.push('/')
        }
      })
  }
  return (
    <>
      <div className="card">
        <div className="card-header">Create an account</div>
        <div className="card-body">
          {errorMessage && (
            <div className="alert alert-danger" role="alert">
              {errorMessage}
            </div>
          )}
          <form onSubmit={handleFormSubmit}>
            <div className="form-group">
              <label htmlFor="username">User Name</label>
              <textarea
                type="text"
                className="form-control"
                id="username"
                value={newRollerblade.username}
                onChange={handleFieldChange}
              />
              <small id="titleHelp" className="form-text text-muted">
                Enter your user name
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <textarea
                type="text"
                className="form-control"
                id="fullName"
                value={newRollerblade.fullName}
                onChange={handleFieldChange}
              />
              <small id="titleHelp" className="form-text text-muted">
                Enter your user name
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <textarea
                type="email"
                className="form-control"
                id="email"
                value={newRollerblade.email}
                onChange={handleFieldChange}
              />
              <small id="titleHelp" className="form-text text-muted">
                Input the title of the skates
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <textarea
                type="password"
                className="form-control"
                id="password"
                value={newRollerblade.password}
                onChange={handleFieldChange}
              />
              <small id="titleHelp" className="form-text text-muted">
                Enter your password{' '}
              </small>
            </div>

            <div className="form-group">
              <label htmlFor="skill">Skill</label>
              <textarea
                type="text"
                className="form-control"
                id="skill"
                value={newRollerblade.skill}
                onChange={handleFieldChange}
              />{' '}
              <small id="titleHelp" className="form-text text-muted">
                Input Beginner, Intermediate, Advanced, or Pro.
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="maneuverability">Maneuverability</label>
              <textarea
                type="text"
                className="form-control"
                id="maneuverability"
                value={newRollerblade.maneuverability}
                onChange={handleFieldChange}
              />{' '}
              <small id="titleHelp" className="form-text text-muted">
                Input Low, Medium, High, or Very High.
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="speed">Speed</label>
              <textarea
                type="text"
                className="form-control"
                id="speed"
                value={newRollerblade.speed}
                onChange={handleFieldChange}
              />{' '}
              <small id="titleHelp" className="form-text text-muted">
                Input Low, Medium, High, or Very High.
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="fit">Fit</label>
              <textarea
                type="text"
                className="form-control"
                id="fit"
                value={newRollerblade.fit}
                onChange={handleFieldChange}
              />{' '}
              <small id="titleHelp" className="form-text text-muted">
                Input Comfort, Racing, or Balanced.
              </small>
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </>
  )
}
