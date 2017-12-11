class Sidebar extends React.Component {

  render(){
    return(
      <div className="sidebar-col">
          <div className="header-links-container">
              <img className="soundstripe-logo" src="https://s3-us-west-2.amazonaws.com/soundstripe-production/assets/images/logoDark.png"></img>
              <div className="sidebar-submenu">
                <div className="submenu-title">Catalog</div>
                <div className="submenu-list">
                  <a>Browse</a>
                  <a>Songs</a>
                  <a>Composers</a>
                </div>
              </div>
              <div className="sidebar-submenu">
                <div className="submenu-title">My Music</div>
                <div className="submenu-list">
                  <a>Favorites</a>
                  <a>Playlists</a>
                  <a>Following</a>
                </div>
              </div>
              <div className="sidebar-submenu">
                <div className="submenu-title">My Account</div>
                <div className="submenu-list">
                  <a>Sign In</a>
                  <a>Sign Up</a>
                </div>
              </div>
          </div>
      </div>
    )
  }
}

export default Sidebar;
