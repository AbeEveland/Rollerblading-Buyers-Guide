import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
// import format from 'date-fns/format'
import { authHeader } from './auth'

const dateFormat = `EEEE, MMMM do, yyyy 'at' h:mm aaa`

export function ShowUsers() {
  const params = useParams()
  const id = parseInt(params.id)

  const [users, setUsers] = useState({
    fullName: '',
    photoURL: '',
  })

  const [newReview, setNewReview] = useState({
    body: '',
    summary: '',
    usersId: id,
  })

  const fetchusers = async () => {
    const response = await fetch(`/api/Users`)
    const apiData = await response.json()

    setUsers(apiData)
  }

  useState(() => {
    fetchusers()
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
        fetchusers()
        setNewReview({ ...newReview, body: '', summary: '' })
      })
  }
  return (
    // <div className="taco-listing">
    //   <div className="media mb-5">
    //     {users.photoURL ? (
    //       <img
    //         alt="users Photo"
    //         width={200}
    //         className="pr-3"
    //         src={users.photoURL}
    //       />
    //     ) : (
    //       <span className="pr-3 display-2" role="img" aria-label="taco">
    //         🌮
    //       </span>
    //     )}
    //   </div>
    <>
      {users.length > 0 && (
        <div className="showrollerblades">
          <h3>Users</h3>
          {users.map(rollerblade => (
            <li key={rollerblade.id}>
              <p className="">{rollerblade.fullName}</p>
            </li>
          ))}
        </div>
      )}
    </>
    // </div>
  )
}
