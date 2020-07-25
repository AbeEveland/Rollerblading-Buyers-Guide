import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { getUser } from './auth'

export function AlterUser() {
  const history = useHistory()
  const user = getUser()

  const [errorMessage, setErrorMessage] = useState()
  const [newUser, setNewUser] = useState({
    fullName: '',
    email: '',
    password: '',
    skill: '',
    maneuverability: '',
    speed: '',
    fit: '',
    price: '',
  })
  const handleFieldChange = event => {
    const value = event.target.value
    const fieldName = event.target.id
    const updatedUser = { ...newUser, [fieldName]: value }
    setNewUser(updatedUser)
  }
  const handleFormSubmit = event => {
    event.preventDefault()
    fetch('/api/Users', {
      method: 'Post',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(newUser),
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
    <div className="card">
      <div className="card-header">Creat an account.</div>
      <div className="card-body">
        {errorMessage && (
          <div className="alert alert-danger" role="alert">
            {errorMessage}
          </div>
        )}
        <form onSubmit={handleFormSubmit}>
          <div className="form-group">
            <label htmlFor="FullName">full name</label>

            <input
              type="text"
              className="form-control"
              id="FullName"
              value={newUser.FullName}
              onChange={handleFieldChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="Email">Email</label>

            <input
              type="text"
              className="form-control"
              id="Email"
              value={newUser.Email}
              onChange={handleFieldChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="Password">Password</label>

            <input
              type="password"
              className="form-control"
              id="Password"
              value={newUser.Password}
              onChange={handleFieldChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="Skill">
              Is your skill level Beginner, Intermediate, Advanced, or Pro?
            </label>

            <input
              type="text"
              className="form-control"
              id="Skill"
              value={newUser.Skill}
              onChange={handleFieldChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="maneuverability">
              Is your priority for maneuverability: low, medium, high, or very
              high?{' '}
            </label>
            <input
              type="text"
              className="form-control"
              id="maneuverability"
              value={newUser.maneuverability}
              onChange={handleFieldChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="fit">
              Would you prefer a boot that fits for comfort, racing or balanced?{' '}
            </label>
            <input
              type="text"
              className="form-control"
              id="fit"
              value={newUser.fit}
              onChange={handleFieldChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">
              Is your price range $0-$200, $200-$400, or $400 and up?
            </label>
            <input
              type="text"
              className="form-control"
              id="price"
              value={newUser.price}
              onChange={handleFieldChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}
