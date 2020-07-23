import React, { useState, useEffect, Component } from 'react'
import { Route, Switch } from 'react-router'
import { Home } from './Home'

import { Link } from 'react-router-dom'

function SingleRollerbladeFromList(props) {
  const rollerblade = props.rollerblade

  return (
    <>
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">{rollerblade.userName}</h5>
        <small>5 Reviews</small>
      </div>
      <p className="mb-1">{rollerblade.title}</p>
      <p className="mb-1">{rollerblade.description}</p>

      <small className="mr-3">
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
      </small>
    </>
  )
}
const RecommendedSkates = () => {
  const [rollerblades, setRollerblades] = useState([])

  useEffect(() => {
    fetch('/api/Rollerblades')
      .then(response => response.json())
      .then(apiData => {
        setRollerblades(apiData)
      })
  }, [])

  return (
    <>
      {/* <div className="homePageContainer"> */}
      {/* <img
    className="logo"
    src="https://store-images.s-microsoft.com/image/apps.14716.9007199266365238.ab475298-d17b-437b-b143-0537efcad818.aabd06dc-87c7-47a9-addf-1e26155db4b4?mode=scale&q=90&h=300&w=300"
    alt=""
    width="30px"
  /> */}
      <div className="homePageHeader">
        <a href="/">Home</a>
        <h1 className="headinghH1">ROLLERBLADE WAREHOUSE</h1>

        <button className="homePageAccountButtons">
          <img
            className="homePageAccountButton"
            src="https://thumbs.dreamstime.com/b/user-account-line-icon-outline-person-logo-illustration-linear-pictogram-isolated-white-90234649.jpg"
            alt="Account"
            width="20px"
          />
        </button>
      </div>
      <div className="SkatingStyle">
        <h1>Here is your recommended skates!</h1>
        <div className="list-group">
          {rollerblades.map(rollerblade => (
            <SingleRollerbladeFromList
              key={rollerblade.id}
              rollerblade={rollerblade}
            />
          ))}
        </div>
        <img
          src="https://cdn.skatepro.com/product/440/tempish-vintage-retro-top-line-inline-skates-ai.jpg"
          alt=""
        />
        <a href="https://www.skatepro.com/en-us/120-33313.htm">
          Tempish Vintage Retro Top Line Inline Skates
        </a>
      </div>
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/Question6" component={Question6} /> */}
      </Switch>
    </>
  )
}

export default RecommendedSkates
