import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function SingleUserFromList(props) {
  const user = props.user

  return (
    <>
      <div to={`/Users/${user.id}`} className="recommendedskatesitemuser">
        <div className="thingsToConsiderpracticeppuser">
          <li className="">{user.fullName}</li>
          <div className="Borderbottomfeaturess"></div>
          <img
            className="userfeaturesimagealluser"
            src={user.photoURL}
            alt=""
          />
          <div className="Borderbottomfeaturess"></div>

          <li>
            <strong>Skill:</strong> <br />
            {user.skill}
          </li>
          <li>
            <strong>Maneuverability:</strong> <br />
            {user.maneuverability}
          </li>
          <li>
            <strong>Speed:</strong> <br />
            {user.speed}
          </li>
          <li>
            <strong>Fit:</strong>
            <br /> {user.fit}
          </li>
          <li>{user.price}</li>
        </div>
        {/* <small>5 Reviews</small> */}
        {/* <p className="mb-1">{rollerblade.description}</p> */}
        {/* <small className="mr-3">
        <button className="btn btn-success btn-sm">
          <span className="mr-2" role="img" aria-label="upvote">
            👍🏻
          </span>
          5
        </button>
      </small>
      <small className="mr-3">
        <button className="btn btn-danger btn-sm">
          <span className="mr-2" role="img" aria-label="downvote">
            👎🏻
          </span>{' '}
          3
        </button>
      </small> */}
      </div>
    </>
  )
}

export function User(props) {
  const [user, setUser] = useState([])

  console.log('User list rendering')
  useEffect(() => {
    const url =
      props.activeFilter.length === 0
        ? `/api/Users`
        : `/api/Users?filter=${props.activeFilter}`

    fetch(url)
      .then(response => response.json())
      .then(apiData => {
        setUser(apiData)
      })
  }, [props.activeFilter])

  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="thingsToConsiderpracticepp">
          {/* <li className="thingsToConsiderpracticepp" aria-current="page">
            {rollerblades.length} Rollerblades Found
          </li> */}
        </ol>
      </nav>
      <div className=" singlerollerbladefromlist">
        {user.map(user => (
          <SingleUserFromList key={user.id} user={user} />
        ))}
      </div>
    </>
  )
}
