import React from "react";

function Footer() {
  return (
    <div>
      {/* ==============footer =================== */}
      <footer>
        <div className='footer-area'>
          <div className='container'>
            <div className='row'>
              <div className='footer-content'>
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

                <div className='footer-copy'>
                  <p>Avengining Justics Omniverse 2022 all right reserved</p>
                </div>
                <div className='brought-by'>
                  Brought To You By{" "}
                  <a href='' className='brought-name'>
                    {" "}
                    <img
                      src='assets/img/social/nftconstructer.svg'
                      alt=''
                    />{" "}
                    NFT Constructer
                  </a>
                </div>
                <div className='others-page'>
                  <a href='' className='others-link'>
                    <img src='assets/img/condition.png' alt='' />
                  </a>
                  <a href='' className='others-link'>
                    <img src='assets/img/policy.png' alt='' />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* ==============footer end =================== */}
    </div>
  );
}

export default Footer;
