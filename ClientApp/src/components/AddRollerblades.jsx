import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { useDropzone } from 'react-dropzone'
import { Route, Switch } from 'react-router'
import { Home } from './Home'

import { authHeader } from './auth'

export function AddRollerblades() {
  const history = useHistory()
  const [errorMessage, setErrorMessage] = useState()
  const [newRollerblade, setNewRollerblade] = useState({
    userName: '',
    title: '',
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
      <a href="/">Home</a>

      <div className="card">
        <div className="card-header">Add a Pair of skates</div>
        <div className="card-body">
          {errorMessage && (
            <div className="alert alert-danger" role="alert">
              {errorMessage}
            </div>
          )}
          <form onSubmit={handleFormSubmit}>
            <div className="form-group">
              <label htmlFor="name">Username</label>
              <input
                type="text"
                className="form-control"
                id="userName"
                value={newRollerblade.userName}
                onChange={handleFieldChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Title</label>
              <textarea
                type="text"
                className="form-control"
                id="title"
                value={newRollerblade.title}
                onChange={handleFieldChange}
              />
              <small id="titleHelp" className="form-text text-muted">
                Enter the title of the skates{' '}
              </small>
            </div>

            <div className="form-group">
              <label htmlFor="address">Description</label>
              <textarea
                type="text"
                className="form-control"
                id="Description"
                value={newRollerblade.Description}
                onChange={handleFieldChange}
              />
            </div>

            <div className="alert alert-primary">
              <div {...getRootProps()}>
                <input {...getInputProps()} />
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
