import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
// import format from 'date-fns/format'
import { authHeader } from './auth'

const dateFormat = `EEEE, MMMM do, yyyy 'at' h:mm aaa`

export function ShowRollerblades() {
  const params = useParams()
  const id = parseInt(params.id)

  const [rollerblade, setRollerblade] = useState({
    userName: '',
    title: '',
    description: '',
    photoURL: '',
  })

  const [newReview, setNewReview] = useState({
    body: '',
    summary: '',
    rollerbladeId: id,
  })

  const fetchRollerblades = async () => {
    const response = await fetch(`/api/Rollerblades`)
    const apiData = await response.json()

    setRollerblade(apiData)
  }

  useState(() => {
    fetchRollerblades()
  }, [id])

  const handleNewReviewFieldChange = event => {
    const id = event.target.id
    const value = event.target.value

    setNewReview({ ...newReview, [id]: value })
  }

  const handleNewReviewSubmit = event => {
    event.preventDefault()

    fetch('/api/Reviews', {
      method: 'POST',
      headers: { 'content-type': 'application/json', ...authHeader() },
      body: JSON.stringify(newReview),
    })
      .then(response => {
        if (response.status === 401) {
          return {}
        } else {
          return response.json()
        }
      })
      .then(apiResponse => {
        fetchRollerblades()
        setNewReview({ ...newReview, body: '', summary: '' })
      })
  }
  return (
    <div className="taco-listing">
      {/* <div className="media mb-5">
        {rollerblade.photoURL ? (
          <img
            alt="rollerblade Photo"
            width={200}
            className="pr-3"
            src={rollerblade.photoURL}
          />
        ) : (
          <span className="pr-3 display-2" role="img" aria-label="taco">
            🌮
          </span>
        )}
      </div> */}
      <>
        {rollerblade.length > 0 && (
          <div className="showrollerblades">
            <h3>Roller Blades</h3>
            {rollerblade.map(rollerblade => (
              <li key={rollerblade.id}>
                <p className="">{rollerblade.title}</p>
              </li>
            ))}
          </div>
        )}
      </>
      //{' '}
    </div>
  )
}
