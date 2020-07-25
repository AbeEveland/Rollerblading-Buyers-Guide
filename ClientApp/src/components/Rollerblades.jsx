import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { authHeader } from './auth'

function SingleRollerbladeFromList(props) {
  const rollerblade = props.rollerblade

  return (
    <Link
      to={`/rollerblades/${rollerblade.id}`}
      className="list-group-item list-group-item-action"
    >
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">{rollerblade.name}</h5>
        <small>{rollerblade.reviews.length} Reviews</small>
      </div>
      <p className="mb-1">{rollerblade.address}</p>
      <small className="mr-3">
        <button
          className="btn btn-success btn-sm"
          onClick={event => {
            event.preventDefault()
            props.handleVote(rollerblade.id, 'upvote')
          }}
        >
          <span className="mr-2" role="img" aria-label="upvote">
            👍🏻
          </span>
          {rollerblade.upvoteCount}
        </button>
      </small>
      <small className="mr-3">
        <button
          className="btn btn-danger btn-sm"
          onClick={event => {
            event.preventDefault()
            props.handleVote(rollerblade.id, 'downvote')
          }}
        >
          <span className="mr-2" role="img" aria-label="downvote">
            👎🏻
          </span>{' '}
          {rollerblade.downvoteCount}
        </button>
      </small>
    </Link>
  )
}

export function Rollerblades(props) {
  const [rollerblades, setRollerblades] = useState([])

  console.log('Rollerblade list rendering')

  useEffect(() => {
    reloadRollerblades()
  }, [props.activeFilter])

  const reloadRollerblades = () => {
    const url =
      props.activeFilter.length === 0
        ? `/api/Rollerblades`
        : `/api/Rollerblades?filter=${props.activeFilter}`

    fetch(url)
      .then(response => response.json())
      .then(apiData => {
        setRollerblades(apiData)
      })
  }

  const handleVote = (id, type) => {
    const url = `/api/RestaurantVotes/${id}/${type}`

    fetch(url, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
    }).then(() => {
      reloadRollerblades()
    })
  }

  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="#">Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {rollerblades.length} Rollerblades Found
          </li>
        </ol>
      </nav>
      <div className="list-group">
        {rollerblades.map(rollerblade => (
          <SingleRollerbladeFromList
            key={rollerblade.id}
            restaurant={rollerblade}
            handleVote={handleVote}
          />
        ))}
      </div>
    </>
  )
}
