import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Route } from 'react-router'
import { isLoggedIn, logout } from './auth'

export function NavBar(props) {
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

  return (
    <nav className="navbar navbar-dark bg-dark ">
      <Link className="navbar-brand" to="#">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR1FRf8gAQ6cJsz2nIkihN3WR42yU7moD4Cqg&usqp=CAU"
          alt=""
          width="60px"
        />{' '}
      </Link>
      <h1 className="NaveBarH1">ROLLERBLADE WAREHOUSE</h1>

      <button
        className="navbar-toggler bg-dark"
        type="button"
        aria-label="Toggle navigation"
        onClick={() => setNavbarIsOpen(!navbarIsOpen)}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className={`collapse navbar-collapse ${navbarIsOpen ? 'show' : ''}`}
        id="navbarSupportedContent"
        width="100px"
      >
        {' '}
        <div className="navbar-togglers b bg-dark ">
          {isLoggedIn() || (
            <Link className="navbar-toggler a bg-dark" to="/SignIn">
              Sign in
            </Link>
          )}
          {isLoggedIn() || (
            <Link className="navbar-toggler a bg-dark" to="/SignUp">
              Sign up
            </Link>
          )}
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="navbar-toggler a bg-dark" to="/">
                Home
              </Link>
            </li>
          </ul>
          <Route exact path="/">
            <form
              id="cercator"
              action="https://www.rollerblade.com/usa/search-results/"
              className="search-form thingsToConsidersearch"
              method="post"
            >
              <input
                className="ui-searchinput"
                type="text"
                name="search"
                id="cercainp"
                placeholder="Start typing what you're looking for"
              />
              <input type="hidden" name="solonome" id="solo_nome" value="N" />
            </form>
            {/* <span
              className="navbar-toggler  bg-dark"
              onClick={handleClickSearch}
            >
              Search
            </span> */}
          </Route>
        </div>
        {isLoggedIn() && (
          <span className="btn btn-success" onClick={handleLogout}>
            Sign out
          </span>
        )}
      </div>
    </nav>
  )
}
