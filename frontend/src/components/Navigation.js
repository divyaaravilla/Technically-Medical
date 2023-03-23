import { useState, useEffect } from "react";

const Navigation = () => {
  const [user, setUser] = useState();

  // check for authenticated user when the page loads
  useEffect(() => {
    const loggedUserJson = window.localStorage.getItem("loggedInUser");
    if (loggedUserJson) {
      const userInfo = JSON.parse(loggedUserJson);
      setUser(userInfo.user);
    }
  }, []);

  const handleLogout = () => {
    // remove user's info from localStorage
    window.localStorage.removeItem("loggedInUser");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Technically Medical
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              {/* conditional href for authenticated and normal user */}
              <a className="nav-link" href={user ? "/create" : "/login"}>
                Create
              </a>
            </li>
            <li className="nav-item">
              {/* conditional href for authenticated and normal user */}
              <a className="nav-link" href="/appointments">
                Appointments
              </a>
            </li>
          </ul>
          <a className="nav-link active" aria-current="page" href="/login">
            {/* conditional button for authenticated and normal user */}
            {!user ? (
              <button className="btn btn-outline-success d-flex">Login</button>
            ) : (
              <button
                type="button"
                className="btn btn-light d-flex"
                onClick={handleLogout}
              >
                Logout
              </button>
            )}
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
