import React from 'react'

export function UserFeatures() {
  return (
    <>
      <div className="s">
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
      <div className="q">
        <h1>Features</h1>
      </div>
      {/* <p>
          The above features will help to keep track of your rollerblading data.
          You can :
          </p>
          <li>- Read shopping considerations -</li>
          <div className="Borderbottomfeaturess"></div>
          <div classNAme="row">
          <li>- Add a pair of skates. -</li>
          <div className="Borderbottomfeaturess"></div>
          <li>- View skates -</li>
          <div className="Borderbottomfeaturess"></div>
          <li>- Check out fellow bladers. -</li>
        </div> */}
      <div className="fleximage">
        <img
          className="userfeaturesimage"
          src="https://www.powerslide.com/bilder/_custom/kategorien/rollerskates_lifestyle.jpg"
          alt=""
        />
        <img
          className="userfeaturesimagetwo"
          src="https://www.powerslide.com/bilder/startseite/triskates.jpg"
          alt=""
        />
        <img
          className="userfeaturesimagetwo"
          src="https://www.powerslide.com/bilder/_custom/kategorien/phuzion_1920.jpg"
          alt=""
        />
      </div>
    </>
  )
}
