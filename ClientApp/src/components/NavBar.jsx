import React, { useState, useEffect, Component } from 'react'
import { Link } from 'react-router-dom'
import { Route } from 'react-router'
import { isLoggedIn, logout } from './auth'
import { getUser } from './auth'
import { UserFeatures } from './UserFeatures'

export function NavBar(props) {
  const [activeFilter, setActiveFilter] = useState('')
  const [rollerblades, setRollerblades] = useState([])
  const [users, setUsers] = useState([])
  const [filterText, setFilterText] = useState('')
  const [navbarIsOpen, setNavbarIsOpen] = useState(false)

  const handleClickSearch = () => {
    console.log(`The user wants to search for ${filterText}`)
    props.setActiveFilter(filterText)
  }

  const handleLogout = () => {
    logout()

    window.location = '/'
  }

  const user = getUser()
  console.log(user)

  return (
    <>
      <nav
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
        className="navbar navbar-dark  "
      >
        <Link className="navbar-brand" to="#">
          <img
            src="https://www.powerslide.com/bilder/intern/shoplogo/Powerslide-Logo.jpg"
            alt=""
            width="0px"
          />{' '}
        </Link>
        <a href=""></a>
        <div className="zzzz">
          <p className="zzz">Welcome</p>
          <p className="zzz">
            {isLoggedIn(user) && (
              <Link to="/UserFeatures" className="zzz">
                {user.fullName}
              </Link>
            )}
          </p>
        </div>
        <form
          id="cercator"
          action="https://www.rollerblade.com/usa/search-results/"
          className="search-form"
          method="post"
        >
          <input
            className="ShopSearchBar"
            type="text"
            name="search"
            id="cercainp"
            placeholder="Product Search"
          />
          <input type="hidden" name="solonome" id="solo_nome" value="N" />
        </form>
        {/* <h1 className="NaveBarH1">ROLLERBLADE WAREHOUSE</h1> */}
        <div className="navbuttons">
          {isLoggedIn() || (
            <Link className="navbuttons" to="/SignIn">
              SignIn
            </Link>
          )}
          {isLoggedIn() || (
            <Link className="navbuttons" to="/SignUp">
              SignUp
            </Link>
          )}
          <Link className="navbuttons" to="/">
            Home
          </Link>
          {isLoggedIn() && (
            <Link className="navbuttons" onClick={handleLogout} to="/">
              {' '}
              SignOut
            </Link>
          )}
        </div>
        {/* <button
        className="navbar-toggler menu"
        type="button"
        aria-label="Toggle navigation"
        onClick={() => setNavbarIsOpen(!navbarIsOpen)}
      >
        <span className="navbar-toggler-icon"></span>
      </button> */}
        {/* <div
        className={`collapse navbar-collapse ${navbarIsOpen ? 'show' : ''}`}
        id="navbarSupportedContent"
        width="100px"
      >
        {' '}
        <div className="navbuttonsa">
          <input
            className="navbuttonsearch"
            type="search"
            placeholder="What are you looking for?"
            aria-label="Search"
            value={filterText}
            onChange={event => setFilterText(event.target.value)}
          />
          <span
            className="btn btn-outline-success my-2 my-sm-0"
            onClick={handleClickSearch}
          >
            Search
          </span>
          {isLoggedIn() || (
            <Link className="navbuttons" to="/SignIn">
              Sign in
            </Link>
          )}
          {isLoggedIn() || (
            <Link className="navbuttons" to="/SignUp">
              Sign up
            </Link>
          )}
          <Link className="navbuttons" to="/">
            Home
          </Link>
          <Route exact path="/"> */}
        {/* {isLoggedIn() && (
            <Link className="btn btn-success mr-2" to="/AddRollerblades">
            + Add
            </Link>
          )} */}
        {/* <span
        className="navbar-toggler a bg-dark my-2 my-sm-0"
        onClick={handleClickSearch}
      >
        Search
      </span> */}
        {/* <span
              className="navbar-toggler  bg-dark"
              onClick={handleClickSearch}
              >
              Search
            </span> */}
        {/* </Route> */}
        {/* {isLoggedIn() && ( */}
        {/* <Link className="navbuttons" onClick={handleLogout} to="/"> */}
        {/* Sign Out */}
        {/* </Link> */}
        {/* )} */}
        {/* </div> */}
        {/* </div> */}
      </nav>
      {/* <switch>
        <Route exact path="/UserFeatures" component={UserFeatures} />
      </switch> */}
    </>
  )
}
