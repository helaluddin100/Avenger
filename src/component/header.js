import { useState } from "react";
import { HashLink } from "react-router-hash-link";

function Header() {
  const [sidebarActive, setSidebarActive] = useState(false);
  // ===========================menu toggle===============
  const _toggleSidebar = () => {
    setSidebarActive(!sidebarActive);
  };
  return (
    <div>
      {/* ============================navbar=========================== */}
      <nav className='navigation'>
        <div className='navigation-top'></div>
        <div className='main-nav'>
          <div className='container'>
            <div className='navbar-header'>
              <div className='mobile-nav'>
                {/* <img
                  src="assets/img/logo/logo.png"
                  alt="Image not found"
                  className="mobile-logo"
                /> */}
                <div className='nav-toggle' onClick={_toggleSidebar}>
                  <img src='assets/img/icon/toggle.svg' alt='Image not found' />
                </div>
              </div>
              <div
                className={
                  sidebarActive ? "sidebarActive nav-menu" : "nav-menu"
                }
              >
                <ul className='menu-ul'>
                  <li className='nav-list'>
                    <p className='nav-list'>
                      <img src='assets/img/logo.png' alt='' />
                    </p>
                  </li>
                  <li className='nav-list'>
                    <HashLink smooth to='/' onClick={_toggleSidebar}>
                      <p className='nav-list'>Home</p>
                    </HashLink>
                  </li>
                  <li className='nav-list'>
                    <HashLink smooth to={"/#team"} onClick={_toggleSidebar}>
                      <p className='nav-list'>Team</p>
                    </HashLink>
                  </li>
                  <li className='nav-list'>
                    <HashLink
                      to={"/omniversel-archives"}
                      onClick={_toggleSidebar}
                    >
                      <p className='nav-list'>Omniversal Archives</p>
                    </HashLink>
                  </li>
                  <li className='nav-list'>
                    <HashLink to={"/gallery"} onClick={_toggleSidebar}>
                      <p className='nav-list'>Gallery</p>
                    </HashLink>
                  </li>
                  <li className='nav-list'>
                    <HashLink to={"/#faq"} onClick={_toggleSidebar}>
                      <p className='nav-list'>FAQ</p>
                    </HashLink>
                  </li>
                  <li className='nav-list'>
                    <p className='nav-list'>The AJ HQ</p>

                    <div className='dp-menu'>
                      <ul className='dp-ul'>
                        <li className='nav-list'>
                          <p className='nav-list'>Home</p>
                        </li>
                        <li className='nav-list'>
                          <p className='nav-list'>Team</p>
                        </li>
                        <li className='nav-list'>
                          <p className='nav-list'>Gallery</p>
                        </li>
                        <li className='nav-list'>
                          <p className='nav-list'>Faq</p>
                        </li>
                        <li className='nav-list'>
                          <p className='nav-list'>The Aj Hq</p>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className='nav-list'>
                    <p className='nav-list'>
                      <div className='social-media'>
                        <ul className='social-ul'>
                          <li>
                            <a href='' className='social-link'>
                              <img src='assets/img/social/1.svg' alt='' />
                            </a>
                          </li>
                          <li>
                            <a href='' className='social-link'>
                              <img src='assets/img/social/2.svg' alt='' />
                            </a>
                          </li>
                          <li>
                            <a href='' className='social-link'>
                              <img src='assets/img/social/3.png' alt='' />
                            </a>
                          </li>
                          <li>
                            <a href='' className='social-link'>
                              <img src='assets/img/social/4.svg' alt='' />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/* ============================navbar end=========================== */}
    </div>
  );
}

export default Header;
