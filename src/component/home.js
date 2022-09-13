import { useEffect, useState } from "react";
import "animate.css";

import AOS from "aos";
import "aos/dist/aos.css";
import Flip from "react-reveal/Flip";
import Bounce from "react-reveal/Bounce";
import Fade from "react-reveal/Fade";
import FaqData from "./Faq";
// import { HashLink } from 'react-router-hash-link';
function Home() {
  AOS.init();

  return (
    <>
      {/* ============header section =================== */}
      <section>
        <div className='header-sec'>
          <div className='video-area'>
            <video loop muted autoPlay>
              <source src='assets/img/video/4.mp4' type='video/mp4' />
            </video>
            {/* <img src="assets/img/video/1.gif" alt="" /> */}
          </div>
        </div>
      </section>

      {/* ==================Hero section ================= */}
      {/* ==================ajo ================== */}
      <Flip left>
        <section>
          <div className='inter-the-ajo cpy-6'>
            <div className='container'>
              <div className='row'>
                <div className='sec-title-img'>
                  <img src='assets/img/ajo-title.png' alt='' />
                </div>
              </div>
              <div className='row justify-content-center'>
                <div className='col-md-10'>
                  <div className='ajo-des'>
                    <img
                      src='assets/img/ajo-des.png'
                      className='ajo-des-des'
                      alt=''
                    />
                    <img
                      src='assets/img/ajo-des-m.png'
                      alt=''
                      className='ajo-des-img-m'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Flip>

      {/* =================membership ==================== */}
      <Flip left>
        <div className='membership'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-7'>
                <div className='member-offer'>
                  <img
                    src='assets/img/member.png'
                    alt='Image not found'
                    className='membar-img'
                  />
                  <div className='member-content'>
                    <h4>Membership / Each Aj Varient</h4>
                    <img src='assets/img/offer.png' alt='' />
                  </div>
                </div>
              </div>
              <div className='col-lg-5'>
                <div className='offer-notic'>
                  <p>Get your here (before thery are gone)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Flip>
      {/* ================================claim area ======================= */}
      <Flip left>
        <section>
          <div className='claim-area cpy-6'>
            <div className='container'>
              <div className='row'>
                <div className='sec-title'>
                  <img src='assets/img/claim-title.png' alt='' />
                </div>
              </div>

              <div className='row'>
                <div className='col-lg-4 col-md-12'>
                  <div className='art-img'>
                    <img src='assets/img/art/1.png' alt='' />
                  </div>
                </div>
                <div className='col-lg-8'>
                  <div className='des-align-center'>
                    <div className='claim-des'>
                      Aj variants are limited edition electronic Membership
                      collectibles that grant access to ajo’s various member
                      perks and real world fun stuff
                    </div>
                  </div>
                </div>

                <div className='col-lg-8'>
                  <div className='des-align-center'>
                    <div className='claim-des bg-red'>
                      Member will join the AJO’S cast of industry legends on a
                      unique journey as they help take the omniverse’s Various
                      content ideas from spec to completion
                    </div>
                  </div>
                </div>
                <div className='col-lg-4 col-md-12'>
                  <div className='art-img'>
                    <img src='assets/img/art/2.png' alt='' />
                  </div>
                </div>
                <div className='col-lg-4 col-md-12'>
                  <div className='art-img'>
                    <img src='assets/img/art/3.png' alt='' />
                  </div>
                </div>
                <div className='col-lg-8'>
                  <div className='des-align-center'>
                    <div className='claim-des'>
                      Have a say in upcoming meli stories, characters,
                      SPIN-OFFS, and all the merch you can Dream of (Litterally)
                    </div>
                  </div>
                </div>

                <div className='col-lg-8'>
                  <div className='des-align-center'>
                    <div className='claim-des yello'>
                      This includes the AJO's first ever cartoon, a superhero
                      sketch comedy spec pilot titled, "Avenging Justice"
                      (currently in Post Production) - Think SNL meets Looney
                      Tunes but with Superheroes -
                    </div>
                  </div>
                </div>
                <div className='col-lg-4 col-md-12'>
                  <div className='art-img'>
                    <img src='assets/img/art/4.png' alt='' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Flip>
      <Flip left>
        <div className='distribution'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-12'>
                <Flip left>
                  <div className='distribution-content '>
                    <div className='distribution-title'>
                      <img src='assets/img/destribute.png' alt='' />
                      <div className='dist-des'>
                        <p>
                          There will be 14,100 AJ VARIANTS in the set. 10,000 of
                          these will be released during the initial minting.
                          Buying an AJ VARIANT from the initial drop will cost
                          costs TBD ETH. There are no price tiers; The other
                          4,100 tokens will be released as we move through the
                          checklist and used for giveaways, community
                          participation event rewards, online event prizes,
                          story event dutch auctions as well as for the cast and
                          crew.
                        </p>

                        <from action=''>
                          <div className='from-inner'>
                            <div className='from-input'>
                              <input
                                type='text'
                                placeholder='Enter your email'
                                className='form-control white-list'
                              />
                            </div>
                            <div className='from-btn'>
                              <button type='submit' className='white-btn'>
                                whitelist
                              </button>
                            </div>
                          </div>
                        </from>
                      </div>
                    </div>
                  </div>
                </Flip>
              </div>
            </div>
          </div>
        </div>
      </Flip>
      {/* =================membership ==================== */}
      <Flip left>
        <div className='membership cpy-6'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-7'>
                <div className='member-offer'>
                  <img
                    src='assets/img/member.png'
                    alt='Image not found'
                    className='membar-img'
                  />
                  <div className='member-content'>
                    <h4>Membership / Each Aj Varient</h4>
                    <img src='assets/img/offer.png' alt='' />
                  </div>
                </div>
              </div>
              <div className='col-lg-5'>
                <div className='offer-notic'>
                  <p>Get your here (before thery are gone)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Flip>
      <Flip left>
        <div className='hero-and-mint'>
          <div className='hero-bg'>
            <div className='hero-section'>
              <div className='container'>
                <div className='row'>
                  <div className='col-lg-6'>
                    <div className='hero-content animate__animated animate__zoomInLeft'>
                      <div className='hero-title '>
                        <img
                          src='assets/img/title.png'
                          alt=''
                          className='title-img'
                        />
                      </div>

                      <div className='hero-img'>
                        <img
                          src='assets/img/hero/1.png'
                          className='animate__jello animate__animated animate__delay-1s'
                          alt=''
                        />
                        <img
                          src='assets/img/hero/2.png'
                          className='second-img animate__animated animate__jello animate__delay-1s'
                          alt=''
                        />
                        <img
                          src='assets/img/hero/3.png'
                          className='last-img animate__animated animate__jello animate__delay-1s'
                          alt=''
                        />
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-6'>
                    <div className='hero-form animate__animated animate__zoomInRight'>
                      <img src='assets/img/hero/4.gif' alt='' />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='distribution'>
              <div className='container'>
                <div className='row'>
                  <div className='col-lg-12'>
                    <Flip left>
                      <div className='distribution-content '>
                        <div className='distribution-title'>
                          <img src='assets/img/destribute.png' alt='' />
                          <div className='dist-des'>
                            <p>
                              There will be 14,100 AJ VARIANTS in the set.
                              10,000 of these will be released during the
                              initial minting. Buying an AJ VARIANT from the
                              initial drop will cost costs TBD ETH. There are no
                              price tiers; The other 4,100 tokens will be
                              released as we move through the checklist and used
                              for giveaways, community participation event
                              rewards, online event prizes, story event dutch
                              auctions as well as for the cast and crew.
                            </p>

                            <from action=''>
                              <div className='from-inner'>
                                <div className='from-input'>
                                  <input
                                    type='text'
                                    placeholder='Enter your email'
                                    className='form-control white-list'
                                  />
                                </div>
                                <div className='from-btn'>
                                  <button type='submit' className='white-btn'>
                                    whitelist
                                  </button>
                                </div>
                              </div>
                            </from>
                          </div>
                        </div>
                      </div>
                    </Flip>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Flip>

      <div className='art-work'>
        <Flip left>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-12'>
                <div className='art-work-content'>
                  <img src='assets/img/artwork.gif' alt='' />
                </div>
              </div>
            </div>
          </div>
        </Flip>

        <img src='assets/img/icon/5.png' alt='' className='left-tree' />
        <img src='assets/img/icon/4.png' alt='' className='right-tree' />
      </div>

      <div className='omnivers'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-10'>
              <div className='omnivers-content-title'>
                <img src='assets/img/omnivers.png' alt='image not found' />
              </div>
              <Bounce left>
                <div className='omnivers-content'>
                  <div className='omniverse-content'>
                    <p className='omnivers-des'>
                      earn about the characters of EARTH ALPHA (the AJO's main
                      earth), the planets throughout the omniverse, and take a
                      peak around the library to see all their omniversal
                      counterparts!Back before the creator of the AJO knew WTE
                      NET's were, he managed to assemble a cast of legendary
                      talent (and Eric Vale) for a spec pilot featuring the
                      characters. When he explained his plan to them and asked
                      them for their continued involvement in this extremely new
                      and exciting creative space, none of them waivered. Check
                      out the bios of the people who bring these characters to
                      life!
                    </p>
                  </div>
                </div>
              </Bounce>
            </div>
          </div>

          <div className='the-specs'>
            <div className='row'>
              <div className='col-lg-6'>
                <div className='the-specs-content'>
                  <div className='the-specs-title'>
                    <img src='assets/img/the-specs.png' alt='image not found' />
                  </div>
                  <Bounce left>
                    <div className='the-specs-des'>
                      <img
                        src='assets/img/specs-content.png'
                        alt='image not found'
                      />
                    </div>
                  </Bounce>
                </div>
              </div>
              <div className='col-lg-6'>
                <Bounce right>
                  <div className='the-specs-img'>
                    <img
                      src='assets/img/animation/yeaah.gif'
                      alt='image not found'
                    />
                  </div>
                </Bounce>
              </div>
            </div>
          </div>
        </div>
        <img
          src='assets/img/animation/boom.gif'
          alt=''
          className='left-omnivers'
        />
        <img src='assets/img/icon/6.png' alt='' className='right-omnivers' />
      </div>

      {/* ==================faq================== */}

      <div className='faq-area'>
        <div className='container'>
          <div className='row '>
            <div className='col-lg-6 mb-5'>
              <Bounce left>
                <div className='faq-content'>
                  <img src='assets/img/faq/1.png' alt='image not found' />
                </div>
              </Bounce>
            </div>
            <div className='col-lg-6 mb-5'>
              <Bounce right>
                <div className='faq-content'>
                  <img src='assets/img/faq/2.png' alt='image not found' />
                </div>
              </Bounce>
            </div>
            <div className='col-lg-6 mb-5'>
              <Bounce left>
                <div className='faq-content'>
                  <img src='assets/img/faq/3.png' alt='image not found' />
                </div>
              </Bounce>
            </div>
            <div className='col-lg-6 mb-5'>
              <Bounce right>
                <div className='faq-content'>
                  <img src='assets/img/faq/4.png' alt='image not found' />
                </div>
              </Bounce>
            </div>
          </div>
        </div>
      </div>
      {/* ==================faq================== */}

      {/* ==================newsletter================== */}
      <div className='newsletter'>
        <div className='container'>
          <div className='sec-title'>
            <img src='assets/img/subscribe.png' alt='' />
          </div>
          <Flip left>
            <div className='newsletter-form'>
              <form>
                <div className='form-group form-wrapper'>
                  <input
                    type='email'
                    className='form-control'
                    id='exampleInputEmail1'
                    aria-describedby='emailHelp'
                    placeholder='Enter email'
                  />
                  <button className='newsletter-submit'>Submit</button>
                </div>
              </form>
            </div>
          </Flip>
        </div>

        <img
          src='assets/img/animation/star-animation.gif'
          alt=''
          className='newsletter-img'
        />
      </div>

      {/* ====================unlock area ================= */}
      <Flip left>
        <div className='unlock-area'>
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-lg-12'>
                <div className='unlock-content'>
                  <div className='unlock-card'>
                    <p>
                      Upon unlocking the COSMIC PUZZLE CUBE cube, Chameleon Man:
                      The camouflaged crusader accidentally shatters the walls
                      of a secret omniversal prison. In doing so, the hero
                      unleashes a being of unfathomnable power known as The
                      Everlonger. As old as the omniverse itself, The Everlonger
                      was imprisoned by his creators, Time and Reality, for his
                      constant "poking the bear" that was eternal omniversal
                      balance. Free once more to "poke" the aforementioned
                      "bear", Stealing the COSMIC PUZZLE CUBE from Chameleon
                      Man, The Everlonger begins to travel to all the universes
                      throughout the whole of the Omniverse. Causing cataclysmic
                      events on every earth,
                    </p>
                  </div>

                  <div className='unlock-card rotet-card'>
                    <p>
                      breaking the walls they seperate the omnniverse as he
                      goes, the villain causes conflict through the whole of
                      reality. War on an Omniversal scale. Every earth
                      throughout existence going to battle with one another. Who
                      would win? Would anyone win? Will anything ever be the
                      same again?! Can it even be fixed? This wasn't time for
                      such questions... no... This was... The Cataclysmic
                      Omniverse Conflict
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Flip>
      {/* ====================Road Map area ================= */}
      <div className='road-map-area'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8'>
              <Flip left>
                <div className='road-map-head'>
                  <img src='assets/img/road-map.png' alt='' />
                  <div className='head-des'>
                    <p>
                      As Milestones are achieved, the next phase of the Avenging
                      Justice Omniverse (OUR ROADMAP) will commence. (Think of
                      each Omnibus as a comic book event with various tie ins)
                    </p>
                  </div>
                </div>
              </Flip>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='road-map-content'>
                <div className='center-img'>
                  <img
                    src='assets/img/roadmap-center.png'
                    alt='image not found'
                  />
                </div>
                <Fade bottom>
                  <div className='road-map-desa'>
                    <div className='left-col'>
                      <img src='assets/img/roadmap/1.png' alt='' />
                      <img src='assets/img/roadmap/3.png' alt='' />
                      <img src='assets/img/roadmap/5.png' alt='' />
                      <img src='assets/img/roadmap/7.png' alt='' />
                    </div>
                    <div className='right-col'>
                      <img src='assets/img/roadmap/2.png' alt='' />
                      <img src='assets/img/roadmap/4.png' alt='' />
                      <img src='assets/img/roadmap/6.png' alt='' />
                      <img src='assets/img/roadmap/8.png' alt='' />
                    </div>
                  </div>
                </Fade>
              </div>
            </div>
          </div>
        </div>

        <img src='assets/img/icon/8.png' alt='' className='left-map' />
        <img src='assets/img/icon/7.png' alt='' className='right-map' />
      </div>
      {/* ====================Road Map area end ================= */}

      {/* ==================Community tools===================== */}
      <div className='community'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8'>
              <div className='community-area'>
                <div className='community-head'>
                  <img src='assets/img/community.png' alt='Image not found' />
                </div>
                <Flip left>
                  <div className='community-des'>
                    <img
                      src='assets/img/community-des.png'
                      alt='Image not found'
                    />
                  </div>
                </Flip>
              </div>
            </div>
            <div className='col-lg-4'>
              <Flip right>
                <div className='price-area'>
                  <a href='' className='rarity-tool'>
                    <img src='assets/img/rarity1.png' alt='' />
                  </a>
                  <a href='' className='rarity-tool'>
                    <img src='assets/img/rarity2.png' alt='' />
                  </a>
                </div>
              </Flip>
            </div>
          </div>
        </div>
        <img src='assets/img/icon/9.png' alt='' className='right-cloud' />
      </div>
      {/* ==================Community tools end===================== */}
      {/* ==================faq=============== */}
      <Flip left>
        <div className='faq-aream cpt-6' id='faq'>
          <div className='container'>
            <div className='row'>
              <div className='sec-title'>
                <img
                  src='assets/img/faq-title.png'
                  alt=''
                  className='faq-title'
                />
              </div>

              <div className='row justify-content-center'>
                <div className='col-md-10'>
                  <FaqData />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Flip>
      {/* ==================faq end=============== */}
      {/* ==================Team start===================== */}
      <div className='team-area' id='team'>
        <div className='container'>
          <div className='row'>
            <div className='title'>
              <img src='assets/img/team/title.png' alt='' />
            </div>
          </div>

          <div className='row justify-content-center'>
            <div className='col-lg-10'>
              <div className='row'>
                <div className='col-md-6 mb-4'>
                  <Flip left>
                    <div className='team-card card-a'>
                      <div className='team-content'>
                        <p>
                          Lan Densman : Drew the short Straw, Pretends to know
                          how to play tidily winks He doesn’t
                        </p>
                      </div>
                    </div>
                  </Flip>
                </div>
                <div className='col-md-6 mb-4'>
                  <Flip left>
                    <div className='team-card card-b'>
                      <div className='team-content'>
                        <p>Jeff Zannini : The voice whisperer, Loves Buttoms</p>
                      </div>
                    </div>
                  </Flip>
                </div>
                <div className='col-md-6 mb-4'>
                  <Flip left>
                    <div className='team-card card-c'>
                      <div className='team-content'>
                        <p>
                          Daniel Weiser : The Voice Arthur Wallace, loves coming
                          of age movies
                        </p>
                      </div>
                    </div>
                  </Flip>
                </div>
                <div className='col-md-6 mb-4'>
                  <Flip left>
                    <div className='team-card card-d'>
                      <div className='team-content'>
                        <p>Brenan Bauer the one aka orignial Rump Shaker</p>
                      </div>
                    </div>
                  </Flip>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ==================Team end===================== */}
    </>
  );
}
export default Home;
