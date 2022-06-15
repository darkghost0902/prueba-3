import { Link, NavLink } from "react-router-dom";
export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            UseContext
          </Link>
          
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  className={({isActive}) =>{
                  return  isActive?'nav-link active':'nav-link';
                  }
                   
                  }
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
              <NavLink
                  className={({isActive}) =>{
                  return  isActive?'nav-link active':'nav-link';
                  }
                   
                  }
                  to="/about"
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
              <NavLink
                  className={({isActive}) =>{
                  return  isActive?'nav-link active':'nav-link';
                  }
                   
                  }
                  to="/login"
                >
                  login
                </NavLink>
              </li>
             

            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
