import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function SingleRollerbladeFromList(props) {
  const rollerblade = props.rollerblade

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
          <a className=" " href="/AddRollerblades">
            {' '}
            Add
          </a>
        </li>

        <li className="">
          <a className="" href="/ShowRollerblades">
            {' '}
            View / Your Blades
          </a>
        </li>

        <li className="">
          <a className=" " href="/ShowUsers">
            {' '}
            Users
          </a>
        </li>
      </div>
      <Link
        to={`/Rollerblades/${rollerblade.id}`}
        className="list-group-item list-group-item-action"
      >
        <div className="thingsToConsiderpracticepp">
          <h3 className="">{rollerblade.title}</h3>
          <img
            className="userfeaturesimageall"
            src={rollerblade.photoURL}
            alt=""
          />
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
      </Link>
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
      <div className="list-group">
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
