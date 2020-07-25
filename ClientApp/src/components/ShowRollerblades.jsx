import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { authHeader } from './auth'

export function ShowRollerblades() {
  // fetch('/api/Rollerblades', {
  //   method: 'GET',
  //   headers: { 'content-type': 'application/json', ...authHeader() },
  //   body: JSON.stringify(newReview),
  // })

  const [rollerblade, setRollerblade] = useState({
    title: '',
    // description: '',
    // address: '',
    // telephone: '',
    // reviews: [],
  })

  const params = useParams()
  const id = params.id

  const fetchrollerblades = async () => {
    const response = await fetch(`api/Rollerblades`)
    const apiData = await response.json()

    setRollerblade(apiData)
  }

  useState(() => {
    fetchrollerblades()
  }, [id])
  return (
    <div className="taco-listing">
      <div className="media mb-5">
        <div className="media-body">
          <div className="showrollerblades"></div>
          {/* <h1 className="mt-0">{rollerblade.title}</h1> */}
          {/* {restaurant.description} */}
          {/* <address className="mt-3">
            {/* <Link to="maps.google.com">{restaurant.address}</Link> */}
          {/* </address> */}
          {/* <Link to={`tel:${restaurant.telephone}`}>{restaurant.telephone}</Link> */}{' '}
          */}
        </div>
      </div>

      {/* <div className="row mb-5">
        {rollerblade.reviews.length > 0 && (
          <div className="col-12">
            <h3>Reviews</h3>
            <ul className="timeline">
              {rollerblade.reviews.map(review => (
                <li key={review.id}>
                  <p className="mb-2">
                    {review.summary}
                    <span className="float-right">{review.createdAt}</span>
                  </p>
                  <p>{review.body}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div> */}

      {/* <div className="card">
        <div className="card-header">Enter your own review</div>
        <div className="card-body">
          <form>
            <div className="form-group">
              <label htmlFor="summary">Summary</label>
              <input
                type="text"
                className="form-control"
                id="summary"
                aria-describedby="summaryHelp"
              />
              <small id="summaryHelp" className="form-text text-muted">
                Enter a brief summary of your review. Example:{' '}
                <strong>Great food, good prices.</strong>
              </small>
            </div>
            <div className="form-group">
              <label for="review">Review</label>
              <textarea type="text" className="form-control" id="review" />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div> */}
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
    </div>
  )
}
