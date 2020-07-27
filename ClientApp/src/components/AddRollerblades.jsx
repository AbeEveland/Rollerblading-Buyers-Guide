import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { useDropzone } from 'react-dropzone'
import { Route, Switch } from 'react-router'
import { Home } from './Home'

import { authHeader } from './auth'
import { NavBar } from './NavBar'

export function AddRollerblades() {
  const history = useHistory()
  const [errorMessage, setErrorMessage] = useState()
  const [newRollerblade, setNewRollerblade] = useState({
    title: '',
    skill: '',
    maneuverability: '',
    speed: '',
    fit: '',
    price: '',
    description: '',
    photoURL: '',
  })

  const onDropFile = async acceptedFiles => {
    const fileToUpload = acceptedFiles[0]
    console.log(fileToUpload)

    const formData = new FormData()

    formData.append('file', fileToUpload)

    const response = await fetch('/api/Uploads', {
      method: 'POST',
      headers: {
        ...authHeader(),
      },
      body: formData,
    })

    if (response.status === 200) {
      const apiResponse = await response.json()

      const url = apiResponse.url

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

    const response = await fetch('/api/Rollerblades', {
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
      <div className="xxxp">
        <li className="">
          <a className=" " href="/ThingsToConsider">
            {' '}
            Things To Consider
          </a>
        </li>

        <li className="">
          <a className="" href="/ShowRollerblades">
            {' '}
            View / Your Blades
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
      <div className="card">
        <div className="card-header">Add a Pair of rollerblades</div>
        <div className="card-body">
          {errorMessage && (
            <div className="alert alert-danger" role="alert">
              {errorMessage}
            </div>
          )}
          <form onSubmit={handleFormSubmit}>
            {/* <div className="form-group">
              <label htmlFor="name">Username</label>
              <input
                type="text"
                className="form-control"
                id="userName"
                value={newRollerblade.userName}
                onChange={handleFieldChange}
              /> */}
            {/* </div> */}

            <div className="form-group">
              <label htmlFor="title">Title</label>
              <textarea
                type="text"
                className="form-control"
                id="title"
                value={newRollerblade.title}
                onChange={handleFieldChange}
              />
              <small id="titleHelp" className="form-text text-muted">
                Input the title of the skates
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
            <div className="form-group">
              <label htmlFor="price">Price</label>
              <textarea
                type="text"
                className="form-control"
                id="price"
                value={newRollerblade.price}
                onChange={handleFieldChange}
              />{' '}
              <small id="titleHelp" className="form-text text-muted">
                Input the price.
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                type="text"
                className="form-control"
                id="description"
                value={newRollerblade.description}
                onChange={handleFieldChange}
              />{' '}
              <small id="titleHelp" className="form-text text-muted">
                Input the description of the rollerblade.
              </small>
            </div>

            <div className="alert alert-primary">
              <div {...getRootProps()}>
                <input value={newRollerblade.photoURL} {...getInputProps()} />
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
