import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function SingleRollerbladeFromList(props) {
  const rollerblade = props.rollerblade

  return (
    <>
      <div
        to={`/Rollerblades/${rollerblade.id}`}
        className="recommendedskatesitem"
      >
        <div className="thingsToConsiderpracticepp">
          <h1 className="pics">{rollerblade.title}</h1>
          <img
            className="userfeaturesimageall"
            src={rollerblade.photoURL}
            alt=""
          />
          <li>
            <strong>Skill: </strong> {rollerblade.skill}
          </li>
          <li>
            {' '}
            <strong>Speed: </strong> {rollerblade.speed}
          </li>
          <li>
            {' '}
            <strong>Fit: </strong> {rollerblade.fit}
          </li>
          <li>
            {' '}
            <strong>Maneuverability : </strong> {rollerblade.maneuverability}
          </li>
          <li>
            {' '}
            <strong>Price: </strong>
            {rollerblade.price}
          </li>

          <p className="description">{rollerblade.description}</p>
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

export function Rollerblades(props) {
  const [rollerblades, setRollerblade] = useState([])

  console.log('Rollerblade list rendering')
  useEffect(() => {
    const url =
      props.activeFilter.length === 0
        ? `/api/Rollerblades`
        : `/api/Rollerblades?filter=${props.activeFilter}`

    fetch(url)
      .then(response => response.json())
      .then(apiData => {
        setRollerblade(apiData)
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
        {rollerblades.map(rollerblade => (
          <SingleRollerbladeFromList
            key={rollerblade.id}
            rollerblade={rollerblade}
          />
        ))}
      </div>
    </>
  )
}
