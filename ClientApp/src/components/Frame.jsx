import React, { useState } from 'react'
import { Route, Switch } from 'react-router'
import { Home } from './Home'
import { NavBar } from './NavBar'

const Frame = () => {
  return (
    <>
      <div className="xxxp">
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
      <div className="thingsToConsiderpracticep">
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
          <li>Mounting (Compatibility)</li>
          <li>Wheel Configuration</li>
          <li>Frame Types</li>
          <li>Additional Characteristics</li>
        </p>
        <h3>Mounting (Compatibility)</h3>
        <p>
          In order for frames to work on your boots, they must be compatible.
          Compatibility requires that the mounting points on the bottom of the
          boots, match the mounting slots available on the frames. There are
          just 4 types of mounting:
        </p>
        <h3>2pt (Point) Mount</h3>
        <p>
          As the name implies, there are two mounting points where the frames
          fasten to the boots. Found on recreational, cross-training,
          all-terrain and speed frames (and boots), it is the most common.
          Aggressive frames are NOT included (see UFS Mount). The measurement
          between mounting points on the boot determines which 2pt Mount frames
          are compatible. Measurements of 165mm or 195mm spacing are most
          common. Boots are typically limited to one measurement, where frames
          may be compatible with more than one.
        </p>
        <h3>UFS Mount</h3>
        <p>
          Universal Frame System (UFS) mounting is exclusive to aggressive
          frames and boots. So although they will fit all aggressive boots, they
          will not fit any other mounting types. Unlike other frames that have
          two mounting points, UFS mounting plates are the same height both in
          the front and back.
        </p>
        <h3>3pt Mount</h3>
        <p>
          Proprietary to the Bont brand, 3pt Mount frames fasten to the boot at
          3 points and are compatible with Bont 3pt Mount speed boots only. Its
          design serves to help lower the height of the boot and provide added
          stiffness to increase energy transmission.
        </p>
        <h3>Trinity Mount</h3>
        <p>
          Proprietary to the Powerslide brand of skates, Trinity Mount frames
          also fasten at three locations working to lower the height of a skate
          and increase energy transmission.
        </p>
        <h3>Wheel Configuration</h3>
        <p>
          The wheel configuration tells what wheels are to be used on a
          particular frame.
        </p>
        <p>Wheel configuration is shown in this format:</p>
        <p>Number of Wheels x Size (i.e. 4x110mm)</p>
        <p>
          Large wheel frames were once only for advanced skaters due to the
          length of frame and skill needed to get up and down from speeds. The
          arrival of 3-wheel frames has changed this, giving less experienced
          skaters access to the benefits of larger wheels on short and
          maneuverable frames.
        </p>
        <h3>Frame Types</h3>
        <p>
          Just because it fits, doesn’t mean you should buy it. This next filter
          allows you to select from frames specific to the skating style or
          environment you intend to skate.
        </p>
        <h3>Urban</h3>
        <p>
          Meant for fun on the streets, they optimize control and
          maneuverability by being the shortest length possible to accommodate
          their stated wheel configuration. Short wheelbases make them
          responsive for weaving in and out of crowds. These frames tend to be
          made of heavier metals than those found in speed frames or many
          cross-training frames to increase durability and rigidity.
        </p>
        <h3>Freestyle/Slalom</h3>
        <p>
          Typically have a max wheel size of 80mm in either a flat or more
          advanced ‘rockered’ wheel configuration and are not compatible with
          brake mounts. Similar to urban frames in that they are designed to
          give the skater ultimate control. A short wheelbase and high-grade
          aluminum are used to make ideal for maneuvering cones, artistic dance
          or anything else you want to do with precision.
        </p>
        <h3>Speed</h3>
        <p>
          Technologically advanced to be light, stable and provide efficient
          energy transfer at high rates of speed. Aerospace grade aluminums or
          alloys are common base materials and they support large wheel sizes
          for the high speeds associated with Inline Speed Racing. Frame lengths
          tend to be longer than other frames, making them best suited for
          advanced skaters who are looking for something speed driven.
        </p>
        <h3>Length</h3>
        <p>
          The longer the frame, the more difficult it is it to maneuver. 3-wheel
          frames have helped to shorten frame lengths, even when using large
          wheels.
        </p>
        <h3>Height</h3>
        <p>
          The higher off the ground, the less stable you will feel. This often
          referred to as deck height.
        </p>
        <h3>Material</h3>
        <p>
          Composite plastic, aluminum (or other alloy) will affect stiffness,
          vibration, response, grip, weight and even durability.
        </p>
        <h3>Weight</h3>
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
