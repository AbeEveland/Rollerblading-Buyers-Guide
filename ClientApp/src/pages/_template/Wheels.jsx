import React, { useState } from 'react'
import { Route, Switch } from 'react-router'
import { Home } from '../Home'
const Wheels = () => {
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
      <div className="wheels">
        <h1>Wheel Size</h1>
        <p>
          Wheel size has traditionally been closely tied with speed,
          acceleration, comfort, and stability and as a result, is relied upon
          heavily when deciding which skate is best suited for your skill level.
          In our skate filter, you can search for skates based on specific wheel
          diameters offered and you will see the wheel size displayed
          prominently in every product description on our site.
        </p>{' '}
        <p>
          Small wheels are recommended for lower-skilled skaters for their high
          stability and control. Large wheels are typically reserved for more
          advanced skaters looking for more speed.
        </p>
        <p>
          If you are interested in the benefits of large wheel skating, without
          fear of losing too much stability or control, we recommend looking at
          a 3 Wheel Skate. These skates allow lower skill levels to gain access
          to the large wheel experience thanks to shorter frames that allow for
          better maneuverability.{' '}
        </p>
      </div>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </>
  )
}

export default Wheels
