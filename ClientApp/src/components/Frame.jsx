import React, { useState } from 'react'
import { Route, Switch } from 'react-router'
import { Home } from './Home'
import { NavBar } from './NavBar'

const Frame = () => {
  return (
    <>
      <div className="sskill">
        <li>
          <a className="" href="/SkillLevel">
            {' '}
            Skill
          </a>
        </li>

        <li>
          <a className=" " href="/SkatingEnviroment">
            Enviroment
          </a>
        </li>
        <li>
          <a className=" " href="/BootMaterial">
            Boots{' '}
          </a>
        </li>
        <li>
          <a className=" " href="/Wheels">
            Wheels{' '}
          </a>
        </li>
        <li>
          <a className=" " href="/Frame">
            {' '}
            Frame
          </a>
        </li>
      </div>
      <div className="qskill">
        <h1>Frames</h1>
        <p>
          The easiest way to customize a skate and its performance is the
          frames. Here you will learn about boot/frame compatibility, the types
          of frames and a little about their characteristics so that you can
          easily find the frame that best suits your needs via our online frame
          filter and product descriptions.
        </p>{' '}
        <p>
          The main factors we will guide you through on this page are:
          <div className="row"></div>
        </p>
        <h2>Wheel Configuration</h2>
        <p>
          The wheel configuration tells what wheels are to be used on a
          particular frame.
        </p>
        <p>
          Large wheel frames were once only for advanced skaters due to the
          length of frame and skill needed to get up and down from speeds. The
          arrival of 3-wheel frames has changed this, giving less experienced
          skaters access to the benefits of larger wheels on short and
          maneuverable frames.
        </p>
        <h2>Frame Types</h2>
        <p>
          Just because it fits, doesn’t mean you should buy it. This next filter
          allows you to select from frames specific to the skating style or
          environment you intend to skate.
        </p>
        <h2>Urban</h2>
        <p>
          Meant for fun on the streets, they optimize control and
          maneuverability by being the shortest length possible to accommodate
          their stated wheel configuration. Short wheelbases make them
          responsive for weaving in and out of crowds. These frames tend to be
          made of heavier metals than those found in speed frames or many
          cross-training frames to increase durability and rigidity.
        </p>
        <h2>Freestyle/Slalom</h2>
        <p>
          Typically have a max wheel size of 80mm in either a flat or more
          advanced ‘rockered’ wheel configuration and are not compatible with
          brake mounts. Similar to urban frames in that they are designed to
          give the skater ultimate control. A short wheelbase and high-grade
          aluminum are used to make ideal for maneuvering cones, artistic dance
          or anything else you want to do with precision.
        </p>
        <h2>Speed</h2>
        <p>
          Technologically advanced to be light, stable and provide efficient
          energy transfer at high rates of speed. Aerospace grade aluminums or
          alloys are common base materials and they support large wheel sizes
          for the high speeds associated with Inline Speed Racing. Frame lengths
          tend to be longer than other frames, making them best suited for
          advanced skaters who are looking for something speed driven.
        </p>
        <h2>Length</h2>
        <p>
          The longer the frame, the more difficult it is it to maneuver. 3-wheel
          frames have helped to shorten frame lengths, even when using large
          wheels.
        </p>
        <h2>Height</h2>
        <p>
          The higher off the ground, the less stable you will feel. This often
          referred to as deck height.
        </p>
        <h2>Material</h2>
        <p>
          Composite plastic, aluminum (or other alloy) will affect stiffness,
          vibration, response, grip, weight and even durability.
        </p>
        <h2>Weight</h2>
        <p>
          Heavier frames may be more durable and/or stiff, but would also add
          fatigue on longer skates.
        </p>
      </div>
      {/* <img
        className="userfeaturesimage"
        src="https://www.powerslide.com/bilder/_custom/kategorien/frames_800_04.jpg"
        alt=""
      /> */}
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </>
  )
}

export default Frame
