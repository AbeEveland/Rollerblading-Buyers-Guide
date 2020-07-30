import React from 'react'

const ThingsToConsider = () => {
  return (
    <>
      <div className="s">
        <li>
          <a className="" href="/SkillLevel">
            {' '}
            Skill
          </a>
        </li>
        <li>
          <a className=" " href="/SkatingStyle">
            Style
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
      <div className="q">
        <h1 className="">Things to consider </h1>
        <p>
          Things to consider will take you through the many options presented on
          our site to help you use our filters and product descriptions to
          narrow down the field. The main factors that you will be guided
          through are:
        </p>
      </div>
      <div className="fleximage">
        <img
          className="userfeaturesimage"
          src="https://www.powerslide.com/bilder/_custom/kategorien/psweb_swell_category1.jpg"
          alt=""
        />

        <img
          className="userfeaturesimagetwo"
          src="https://www.powerslide.com/bilder/_custom/kategorien/psweb_swell_category2.jpg"
          alt=""
        />
        <img
          className="userfeaturesimagetwo"
          src="https://www.powerslide.com/bilder/_custom/kategorien/doop_1920.jpg"
          alt=""
        />
      </div>
    </>
  )
}

export default ThingsToConsider
