import React from 'react'

export function Home() {
  return (
    <>
      <div className="q">
        <h1 className="">RollerBlade</h1>
      </div>
      <div className="s">
        <p>
          With a wide range of roller blades built for varying types of skating,
          it can be difficult to find the skate that is best suited for you.
          Here at Abe's rollerblade buyers guide, we offer assistance for
          someone that is interested in getting into the rollerblading
          scene.After creating a profile, click your name above to access the
          features that will assist you in buying a pair of blades. You can also
          shop for any rollerblade related products in the search bar above.
        </p>
      </div>
      <div className="fleximage">
        <img
          className="userfeaturesimage"
          src="https://www.powerslide.com/bilder/_custom/kategorien/fitness_2018.jpg"
          alt=""
        />
        <img
          className="userfeaturesimagetwo"
          alt="aaaa"
          src="https://www.powerslide.com/bilder/_custom/kategorien/urban-skates_01.jpg"
        />
        <iframe
          className="userfeaturesimagetwo"
          width="951"
          height="523"
          src="https://www.youtube.com/embed/V69cC1AGhug"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      {/* <div className="footer"></div> */}
    </>
  )
}
