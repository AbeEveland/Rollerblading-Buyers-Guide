import React from 'react'
import { NavBar } from './NavBar'
import { getUser, isLoggedIn } from './auth'

const ShopRollerblades = () => {
  const user = getUser()

  return (
    <>
      <NavBar />
      <div className="userfeatures">
        <ol className="">
          <li>
            <p className="xxxp">Welcome</p>
          </li>
          <li className="">{isLoggedIn(user) && <h3>{user.fullName}</h3>}</li>
          <li>
            <a className=" xxx" href="/AddRollerblades">
              {' '}
              Add a pair of rollerblades
            </a>
          </li>

          <li>
            <a className="xxx " href="/ShowRollerblades">
              {' '}
              View your Rollerblades
            </a>
          </li>
          <li>
            <a className=" xxx" href="/RecommendedSkates">
              {' '}
              View all Rollerblades
            </a>
          </li>
          <li>
            <a className="xxx " href="/ShowUsers">
              {' '}
              ShowUsers
            </a>
          </li>
          <li>
            <a className=" xxx" href="/ShopRollerblades">
              {' '}
              Shop Rollerblades
            </a>
          </li>
          {/* <li>
            <a className=" " href="/SkateSuggestion">
              {' '}
              SkateSuggestion
            </a>
          </li> */}
          {/* <li>
            <a className=" " href="/AlterUser">
              {' '}
              AlterUser
            </a>
          </li> */}
          {/* <li>
            <a className=" " href="/YourRollerblades">
              {' '}
              YourRollerblades
            </a>
          </li> */}
        </ol>
      </div>
      <div className="ShopSearch">
        <form
          id="cercator"
          action="https://www.rollerblade.com/usa/search-results/"
          class="search-form"
          method="post"
        >
          <input
            className="ShopSearchBar"
            type="text"
            name="search"
            id="cercainp"
            placeholder="What would you like to shop for?"
          />
          <input type="hidden" name="solonome" id="solo_nome" value="N" />
        </form>
      </div>

      <div>
        {/* <img
          className="rollerbladelogoshop"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQDzPqIQfpjoh9y9Q2V2PrTCoepSsiBgL0Dbw&usqp=CAU"
          alt=""
          width="100px"
        /> */}
      </div>
      <img
        className="shopimagetwo"
        src="https://s3.amazonaws.com/images.gearjunkie.com/uploads/2020/05/Rollerblades.jpg"
        alt=""
      />
    </>
  )
}

export default ShopRollerblades
