import { useState } from "react";
import DropdownButton from "react-bootstrap/DropdownButton";

function Gallery() {
  const [sidebarActive, setSidebarActive] = useState(false);
  // ===========================menu toggle===============
  const _toggleSidebar = () => {
    setSidebarActive(!sidebarActive);
  };
  return (
    <div>
      <div className='gallery'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-3'>
              <div
                className={
                  sidebarActive ? "sidebar-wrapper active" : "sidebar-wrapper"
                }
              >
                <div className='sidebar'>
                  <button className='close-filter' onClick={_toggleSidebar}>
                    <img src='assets/img/close.svg' alt='' />
                  </button>
                  <div className='find-input'>
                    <input
                      type='text'
                      className='search-input'
                      placeholder='Find by serial'
                    />
                  </div>
                  <div className='filter'>
                    <DropdownButton id='dropdown-basic-button' title='Type'>
                      <div class='form-group'>
                        <input
                          type='checkbox'
                          className='hidden-input'
                          id='html'
                        />
                        <label for='html'>HTML</label>
                      </div>
                      <div class='form-group'>
                        <input
                          type='checkbox'
                          className='hidden-input'
                          id='css'
                        />
                        <label for='css'>CSS</label>
                      </div>
                      <div class='form-group'>
                        <input
                          type='checkbox'
                          className='hidden-input'
                          id='javascript'
                        />
                        <label for='javascript'>Javascript</label>
                      </div>
                    </DropdownButton>
                  </div>
                  <div className='filter'>
                    <DropdownButton id='dropdown-basic-button' title='Type'>
                      <div class='form-group'>
                        <input
                          type='checkbox'
                          className='hidden-input'
                          id='html'
                        />
                        <label for='html'>HTML</label>
                      </div>
                      <div class='form-group'>
                        <input
                          type='checkbox'
                          className='hidden-input'
                          id='css'
                        />
                        <label for='css'>CSS</label>
                      </div>
                      <div class='form-group'>
                        <input
                          type='checkbox'
                          className='hidden-input'
                          id='javascript'
                        />
                        <label for='javascript'>Javascript</label>
                      </div>
                    </DropdownButton>
                  </div>
                  <div className='filter'>
                    <DropdownButton id='dropdown-basic-button' title='Type'>
                      <div class='form-group'>
                        <input
                          type='checkbox'
                          className='hidden-input'
                          id='html'
                        />
                        <label for='html'>HTML</label>
                      </div>
                      <div class='form-group'>
                        <input
                          type='checkbox'
                          className='hidden-input'
                          id='css'
                        />
                        <label for='css'>CSS</label>
                      </div>
                      <div class='form-group'>
                        <input
                          type='checkbox'
                          className='hidden-input'
                          id='javascript'
                        />
                        <label for='javascript'>Javascript</label>
                      </div>
                    </DropdownButton>
                  </div>
                  <div className='filter'>
                    <DropdownButton id='dropdown-basic-button' title='Type'>
                      <div class='form-group'>
                        <input
                          type='checkbox'
                          className='hidden-input'
                          id='html'
                        />
                        <label for='html'>HTML</label>
                      </div>
                      <div class='form-group'>
                        <input
                          type='checkbox'
                          className='hidden-input'
                          id='css'
                        />
                        <label for='css'>CSS</label>
                      </div>
                      <div class='form-group'>
                        <input
                          type='checkbox'
                          className='hidden-input'
                          id='javascript'
                        />
                        <label for='javascript'>Javascript</label>
                      </div>
                    </DropdownButton>
                  </div>
                  <div className='filter'>
                    <DropdownButton id='dropdown-basic-button' title='Type'>
                      <div class='form-group'>
                        <input
                          type='checkbox'
                          className='hidden-input'
                          id='html'
                        />
                        <label for='html'>HTML</label>
                      </div>
                      <div class='form-group'>
                        <input
                          type='checkbox'
                          className='hidden-input'
                          id='css'
                        />
                        <label for='css'>CSS</label>
                      </div>
                      <div class='form-group'>
                        <input
                          type='checkbox'
                          className='hidden-input'
                          id='javascript'
                        />
                        <label for='javascript'>Javascript</label>
                      </div>
                    </DropdownButton>
                  </div>
                  <div className='filter'>
                    <DropdownButton id='dropdown-basic-button' title='Type'>
                      <div class='form-group'>
                        <input
                          type='checkbox'
                          className='hidden-input'
                          id='html'
                        />
                        <label for='html'>HTML</label>
                      </div>
                      <div class='form-group'>
                        <input
                          type='checkbox'
                          className='hidden-input'
                          id='css'
                        />
                        <label for='css'>CSS</label>
                      </div>
                      <div class='form-group'>
                        <input
                          type='checkbox'
                          className='hidden-input'
                          id='javascript'
                        />
                        <label for='javascript'>Javascript</label>
                      </div>
                    </DropdownButton>
                  </div>
                  <div className='filter'>
                    <DropdownButton id='dropdown-basic-button' title='Type'>
                      <div class='form-group'>
                        <input
                          type='checkbox'
                          className='hidden-input'
                          id='html'
                        />
                        <label for='html'>HTML</label>
                      </div>
                      <div class='form-group'>
                        <input
                          type='checkbox'
                          className='hidden-input'
                          id='css'
                        />
                        <label for='css'>CSS</label>
                      </div>
                      <div class='form-group'>
                        <input
                          type='checkbox'
                          className='hidden-input'
                          id='javascript'
                        />
                        <label for='javascript'>Javascript</label>
                      </div>
                    </DropdownButton>
                  </div>
                  <div className='filter'>
                    <DropdownButton id='dropdown-basic-button' title='Type'>
                      <div class='form-group'>
                        <input
                          type='checkbox'
                          className='hidden-input'
                          id='html'
                        />
                        <label for='html'>HTML</label>
                      </div>
                      <div class='form-group'>
                        <input
                          type='checkbox'
                          className='hidden-input'
                          id='css'
                        />
                        <label for='css'>CSS</label>
                      </div>
                      <div class='form-group'>
                        <input
                          type='checkbox'
                          className='hidden-input'
                          id='javascript'
                        />
                        <label for='javascript'>Javascript</label>
                      </div>
                    </DropdownButton>
                  </div>
                  <div className='filter'>
                    <DropdownButton id='dropdown-basic-button' title='Type'>
                      <div class='form-group'>
                        <input
                          type='checkbox'
                          className='hidden-input'
                          id='html'
                        />
                        <label for='html'>HTML</label>
                      </div>
                      <div class='form-group'>
                        <input
                          type='checkbox'
                          className='hidden-input'
                          id='css'
                        />
                        <label for='css'>CSS</label>
                      </div>
                      <div class='form-group'>
                        <input
                          type='checkbox'
                          className='hidden-input'
                          id='javascript'
                        />
                        <label for='javascript'>Javascript</label>
                      </div>
                    </DropdownButton>
                  </div>
                  <div className='filter'>
                    <DropdownButton id='dropdown-basic-button' title='Type'>
                      <div class='form-group'>
                        <input
                          type='checkbox'
                          className='hidden-input'
                          id='html'
                        />
                        <label for='html'>HTML</label>
                      </div>
                      <div class='form-group'>
                        <input
                          type='checkbox'
                          className='hidden-input'
                          id='css'
                        />
                        <label for='css'>CSS</label>
                      </div>
                      <div class='form-group'>
                        <input
                          type='checkbox'
                          className='hidden-input'
                          id='javascript'
                        />
                        <label for='javascript'>Javascript</label>
                      </div>
                    </DropdownButton>
                  </div>
                  <div className='filter'>
                    <DropdownButton id='dropdown-basic-button' title='Type'>
                      <div class='form-group'>
                        <input
                          type='checkbox'
                          className='hidden-input'
                          id='html'
                        />
                        <label for='html'>HTML</label>
                      </div>
                      <div class='form-group'>
                        <input
                          type='checkbox'
                          className='hidden-input'
                          id='css'
                        />
                        <label for='css'>CSS</label>
                      </div>
                      <div class='form-group'>
                        <input
                          type='checkbox'
                          className='hidden-input'
                          id='javascript'
                        />
                        <label for='javascript'>Javascript</label>
                      </div>
                    </DropdownButton>
                  </div>
                  <div className='filter'>
                    <DropdownButton id='dropdown-basic-button' title='Type'>
                      <div class='form-group'>
                        <input
                          type='checkbox'
                          className='hidden-input'
                          id='html'
                        />
                        <label for='html'>HTML</label>
                      </div>
                      <div class='form-group'>
                        <input
                          type='checkbox'
                          className='hidden-input'
                          id='css'
                        />
                        <label for='css'>CSS</label>
                      </div>
                      <div class='form-group'>
                        <input
                          type='checkbox'
                          className='hidden-input'
                          id='javascript'
                        />
                        <label for='javascript'>Javascript</label>
                      </div>
                    </DropdownButton>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-9'>
              <div className='row'>
                <div className='col-12'>
                  <div className='filter-tab' onClick={_toggleSidebar}>
                    <p>Filter</p>
                  </div>
                </div>
                <div className='col-lg-3 col-md-4 col-sm-6 mb-4'>
                  <div
                    className='gallery-item'
                    data-bs-toggle='modal'
                    data-bs-target='#exampleModal'
                  >
                    <div className='gallery-img'>
                      <img src='assets/img/gallery/1.png' alt='' />
                    </div>
                    <div className='item-info'>
                      <div className='item-name'>
                        <p>Avengers</p>
                        <h4 className='nft-number'>NO:5296</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-lg-3 col-md-4 col-sm-6 mb-4'>
                  <div className='gallery-item'>
                    <div className='gallery-img'>
                      <img src='assets/img/gallery/2.png' alt='' />
                    </div>
                    <div className='item-info'>
                      <div className='item-name'>
                        <p>Avengers</p>
                        <h4 className='nft-number'>NO:5296</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-lg-3 col-md-4 col-sm-6 mb-4'>
                  <div className='gallery-item'>
                    <div className='gallery-img'>
                      <img src='assets/img/gallery/3.png' alt='' />
                    </div>
                    <div className='item-info'>
                      <div className='item-name'>
                        <p>Avengers</p>
                        <h4 className='nft-number'>NO:5296</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-lg-3 col-md-4 col-sm-6 mb-4'>
                  <div className='gallery-item'>
                    <div className='gallery-img'>
                      <img src='assets/img/gallery/4.png' alt='' />
                    </div>
                    <div className='item-info'>
                      <div className='item-name'>
                        <p>Avengers</p>
                        <h4 className='nft-number'>NO:5296</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-lg-3 col-md-4 col-sm-6 mb-4'>
                  <div className='gallery-item'>
                    <div className='gallery-img'>
                      <img src='assets/img/gallery/1.png' alt='' />
                    </div>
                    <div className='item-info'>
                      <div className='item-name'>
                        <p>Avengers</p>
                        <h4 className='nft-number'>NO:5296</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-lg-3 col-md-4 col-sm-6 mb-4'>
                  <div className='gallery-item'>
                    <div className='gallery-img'>
                      <img src='assets/img/gallery/2.png' alt='' />
                    </div>
                    <div className='item-info'>
                      <div className='item-name'>
                        <p>Avengers</p>
                        <h4 className='nft-number'>NO:5296</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-lg-3 col-md-4 col-sm-6 mb-4'>
                  <div className='gallery-item'>
                    <div className='gallery-img'>
                      <img src='assets/img/gallery/3.png' alt='' />
                    </div>
                    <div className='item-info'>
                      <div className='item-name'>
                        <p>Avengers</p>
                        <h4 className='nft-number'>NO:5296</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-lg-3 col-md-4 col-sm-6 mb-4'>
                  <div className='gallery-item'>
                    <div className='gallery-img'>
                      <img src='assets/img/gallery/4.png' alt='' />
                    </div>
                    <div className='item-info'>
                      <div className='item-name'>
                        <p>Avengers</p>
                        <h4 className='nft-number'>NO:5296</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-lg-3 col-md-4 col-sm-6 mb-4'>
                  <div className='gallery-item'>
                    <div className='gallery-img'>
                      <img src='assets/img/gallery/1.png' alt='' />
                    </div>
                    <div className='item-info'>
                      <div className='item-name'>
                        <p>Avengers</p>
                        <h4 className='nft-number'>NO:5296</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-lg-3 col-md-4 col-sm-6 mb-4'>
                  <div className='gallery-item'>
                    <div className='gallery-img'>
                      <img src='assets/img/gallery/2.png' alt='' />
                    </div>
                    <div className='item-info'>
                      <div className='item-name'>
                        <p>Avengers</p>
                        <h4 className='nft-number'>NO:5296</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-lg-3 col-md-4 col-sm-6 mb-4'>
                  <div className='gallery-item'>
                    <div className='gallery-img'>
                      <img src='assets/img/gallery/3.png' alt='' />
                    </div>
                    <div className='item-info'>
                      <div className='item-name'>
                        <p>Avengers</p>
                        <h4 className='nft-number'>NO:5296</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-lg-3 col-md-4 col-sm-6 mb-4'>
                  <div className='gallery-item'>
                    <div className='gallery-img'>
                      <img src='assets/img/gallery/4.png' alt='' />
                    </div>
                    <div className='item-info'>
                      <div className='item-name'>
                        <p>Avengers</p>
                        <h4 className='nft-number'>NO:5296</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-lg-3 col-md-4 col-sm-6 mb-4'>
                  <div className='gallery-item'>
                    <div className='gallery-img'>
                      <img src='assets/img/gallery/1.png' alt='' />
                    </div>
                    <div className='item-info'>
                      <div className='item-name'>
                        <p>Avengers</p>
                        <h4 className='nft-number'>NO:5296</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-lg-3 col-md-4 col-sm-6 mb-4'>
                  <div className='gallery-item'>
                    <div className='gallery-img'>
                      <img src='assets/img/gallery/2.png' alt='' />
                    </div>
                    <div className='item-info'>
                      <div className='item-name'>
                        <p>Avengers</p>
                        <h4 className='nft-number'>NO:5296</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-lg-3 col-md-4 col-sm-6 mb-4'>
                  <div className='gallery-item'>
                    <div className='gallery-img'>
                      <img src='assets/img/gallery/3.png' alt='' />
                    </div>
                    <div className='item-info'>
                      <div className='item-name'>
                        <p>Avengers</p>
                        <h4 className='nft-number'>NO:5296</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-lg-3 col-md-4 col-sm-6 mb-4'>
                  <div className='gallery-item'>
                    <div className='gallery-img'>
                      <img src='assets/img/gallery/4.png' alt='' />
                    </div>
                    <div className='item-info'>
                      <div className='item-name'>
                        <p>Avengers</p>
                        <h4 className='nft-number'>NO:5296</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Button trigger modal --> */}

      {/* <!-- Modal --> */}
      <div
        class='modal fade'
        id='exampleModal'
        tabindex='-1'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'
      >
        <div class='modal-dialog modal-dialog-centered modal-xl'>
          <div class='modal-content'>
            <div class='modal-body'>
              <div className='row'>
                <div className='col-lg-6 mb-4'>
                  <div className='item-artwork'>
                    <img src='assets/img/gallery/1.png' alt='' />
                  </div>
                </div>
                <div className='col-lg-6'>
                  <div className='item-details'>
                    <div className='row'>
                      <div className='col-12'>
                        <div className='nft-number-d'>
                          <p className='sm-text'>Type:</p>
                          <p className='nft-name'>8102 //</p>
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className='item-info-'>
                          <p className='sm-text'>Type:</p>
                          <p className='lg-text'>Human</p>
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className='item-info-'>
                          <p className='sm-text'>Type:</p>
                          <p className='lg-text'>Human</p>
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className='item-info-'>
                          <p className='sm-text'>Type:</p>
                          <p className='lg-text'>Human</p>
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className='item-info-'>
                          <p className='sm-text'>Type:</p>
                          <p className='lg-text'>Human</p>
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className='item-info-'>
                          <p className='sm-text'>Type:</p>
                          <p className='lg-text'>Human</p>
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className='item-info-'>
                          <p className='sm-text'>Type:</p>
                          <p className='lg-text'>Human</p>
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className='item-info-'>
                          <p className='sm-text'>Type:</p>
                          <p className='lg-text'>Human</p>
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className='item-info-'>
                          <p className='sm-text'>Type:</p>
                          <p className='lg-text'>Human</p>
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className='item-info-'>
                          <p className='sm-text'>Type:</p>
                          <p className='lg-text'>Human</p>
                        </div>
                      </div>

                      <div className='col-md-12'>
                        <div className='view-link-area'>
                          <p>VIEW ON:</p>
                          <div className='view-link-icon'>
                            <a href='' className='view-link'>
                              <img src='assets/img/opensia.png' alt='' />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
