import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { Route, Switch } from 'react-router'
import { Home } from './Home'
import { useDropzone } from 'react-dropzone'

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
    photoURL: '',
  })
  const onDropFile = async acceptedFiles => {
    const fileToUpload = acceptedFiles[0]
    console.log(fileToUpload)

    const formData = new FormData()

    formData.append('file', fileToUpload)

    const response = await fetch('/api/uploads', {
      method: 'POST',
      headers: {
        ...authHeader(),
      },
      body: formData,
    })

    if (response.status === 200) {
      const apiResponse = await response.json()

      const url = apiResponse.url
      console.log(url)
      setNewRollerblade({ ...newRollerblade, photoURL: url })
    } else {
      setErrorMessage('Unable to upload image')
    }
  }
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
    if (response.status === 401) {
      setErrorMessage('Not Authorized')
      return
    }

    const apiResponse = await response.json()

    if (apiResponse.errors) {
      setErrorMessage(Object.values(apiResponse.errors).join(' '))
    } else {
      history.push('/')
    }
  }
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: onDropFile,
  })
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
                type="Password"
                className="form-control"
                id="password"
                value={newRollerblade.password}
                onChange={handleFieldChange}
              />
              <small id="titleHelp" className="form-text text-muted">
                Enter your password{' '}
              </small>
            </div>

            <select
              className="dropdown"
              id="skill"
              onChange={handleFieldChange}
            >
              <option value="Beginner">Skill</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
              <option value="Pro">Pro</option>
            </select>

            <select
              className="dropdown"
              id="maneuverability"
              onChange={handleFieldChange}
            >
              <option value="Beginner">Maneuverability</option>

              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
              <option value="Very High">Very High</option>
            </select>
            <select
              className="dropdown"
              id="speed"
              onChange={handleFieldChange}
            >
              <option value="Low">Speed</option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
              <option value="Very High">Very High</option>
            </select>

            <select className="dropdown" id="fit" onChange={handleFieldChange}>
              <option value="Comfort">Fit</option>
              <option value="Comfort">Comfort</option>

              <option value="Balanced">Balanced</option>
              <option value="Racing">Racing</option>
            </select>

            {newRollerblade.photoURL && (
              <img
                className="userfeaturesimagealluser"
                src={newRollerblade.photoURL}
                alt="Profile picture"
              />
            )}
            <div className="alert alert-primary">
              <div {...getRootProps()}>
                <input value={newRollerblade.photoURL} type="hidden" />
                {isDragActive
                  ? 'Drop the files here ...'
                  : 'Drag a new file here to upload!'}
              </div>
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
