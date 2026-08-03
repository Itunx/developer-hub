import "./Navbar.css";
import SearchBar from "./Navbar-components/Searchbar";
function Navbar() {
  return (
    <header className="navbar">

      {/* Left Section */}
      <div className="navbar-left">
        <h2>Dashboard</h2>
        <p>Welcome back, Babatunde 👋</p>
      </div>

      {/* Middle Section */}
      <div className="navbar-search">
        {/* <input
          type="text"
          placeholder="Search applications..."
        /> */}
        <SearchBar />
      </div>

      {/* Right Section */}
      <div className="navbar-right">

        <button className="notification">
          🔔
        </button>

        <div className="navbar-profile">

          <div className="avatar">
            BM
          </div>

          <div className="profile-info">
            <p>Babatunde</p>
            <small>Platform Engineer</small>
          </div>

        </div>

      </div>

    </header>
  );
}

export default Navbar;