import React from 'react'

export function UserFeatures() {
  return (
    <>
      <div className="thingsToConsiderpractice">
        <h1>Features</h1>
        <p>
          The above features will help you keep track of your rollerblading
          data. You can: read up on things to consider when shopping for skates,
          add your own pair of skates to the database, view your personally
          suggested skates as well as all the skates on our site, and you can
          check out your fellow bladers. Don't forget that in the search bar up
          top, you can shop for any pair of skates!
        </p>
      </div>
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
          <a className=" " href="/RecommendedSkates">
            {' '}
            View / All
          </a>
        </li>
        <li className="">
          <a className=" " href="/ShowUsers">
            {' '}
            Users
          </a>
        </li>
      </div>

      <img
        className="userfeaturesimage"
        src="https://www.powerslide.com/bilder/_custom/kategorien/rollerskates_lifestyle.jpg"
        alt=""
      />
    </>
  )
}
