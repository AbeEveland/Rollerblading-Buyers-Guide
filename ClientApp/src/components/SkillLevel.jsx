import React, { useState } from 'react'
import { Route, Switch } from 'react-router'
import { Home } from './Home'

const SkillLevel = () => {
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
      <div className="skillLevel">
        <h1>Skill Level</h1>
        <p>
          In order to enjoy skating, you need a skate that suits your abilities.
          It is natural to consider a skate slightly beyond your current skill
          level since you are only going to get better and will be glad to have
          performance ready equipment when you do. Be cautious of
          underestimating the learning curve with each jump though, as a skate
          that is too far outside of your skill level will take the fun out of
          skating and may cause you to injure yourself!
        </p>{' '}
        <h2>Beginner</h2>
        <p>
          For new and returning skaters with little or no confidence in ability.
          All models are supportive, stable and feel comfortable out of the box
          without break-in. They come equipped with smaller wheels and a brake
          for slower and more controlled speed so that confidence and skill can
          increase.
        </p>
        <h2>Intermediate</h2>
        <p>
          These skates require some skating experience, either recently or in
          the past, with confidence in your ability to turn and brake. If you've
          been out of the game for an extended period of time, consider a
          beginner skate or an intermediate with wheels no larger than 4x84mm or
          3x110 to help with control and speed. If you are a little more
          comfortable, there are lots of options depending on the type of
          skating you're after and the environment you have available to skate
          in.
        </p>
        <h2>Advanced</h2>
        <p>
          Skating is (or was) part of your regular routine. Your ability and
          experience give you the confidence to skate your heart out no matter
          what the situation. Whichever style of skating you choose, you will
          benefit from a higher performing skate within that category. Your
          ability will demand performance from the skate and may overpower
          basic, lower level models.
        </p>
        <h2>Expert</h2>
        <p>
          You have clocked years of dedication to the sport and are without
          limits. You have mastered your stride, can skate forward or back, long
          or short distances. You will easily overpower lower level skates so it
          is important to not jump into basic models within the category chosen.
          Your skating ability will demand more high-end performance features
          from the skate.
        </p>
      </div>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </>
  )
}

export default SkillLevel
