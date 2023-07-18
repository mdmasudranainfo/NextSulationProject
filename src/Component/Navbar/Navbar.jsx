import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [navBackground, setNavBackground] = useState(false)

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setNavBackground(true)
    } else {
      setNavBackground(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const navStyle = {
    backgroundColor: navBackground ? '#E5E6E6' : 'transparent',
    transition: 'background-color 300ms ease-in-out',
    padding: '10px',
  }

  return (
    <div className=" z-50 sticky top-0" style={navStyle}>
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Team</a>
              </li>
              <li>
                <a>Product</a>
                <ul className="p-2">
                  <li>
                    <a>Product 1</a>
                  </li>
                  <li>
                    <a>Product 2</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            NextSulation
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Team</a>
            </li>
            <li tabIndex={0}>
              <details>
                <summary>Product</summary>
                <ul className="p-2 z-50">
                  <li>
                    <a>Product 1</a>
                  </li>
                  <li>
                    <a>Product 2</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Contact</a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
