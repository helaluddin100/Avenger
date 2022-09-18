import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/swiper.min.css";
function Team() {
  return (
    <div>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 2000,
        }}
        loop={true}
        modules={[Autoplay]}
        className='mySwiper'
      >
        <SwiperSlide>
          <div className='team-area'>
            <div className='container'>
              <div className='row'>
                <div className='col-lg-8'>
                  <div className='team-info-bg'>
                    <div className='row'>
                      <div className='col-md-6'>
                        <div className='character-title'>
                          <div className='character'>
                            <h3>Character</h3>
                            <p>Lizard King</p>
                          </div>
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className='image-dev'>
                          <h1>The cast</h1>
                          <img
                            src='assets/img/character/1.png'
                            className='character-img'
                            alt=''
                          />
                        </div>
                      </div>
                    </div>
                    <div className='character-button'>
                      <a href='' className='character-link'>
                        Khary Payton
                      </a>
                    </div>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='clip-wrapper'>
                    <div className='clip-inner'>
                      <h1 className='bio'>bio</h1>
                      <p className='bio-des'>
                        Actor, born in Augusta, Georgia. At the age of 14, he
                        won Showtime's first annual Kid Talent Quest.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='team-area'>
            <div className='container'>
              <div className='row'>
                <div className='col-lg-8'>
                  <div className='team-info-bg'>
                    <div className='row'>
                      <div className='col-md-6'>
                        <div className='character-title'>
                          <div className='character'>
                            <h3>Character</h3>
                            <p>Lizard King</p>
                          </div>
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className='image-dev'>
                          <h1>The cast</h1>
                          <img
                            src='assets/img/character/2.png'
                            className='character-img'
                            alt=''
                          />
                        </div>
                      </div>
                    </div>
                    <div className='character-button'>
                      <a href='' className='character-link'>
                        Sean Astin
                      </a>
                    </div>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='clip-wrapper'>
                    <div className='clip-inner'>
                      <h1 className='bio'>bio</h1>
                      <p className='bio-des'>
                        After being born Sean Astin, Sean Astin soon discovered
                        he could Sean Astin with the best of ‘em. Also, he had
                        super Seansome Seanbilities. After conquering every
                        aspect of Hollywood, Sean decided to use his new powers
                        to save everyone.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='team-area'>
            <div className='container'>
              <div className='row'>
                <div className='col-lg-8'>
                  <div className='team-info-bg'>
                    <div className='row'>
                      <div className='col-md-6'>
                        <div className='character-title'>
                          <div className='character'>
                            <h3>Character</h3>
                            <p>Lizard King</p>
                          </div>
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className='image-dev'>
                          <h1>The cast</h1>
                          <img
                            src='assets/img/character/3.png'
                            className='character-img'
                            alt=''
                          />
                        </div>
                      </div>
                    </div>
                    <div className='character-button'>
                      <a href='' className='character-link'>
                        ICE-T
                      </a>
                    </div>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='clip-wrapper'>
                    <div className='clip-inner'>
                      <h1 className='bio'>bio</h1>
                      <p className='bio-des'>
                        Rapper, songwriter, actor, and producer, signed to Sire
                        records in 1987 before going on to found his own record
                        label Rhyme $yndicate Records the following year.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='team-area'>
            <div className='container'>
              <div className='row'>
                <div className='col-lg-8'>
                  <div className='team-info-bg'>
                    <div className='row'>
                      <div className='col-md-6'>
                        <div className='character-title'>
                          <div className='character'>
                            <h3>Character</h3>
                            <p>Lizard King</p>
                          </div>
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className='image-dev'>
                          <h1>The cast</h1>
                          <img
                            src='assets/img/character/4.png'
                            className='character-img'
                            alt=''
                          />
                        </div>
                      </div>
                    </div>
                    <div className='character-button'>
                      <a href='' className='character-link'>
                        David Hayter
                      </a>
                    </div>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='clip-wrapper'>
                    <div className='clip-inner'>
                      <h1 className='bio'>bio</h1>
                      <p className='bio-des'>
                        Actor, screenwriter, director, and producer. Began
                        acting at the age of 9, spent his childhood traveling
                        the world.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='team-area'>
            <div className='container'>
              <div className='row'>
                <div className='col-lg-8'>
                  <div className='team-info-bg'>
                    <div className='row'>
                      <div className='col-md-6'>
                        <div className='character-title'>
                          <div className='character'>
                            <h3>Character</h3>
                            <p>Lizard King</p>
                          </div>
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className='image-dev'>
                          <h1>The cast</h1>
                          <img
                            src='assets/img/character/5.png'
                            className='character-img'
                            alt=''
                          />
                        </div>
                      </div>
                    </div>
                    <div className='character-button'>
                      <a href='' className='character-link'>
                        Richard Horvitz
                      </a>
                    </div>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='clip-wrapper'>
                    <div className='clip-inner'>
                      <h1 className='bio'>bio</h1>
                      <p className='bio-des'>
                        Actor and comedian. He is best known for his voice work
                        in animation and video games.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='team-area'>
            <div className='container'>
              <div className='row'>
                <div className='col-lg-8'>
                  <div className='team-info-bg'>
                    <div className='row'>
                      <div className='col-md-6'>
                        <div className='character-title'>
                          <div className='character'>
                            <h3>Character</h3>
                            <p>Nurse Justice</p>
                          </div>
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className='image-dev'>
                          <h1>The cast</h1>
                          <img
                            src='assets/img/character/6.png'
                            className='character-img'
                            alt=''
                          />
                        </div>
                      </div>
                    </div>
                    <div className='character-button'>
                      <a href='' className='character-link'>
                        Eric Bauza
                      </a>
                    </div>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='clip-wrapper'>
                    <div className='clip-inner'>
                      <h1 className='bio'>bio</h1>
                      <p className='bio-des'>
                        Voice actor and comedian he actually started his career
                        in animation as a character designer in Hollywood
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='team-area'>
            <div className='container'>
              <div className='row'>
                <div className='col-lg-8'>
                  <div className='team-info-bg'>
                    <div className='row'>
                      <div className='col-md-6'>
                        <div className='character-title'>
                          <div className='character'>
                            <h3>Character</h3>
                            <p>The Chartreuse Bowman</p>
                          </div>
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className='image-dev'>
                          <h1>The cast</h1>
                          <img
                            src='assets/img/character/7.png'
                            className='character-img'
                            alt=''
                          />
                        </div>
                      </div>
                    </div>
                    <div className='character-button'>
                      <a href='' className='character-link'>
                        Steve Blum
                      </a>
                    </div>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='clip-wrapper'>
                    <div className='clip-inner'>
                      <h1 className='bio'>bio</h1>
                      <p className='bio-des'>
                        Voice actor. Known for his distinctively deep voice, his
                        most well- known roles include Blum has hundreds of
                        credits in various video games, anime, cartoons, films,
                        and various other forms of animated entertainment, and
                        he also received a Guinness World Record in 2012 for
                        having the most video game voice acting credits.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='team-area'>
            <div className='container'>
              <div className='row'>
                <div className='col-lg-8'>
                  <div className='team-info-bg'>
                    <div className='row'>
                      <div className='col-md-6'>
                        <div className='character-title'>
                          <div className='character'>
                            <h3>Character</h3>
                            <p>Mark Trent: The Jupiter Man</p>
                          </div>
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className='image-dev'>
                          <h1>The cast</h1>
                          <img
                            src='assets/img/character/8.png'
                            className='character-img'
                            alt=''
                          />
                        </div>
                      </div>
                    </div>
                    <div className='character-button'>
                      <a href='' className='character-link'>
                        Nolan North
                      </a>
                    </div>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='clip-wrapper'>
                    <div className='clip-inner'>
                      <h1 className='bio'>bio</h1>
                      <p className='bio-des'>
                        After his breakthrough role as Dr. Chris Ramsey on the
                        ABC soap opera Port Charles in 1997, North moved into
                        voice acting when the show ended in 2003 and has since
                        become best known for his video game roles as
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='team-area'>
            <div className='container'>
              <div className='row'>
                <div className='col-lg-8'>
                  <div className='team-info-bg'>
                    <div className='row'>
                      <div className='col-md-6'>
                        <div className='character-title'>
                          <div className='character'>
                            <h3>Character</h3>
                            <p>Nick the Director</p>
                          </div>
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className='image-dev'>
                          <h1>The cast</h1>
                          <img
                            src='assets/img/character/9.png'
                            className='character-img'
                            alt=''
                          />
                        </div>
                      </div>
                    </div>
                    <div className='character-button'>
                      <a href='' className='character-link'>
                        Jim Cummings
                      </a>
                    </div>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='clip-wrapper'>
                    <div className='clip-inner'>
                      <h1 className='bio'>bio</h1>
                      <p className='bio-des'>
                        Voice actor who has appeared in almost 400 roles, but
                        began his career designing Mardi Gras Floats, and later
                        managed a video store.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='team-area'>
            <div className='container'>
              <div className='row'>
                <div className='col-lg-8'>
                  <div className='team-info-bg'>
                    <div className='row'>
                      <div className='col-md-6'>
                        <div className='character-title'>
                          <div className='character'>
                            <h3>Character</h3>
                            <p>Uberfrau</p>
                          </div>
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className='image-dev'>
                          <h1>The cast</h1>
                          <img
                            src='assets/img/character/10.png'
                            className='character-img'
                            alt=''
                          />
                        </div>
                      </div>
                    </div>
                    <div className='character-button'>
                      <a href='' className='character-link'>
                        Vanessa Marshall
                      </a>
                    </div>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='clip-wrapper'>
                    <div className='clip-inner'>
                      <h1 className='bio'>bio</h1>
                      <p className='bio-des'>
                        Voice and television actress who is most active in
                        films, cartoons and video games.She started voice acting
                        after being discovered by a voice acting agent during a
                        solo performance, where she was playing 15 different
                        characters.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='team-area'>
            <div className='container'>
              <div className='row'>
                <div className='col-lg-8'>
                  <div className='team-info-bg'>
                    <div className='row'>
                      <div className='col-md-6'>
                        <div className='character-title'>
                          <div className='character'>
                            <h3>Character</h3>
                            <p>The Artist Michaelangel o</p>
                          </div>
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className='image-dev'>
                          <h1>The cast</h1>
                          <img
                            src='assets/img/character/11.png'
                            className='character-img'
                            alt=''
                          />
                        </div>
                      </div>
                    </div>
                    <div className='character-button'>
                      <a href='' className='character-link'>
                        Townsend Coleman
                      </a>
                    </div>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='clip-wrapper'>
                    <div className='clip-inner'>
                      <h1 className='bio'>bio</h1>
                      <p className='bio-des'>
                        voice actor who has performed in many animated series
                        and TV commercials beginning in the early 1980s.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='team-area'>
            <div className='container'>
              <div className='row'>
                <div className='col-lg-8'>
                  <div className='team-info-bg'>
                    <div className='row'>
                      <div className='col-md-6'>
                        <div className='character-title'>
                          <div className='character'>
                            <h3>Character</h3>
                            <p>The Artist Leonardo</p>
                          </div>
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className='image-dev'>
                          <h1>The cast</h1>
                          <img
                            src='assets/img/character/12.png'
                            className='character-img'
                            alt=''
                          />
                        </div>
                      </div>
                    </div>
                    <div className='character-button'>
                      <a href='' className='character-link'>
                        Cam Clarke
                      </a>
                    </div>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='clip-wrapper'>
                    <div className='clip-inner'>
                      <h1 className='bio'>bio</h1>
                      <p className='bio-des'>
                        voice actor who has performed in many animated series
                        and TV commercials beginning in the early 1980s.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='team-area'>
            <div className='container'>
              <div className='row'>
                <div className='col-lg-8'>
                  <div className='team-info-bg'>
                    <div className='row'>
                      <div className='col-md-6'>
                        <div className='character-title'>
                          <div className='character'>
                            <h3>Character</h3>
                            <p>The Artist Donatello</p>
                          </div>
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className='image-dev'>
                          <h1>The cast</h1>
                          <img
                            src='assets/img/character/13.png'
                            className='character-img'
                            alt=''
                          />
                        </div>
                      </div>
                    </div>
                    <div className='character-button'>
                      <a href='' className='character-link'>
                        Barry Gordon
                      </a>
                    </div>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='clip-wrapper'>
                    <div className='clip-inner'>
                      <h1 className='bio'>bio</h1>
                      <p className='bio-des'>
                        Actor and political talk show host.[1] He was the
                        longest-serving president of the Screen Actors Guild,
                        having served from 1988 to 1995.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='team-area'>
            <div className='container'>
              <div className='row'>
                <div className='col-lg-8'>
                  <div className='team-info-bg'>
                    <div className='row'>
                      <div className='col-md-6'>
                        <div className='character-title'>
                          <div className='character'>
                            <h3>Character</h3>
                            <p>
                              Yentel, Vanish The Invisible Man, The Artist
                              Raphael
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className='image-dev'>
                          <h1>The cast</h1>
                          <img
                            src='assets/img/character/14.png'
                            className='character-img'
                            alt=''
                          />
                        </div>
                      </div>
                    </div>
                    <div className='character-button'>
                      <a href='' className='character-link'>
                        Rob Paulsen
                      </a>
                    </div>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='clip-wrapper'>
                    <div className='clip-inner'>
                      <h1 className='bio'>bio</h1>
                      <p className='bio-des'>
                        Voice actor. In total, has been the voice of over 250
                        different animated characters and voiced over 1,000
                        commercials. He received a Daytime Emmy Award for
                        Outstanding Performer in an Animated Program and three
                        Annie Awards for his role as Pinky.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='team-area'>
            <div className='container'>
              <div className='row'>
                <div className='col-lg-8'>
                  <div className='team-info-bg'>
                    <div className='row'>
                      <div className='col-md-6'>
                        <div className='character-title'>
                          <div className='character'>
                            <h3>Character</h3>
                            <p>Jerusalman, Vampierre</p>
                          </div>
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className='image-dev'>
                          <h1>The cast</h1>
                          <img
                            src='assets/img/character/15.png'
                            className='character-img'
                            alt=''
                          />
                        </div>
                      </div>
                    </div>
                    <div className='character-button'>
                      <a href='' className='character-link'>
                        Maurice LaMarche
                      </a>
                    </div>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='clip-wrapper'>
                    <div className='clip-inner'>
                      <h1 className='bio'>bio</h1>
                      <p className='bio-des'>
                        Voice actor, impressionist, and comedian that toured
                        George Carlin, Rodney Dangerfield and various other
                        acts.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='team-area'>
            <div className='container'>
              <div className='row'>
                <div className='col-lg-8'>
                  <div className='team-info-bg'>
                    <div className='row'>
                      <div className='col-md-6'>
                        <div className='character-title'>
                          <div className='character'>
                            <h3>Character</h3>
                            <p>Eagle Peeper/ The Night Dangler</p>
                          </div>
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className='image-dev'>
                          <h1>The cast</h1>
                          <img
                            src='assets/img/character/16.png'
                            className='character-img'
                            alt=''
                          />
                        </div>
                      </div>
                    </div>
                    <div className='character-button'>
                      <a href='' className='character-link'>
                        Carlos Alazraqui
                      </a>
                    </div>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='clip-wrapper'>
                    <div className='clip-inner'>
                      <h1 className='bio'>bio</h1>
                      <p className='bio-des'>
                        Actor, stand-up comedian, impressionist, producer and
                        screenwriter. and for his voice acting roles. He began
                        completing in open mic nights from 1982-1986 at the
                        University of Sacramento and used the prize money to
                        move out to LA.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='team-area'>
            <div className='container'>
              <div className='row'>
                <div className='col-lg-8'>
                  <div className='team-info-bg'>
                    <div className='row'>
                      <div className='col-md-6'>
                        <div className='character-title'>
                          <div className='character'>
                            <h3>Character</h3>
                            <p>Anson Thymes Y, The Insanely Awesome</p>
                          </div>
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className='image-dev'>
                          <h1>The cast</h1>
                          <img
                            src='assets/img/character/17.png'
                            className='character-img'
                            alt=''
                          />
                        </div>
                      </div>
                    </div>
                    <div className='character-button'>
                      <a href='' className='character-link'>
                        Jess Harnell
                      </a>
                    </div>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='clip-wrapper'>
                    <div className='clip-inner'>
                      <h1 className='bio'>bio</h1>
                      <p className='bio-des'>
                        Voice actor and singer. Harnell uses his impressionist
                        skills as lead singer of the critically acclaimed worlds
                        first pop/metal mash up band, "Rock Sugar". The band has
                        had worldwide success playing for audiences as large as
                        100,000 at a time and opening for such legendary bands
                        as AC/DC and Aerosmith.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='team-area'>
            <div className='container'>
              <div className='row'>
                <div className='col-lg-8'>
                  <div className='team-info-bg'>
                    <div className='row'>
                      <div className='col-md-6'>
                        <div className='character-title'>
                          <div className='character'>
                            <h3>Character</h3>
                            <p>Mister Zordo</p>
                          </div>
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className='image-dev'>
                          <h1>The cast</h1>
                          <img
                            src='assets/img/character/18.png'
                            className='character-img'
                            alt=''
                          />
                        </div>
                      </div>
                    </div>
                    <div className='character-button'>
                      <a href='' className='character-link'>
                        Fred Tatasciore
                      </a>
                    </div>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='clip-wrapper'>
                    <div className='clip-inner'>
                      <h1 className='bio'>bio</h1>
                      <p className='bio-des'>
                        Voice actor who has provided voices in animated and
                        live-action films, television shows, and video games.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='team-area'>
            <div className='container'>
              <div className='row'>
                <div className='col-lg-8'>
                  <div className='team-info-bg'>
                    <div className='row'>
                      <div className='col-md-6'>
                        <div className='character-title'>
                          <div className='character'>
                            <h3>Character</h3>
                            <p>Captain Bantam</p>
                          </div>
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className='image-dev'>
                          <h1>The cast</h1>
                          <img
                            src='assets/img/character/19.png'
                            className='character-img'
                            alt=''
                          />
                        </div>
                      </div>
                    </div>
                    <div className='character-button'>
                      <a href='' className='character-link'>
                        Tom Kenny
                      </a>
                    </div>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='clip-wrapper'>
                    <div className='clip-inner'>
                      <h1 className='bio'>bio</h1>
                      <p className='bio-des'>
                        American actor and comedian. Who won two Daytime Emmy
                        Awards and two Annie Awards for his voice work as
                        SpongeBob SquarePants and the Ice King. He often
                        collaborates with his wife and fellow voice artist Jill
                        Talley, who plays Karen on SpongeBob SquarePants.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='team-area'>
            <div className='container'>
              <div className='row'>
                <div className='col-lg-8'>
                  <div className='team-info-bg'>
                    <div className='row'>
                      <div className='col-md-6'>
                        <div className='character-title'>
                          <div className='character'>
                            <h3>Character</h3>
                            <p>Babushka</p>
                          </div>
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className='image-dev'>
                          <h1>The cast</h1>
                          <img
                            src='assets/img/character/20.png'
                            className='character-img'
                            alt=''
                          />
                        </div>
                      </div>
                    </div>
                    <div className='character-button'>
                      <a href='' className='character-link'>
                        Billy West
                      </a>
                    </div>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='clip-wrapper'>
                    <div className='clip-inner'>
                      <h1 className='bio'>bio</h1>
                      <p className='bio-des'>
                        Voice actor, comedian, impressionist, and former radio
                        personality.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='team-area'>
            <div className='container'>
              <div className='row'>
                <div className='col-lg-8'>
                  <div className='team-info-bg'>
                    <div className='row'>
                      <div className='col-md-6'>
                        <div className='character-title'>
                          <div className='character'>
                            <h3>Character</h3>
                            <p>The Rabbit</p>
                          </div>
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className='image-dev'>
                          <h1>The cast</h1>
                          <img
                            src='assets/img/character/21.png'
                            className='character-img'
                            alt=''
                          />
                        </div>
                      </div>
                    </div>
                    <div className='character-button'>
                      <a href='' className='character-link'>
                        Mason Heidger
                      </a>
                    </div>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='clip-wrapper'>
                    <div className='clip-inner'>
                      <h1 className='bio'>bio</h1>
                      <p className='bio-des'>Actor, director, writer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='team-area'>
            <div className='container'>
              <div className='row'>
                <div className='col-lg-8'>
                  <div className='team-info-bg'>
                    <div className='row'>
                      <div className='col-md-6'>
                        <div className='character-title'>
                          <div className='character'>
                            <h3>Character</h3>
                            <p>The Spider Ranger</p>
                          </div>
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className='image-dev'>
                          <h1>The cast</h1>
                          <img
                            src='assets/img/character/22.png'
                            className='character-img'
                            alt=''
                          />
                        </div>
                      </div>
                    </div>
                    <div className='character-button'>
                      <a href='' className='character-link'>
                        Croix Provence
                      </a>
                    </div>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='clip-wrapper'>
                    <div className='clip-inner'>
                      <h1 className='bio'>bio</h1>
                      <p className='bio-des'>
                        Croix Elaine Provence is an award-winning actress and
                        filmmaker who has been enchanted with the art of
                        storytelling since age eight.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='team-area'>
            <div className='container'>
              <div className='row'>
                <div className='col-lg-8'>
                  <div className='team-info-bg'>
                    <div className='row'>
                      <div className='col-md-6'>
                        <div className='character-title'>
                          <div className='character'>
                            <h3>Character</h3>
                            <p>Professor What</p>
                          </div>
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className='image-dev'>
                          <h1>The cast</h1>
                          <img
                            src='assets/img/character/23.png'
                            className='character-img'
                            alt=''
                          />
                        </div>
                      </div>
                    </div>
                    <div className='character-button'>
                      <a href='' className='character-link'>
                        Phil Devone
                      </a>
                    </div>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='clip-wrapper'>
                    <div className='clip-inner'>
                      <h1 className='bio'>bio</h1>
                      <p className='bio-des'></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='team-area'>
            <div className='container'>
              <div className='row'>
                <div className='col-lg-8'>
                  <div className='team-info-bg'>
                    <div className='row'>
                      <div className='col-md-6'>
                        <div className='character-title'>
                          <div className='character'>
                            <h3>Character</h3>
                            <p>The Hare</p>
                          </div>
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className='image-dev'>
                          <h1>The cast</h1>
                          <img
                            src='assets/img/character/24.png'
                            className='character-img'
                            alt=''
                          />
                        </div>
                      </div>
                    </div>
                    <div className='character-button'>
                      <a href='' className='character-link'>
                        James Kenneth Graham
                      </a>
                    </div>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='clip-wrapper'>
                    <div className='clip-inner'>
                      <h1 className='bio'>bio</h1>
                      <p className='bio-des'></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='team-area'>
            <div className='container'>
              <div className='row'>
                <div className='col-lg-8'>
                  <div className='team-info-bg'>
                    <div className='row'>
                      <div className='col-md-6'>
                        <div className='character-title'>
                          <div className='character'>
                            <h3>Character</h3>
                            <p>Arrow of David</p>
                          </div>
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className='image-dev'>
                          <h1>The cast</h1>
                          <img
                            src='assets/img/character/25.png'
                            className='character-img'
                            alt=''
                          />
                        </div>
                      </div>
                    </div>
                    <div className='character-button'>
                      <a href='' className='character-link'>
                        Jeff McMahon
                      </a>
                    </div>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='clip-wrapper'>
                    <div className='clip-inner'>
                      <h1 className='bio'>bio</h1>
                      <p className='bio-des'></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='team-area'>
            <div className='container'>
              <div className='row'>
                <div className='col-lg-8'>
                  <div className='team-info-bg'>
                    <div className='row'>
                      <div className='col-md-6'>
                        <div className='character-title'>
                          <div className='character'>
                            <h3>Character</h3>
                            <p>
                              Flaming Ghost Ship: The Red Mountie of Nova Scotia
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className='image-dev'>
                          <h1>The cast</h1>
                          <img
                            src='assets/img/character/26.png'
                            className='character-img'
                            alt=''
                          />
                        </div>
                      </div>
                    </div>
                    <div className='character-button'>
                      <a href='' className='character-link'>
                        Eric Vale
                      </a>
                    </div>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='clip-wrapper'>
                    <div className='clip-inner'>
                      <h1 className='bio'>bio</h1>
                      <p className='bio-des'>
                        Voice actor who provided voices for a number of English
                        versions of Japanese anime series.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='team-area'>
            <div className='container'>
              <div className='row'>
                <div className='col-lg-8'>
                  <div className='team-info-bg'>
                    <div className='row'>
                      <div className='col-md-6'>
                        <div className='character-title'>
                          <div className='character'>
                            <h3>Character</h3>
                            <p>Harold Horton: The Red Mountie of Nova Scotia</p>
                          </div>
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className='image-dev'>
                          <h1>The cast</h1>
                          <img
                            src='assets/img/character/27.png'
                            className='character-img'
                            alt=''
                          />
                        </div>
                      </div>
                    </div>
                    <div className='character-button'>
                      <a href='' className='character-link'>
                        Ross Marquand
                      </a>
                    </div>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='clip-wrapper'>
                    <div className='clip-inner'>
                      <h1 className='bio'>bio</h1>
                      <p className='bio-des'>
                        Actor, impressionist, who is also known for
                        impersonating a plethora of celebrities including
                        Michael Caine, Sylvester Stallone, Matthew McConaughey
                        and over 50 others.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {/* =====================top title card=================== */}
          <div className='team-area'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-12'>
                  <div className='team-info-bg top-title'>
                    <h1 className='bio'>actor</h1>
                    <div className='character-button center'>
                      <a href='' className='character-link'>
                        Khary Payton
                      </a>
                    </div>
                    <div className='character-title top-title-content'>
                      <div className='character'>
                        <h3>where do i know them</h3>
                        <p>
                          King Ezekiel on the horror drama series The Walking
                          Dead and Dr. Terrell Jackson on the soap opera General
                          Hospital, as well as voicing Cyborg across various DC
                          media and Kaldur'ahm / Aqualad in the animated series
                          Young Justice
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='team-area'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-12'>
                  <div className='team-info-bg top-title'>
                    <h1 className='bio'>actor</h1>
                    <div className='character-button center'>
                      <a href='' className='character-link'>
                        Astin
                      </a>
                    </div>
                    <div className='character-title top-title-content'>
                      <div className='character'>
                        <h3>where do i know them</h3>
                        <p>
                          Samwise Gamgee in The Lord of the Rings trilogy
                          (2001–2003), Mikey Walsh in The Goonies (1985), Daniel
                          Ruettiger in Rudy (1993), Doug Whitmore in 50 First
                          Dates (2004), Bill in Click (2006), Lynn McGill in the
                          fifth season of 24 (2006), Oso in Special Agent Oso
                          (2009–2012), Raphael in Teenage Mutant Ninja Turtles
                          (2012–2017), Bob Newby in the second and third seasons
                          of Netflix's Stranger Things (2017; 2019),[1] and Ed
                          in No Good Nick (2019).
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='team-area'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-12'>
                  <div className='team-info-bg top-title'>
                    <h1 className='bio'>actor</h1>
                    <div className='character-button center'>
                      <a href='' className='character-link'>
                        ICE-T
                      </a>
                    </div>
                    <div className='character-title top-title-content'>
                      <div className='character'>
                        <h3>where do i know them</h3>
                        <p>
                          NYPD Detective/Sergeant Odafin Tutuola on the NBC
                          police drama Law & Order: Special Victims Unit or for
                          his multiple album releases “Rhyme Pays” and Power”
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='team-area'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-12'>
                  <div className='team-info-bg top-title'>
                    <h1 className='bio'>actor</h1>
                    <div className='character-button center'>
                      <a href='' className='character-link'>
                        David Hayter
                      </a>
                    </div>
                    <div className='character-title top-title-content'>
                      <div className='character'>
                        <h3>where do i know them</h3>
                        <p>
                          Solid Snake and Naked Snake in the Metal Gear video
                          game series. Writer for X- Men, cowriter for X2, and
                          Watchmen and the voice of King Shark in the Flash tv
                          Series.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='team-area'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-12'>
                  <div className='team-info-bg top-title'>
                    <h1 className='bio'>actor</h1>
                    <div className='character-button center'>
                      <a href='' className='character-link'>
                        Richard Horvitz
                      </a>
                    </div>
                    <div className='character-title top-title-content'>
                      <div className='character'>
                        <h3>where do i know them</h3>
                        <p>
                          Alpha 5 on Mighty Morphin Power Rangers, Power Rangers
                          Zeo and Power Rangers Turbo, Razputin in Psychonauts,
                          Kaos in Skylanders, Billy and his father Harold in
                          Grim & Evil and The Grim Adventures of Billy & Mandy,
                          Grey Matter in Ben 10, Daggett in The Angry Beavers,
                          Zim in Invader Zim, Orthopox in Destroy All Humans!,
                          the Zoni in Ratchet & Clank, Bumble in Kinectimals,
                          the Space Weaver in Broken Age, Kanchomé in Zatch
                          Bell!, and Moxxie in Helluva Boss.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='team-area'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-12'>
                  <div className='team-info-bg top-title'>
                    <h1 className='bio'>actor</h1>
                    <div className='character-button center'>
                      <a href='' className='character-link'>
                        Eric Bauza
                      </a>
                    </div>
                    <div className='character-title top-title-content'>
                      <div className='character'>
                        <h3>where do i know them</h3>
                        <p>
                          Stimpy on Ren and Stimpy "Adult Party Cartoon", Foop
                          on The Fairly OddParents, Thunderbolt Ross on Iron
                          Man: Armored Adventures, and Fozzie Bear on Muppet
                          Babies. He is the current voice of many characters,
                          including Bugs Bunny, Daffy Duck, Marvin the Martian,
                          Pepé Le Pew, Tweety, Speedy Gonzales, Henery Hawk,
                          Barnyard Dawg, Woody Woodpecker, Boo-Boo Bear, Atom
                          Ant, Luke Skywalker, and Dino.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='team-area'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-12'>
                  <div className='team-info-bg top-title'>
                    <h1 className='bio'>actor</h1>
                    <div className='character-button center'>
                      <a href='' className='character-link'>
                        Steve Blum
                      </a>
                    </div>
                    <div className='character-title top-title-content'>
                      <div className='character'>
                        <h3>where do i know them</h3>
                        <p>
                          Spike Spiegel from the anime series Cowboy Bebop,
                          Garazeb Orrelios from the animated series Star Wars
                          Rebels, Wolverine from various Marvel projects,
                          Terence and Bomb on Angry Birds Live Action, and
                          Sub-Zero from the video game franchise Mortal Kombat.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='team-area'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-12'>
                  <div className='team-info-bg top-title'>
                    <h1 className='bio'>actor</h1>
                    <div className='character-button center'>
                      <a href='' className='character-link'>
                        Nolan North
                      </a>
                    </div>
                    <div className='character-title top-title-content'>
                      <div className='character'>
                        <h3>where do i know them</h3>
                        <p>
                          Nathan Drake in the Uncharted series, Desmond Miles in
                          the Assassin's Creed series, Merasmus in Team Fortress
                          2, the Prince in Prince of Persia (2008), Dr. Edward
                          Richtofen in the Call of Duty Zombies mode, Deadpool
                          in various Marvel Comics media, the Penguin in the
                          Batman: Arkham franchise, Captain Martin Walker in
                          Spec Ops: The Line, David in The Last of Us, himself
                          as one of the voices for the player character in
                          Saints Row IV, Tony Stark in Marvel's Avengers, and
                          Ghost in the Destiny video game series.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='team-area'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-12'>
                  <div className='team-info-bg top-title'>
                    <h1 className='bio'>actor</h1>
                    <div className='character-button center'>
                      <a href='' className='character-link'>
                        Jim Cummings
                      </a>
                    </div>
                    <div className='character-title top-title-content'>
                      <div className='character'>
                        <h3>where do i know them</h3>
                        <p>
                          Winnie the Pooh, Tigger, the Tasmanian Devil, Pete,
                          and Darkwing Duck.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='team-area'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-12'>
                  <div className='team-info-bg top-title'>
                    <h1 className='bio'>actor</h1>
                    <div className='character-button center'>
                      <a href='' className='character-link'>
                        Vanessa Marshall
                      </a>
                    </div>
                    <div className='character-title top-title-content'>
                      <div className='character'>
                        <h3>where do i know them</h3>
                        <p>
                          Hera in "Star Wars: Rebels," Wonder Woman in DC's
                          "Harley Quinn," Gamora in "Guardians of the Galaxy,"
                          and Black Canary in "Young Justice: Phantoms." In the
                          world of video games, she is Sheeva in "Mortal Combat
                          11," Olga in "Metal Gear Solid 2," and Jan Ors in
                          "Star Wars: Jedi Knights II." She announces TV promos
                          for ABC, NBC, CBS, Fox, HGTV, and MTV. She narrates
                          shows for ESPN, Lifetime, E!, TLC, and Tennis Channel.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='team-area'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-12'>
                  <div className='team-info-bg top-title'>
                    <h1 className='bio'>actor</h1>
                    <div className='character-button center'>
                      <a href='' className='character-link'>
                        Townsend Coleman
                      </a>
                    </div>
                    <div className='character-title top-title-content'>
                      <div className='character'>
                        <h3>where do i know them</h3>
                        <p>
                          Michaelangelo from Teenage Mutant Ninja Turtles,[1]
                          Wayne Gretzky on ProStars, Jason Whittaker in
                          Adventures in Odyssey and the title characters in
                          Where's Wally? and The Tick.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='team-area'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-12'>
                  <div className='team-info-bg top-title'>
                    <h1 className='bio'>actor</h1>
                    <div className='character-button center'>
                      <a href='' className='character-link'>
                        Cam Clarke
                      </a>
                    </div>
                    <div className='character-title top-title-content'>
                      <div className='character'>
                        <h3>where do i know them</h3>
                        <p>
                          Leonardo and Rocksteady in the 1987 Teenage Mutant
                          Ninja Turtles animated series, Shotaro Kaneda in the
                          1989 original Streamline Pictures English dub of
                          Akira, and Liquid Snake in the Metal Gear series. He
                          often serves as a voice double for Matthew Broderick
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='team-area'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-12'>
                  <div className='team-info-bg top-title'>
                    <h1 className='bio'>actor</h1>
                    <div className='character-button center'>
                      <a href='' className='character-link'>
                        Barry Gordon
                      </a>
                    </div>
                    <div className='character-title top-title-content'>
                      <div className='character'>
                        <h3>where do i know them</h3>
                        <p>
                          Donatello and Bebop in Teenage Mutant Ninja Turtles
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='team-area'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-12'>
                  <div className='team-info-bg top-title'>
                    <h1 className='bio'>actor</h1>
                    <div className='character-button center'>
                      <a href='' className='character-link'>
                        Rob Paulsen
                      </a>
                    </div>
                    <div className='character-title top-title-content'>
                      <div className='character'>
                        <h3>where do i know them</h3>
                        <p>
                          1987 Raphael and 2012 Donatello from the animated
                          series respectively of Teenage Mutant Ninja Turtles;
                          Yakko Warner, Dr. Otto Scratchansniff, and Pinky from
                          Animaniacs and Pinky and the Brain; Carl Wheezer from
                          Jimmy Neutron: Boy Genius and its spin-off television
                          series The Adventures of Jimmy Neutron, Boy Genius;
                          Peck the Rooster from Barnyard and its spin-off
                          television series Back at the Barnyard; Spike in The
                          Land Before Time films and television series; and the
                          title character in The Mask: Animated Series
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='team-area'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-12'>
                  <div className='team-info-bg top-title'>
                    <h1 className='bio'>actor</h1>
                    <div className='character-button center'>
                      <a href='' className='character-link'>
                        Maurice LaMarche
                      </a>
                    </div>
                    <div className='character-title top-title-content'>
                      <div className='character'>
                        <h3>where do i know them</h3>
                        <p>
                          Brain in Animaniacs as well as its spin-off Pinky and
                          the Brain, Big Bob in Hey Arnold! (1996–2004), and a
                          variety of characters in Futurama. He also voiced Egon
                          Spengler in The Real Ghostbusters and its follow-up
                          Extreme Ghostbusters
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='team-area'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-12'>
                  <div className='team-info-bg top-title'>
                    <h1 className='bio'>actor</h1>
                    <div className='character-button center'>
                      <a href='' className='character-link'>
                        Carlos Alazraqui
                      </a>
                    </div>
                    <div className='character-title top-title-content'>
                      <div className='character'>
                        <h3>where do i know them</h3>
                        <p>
                          Deputy James Garcia on Reno 911! Voice of Spyro from
                          Spyro the Dragon, Shamless O’Scanty, Leslie P.
                          Lilylegs, Elliott Sampson and Tad Tucker on New Looney
                          Tunes, the Taco Bell chihuahua in the Taco Bell
                          commercials, Denzel Crocker, Juandissimo Magnifico,
                          and Sheldon Dinkleberg on The Fairly OddParents, Rocko
                          and Spunky on Rocko's Modern Life, Lazlo, Clam, and
                          other characters on Camp Lazlo, Rikochet in ¡Mucha
                          Lucha!, Grandpapi Rivera in El Tigre: The Adventures
                          of Manny Rivera, Carlos Casagrande, Sergio, Vito, and
                          other characters on The Casagrandes, and Mr. Weed in
                          Family Guy. He is a weekly contributor on The
                          Stephanie Miller Show.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='team-area'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-12'>
                  <div className='team-info-bg top-title'>
                    <h1 className='bio'>actor</h1>
                    <div className='character-button center'>
                      <a href='' className='character-link'>
                        Jess Harnell
                      </a>
                    </div>
                    <div className='character-title top-title-content'>
                      <div className='character'>
                        <h3>where do i know them</h3>
                        <p>
                          Captain Hero in the animated TV series Drawn Together,
                          Wakko Warner in Animaniacs, Ironhide in the first
                          three Transformers films produced by Michael Bay, and
                          Crash Bandicoot in the video game franchise of the
                          same name. Harnell has also been the announcer for
                          America's Funniest Home Videos since 1998.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='team-area'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-12'>
                  <div className='team-info-bg top-title'>
                    <h1 className='bio'>actor</h1>
                    <div className='character-button center'>
                      <a href='' className='character-link'>
                        Fred Tatasciore
                      </a>
                    </div>
                    <div className='character-title top-title-content'>
                      <div className='character'>
                        <h3>where do i know them</h3>
                        <p>
                          The Hulk in various Marvel media and Solomon Grundy in
                          various DC media. Other characters he has voiced
                          include Yosemite Sam, Taz, Soldier: 76, Beast, Shao
                          Kahn and Kakuzu.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='team-area'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-12'>
                  <div className='team-info-bg top-title'>
                    <h1 className='bio'>actor</h1>
                    <div className='character-button center'>
                      <a href='' className='character-link'>
                        Tom Kenny
                      </a>
                    </div>
                    <div className='character-title top-title-content'>
                      <div className='character'>
                        <h3>where do i know them</h3>
                        <p>
                          SpongeBob SquarePants and associated media. Heffer
                          Wolfe in Rocko's Modern Life; the Ice King in
                          Adventure Time; the Narrator and Mayor in The
                          Powerpuff Girls; Carl Chryniszzswics in Johnny Bravo;
                          Dog in CatDog; Hank and Jeremy in Talking Tom and
                          Friends; and Spyro from the Spyro the Dragon video
                          game series. His live-action work includes the comedy
                          variety shows The Edge and Mr. Show.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='team-area'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-12'>
                  <div className='team-info-bg top-title'>
                    <h1 className='bio'>actor</h1>
                    <div className='character-button center'>
                      <a href='' className='character-link'>
                        Tom Kenny
                      </a>
                    </div>
                    <div className='character-title top-title-content'>
                      <div className='character'>
                        <h3>where do i know them</h3>
                        <p>
                          SpongeBob SquarePants and associated media. Heffer
                          Wolfe in Rocko's Modern Life; the Ice King in
                          Adventure Time; the Narrator and Mayor in The
                          Powerpuff Girls; Carl Chryniszzswics in Johnny Bravo;
                          Dog in CatDog; Hank and Jeremy in Talking Tom and
                          Friends; and Spyro from the Spyro the Dragon video
                          game series. His live-action work includes the comedy
                          variety shows The Edge and Mr. Show.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='team-area'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-12'>
                  <div className='team-info-bg top-title'>
                    <h1 className='bio'>actor</h1>
                    <div className='character-button center'>
                      <a href='' className='character-link'>
                        Billy West
                      </a>
                    </div>
                    <div className='character-title top-title-content'>
                      <div className='character'>
                        <h3>where do i know them</h3>
                        <p>
                          Bugs Bunny in the 1996 film Space Jam and several
                          subsequent projects, the title characters of Doug and
                          The Ren & Stimpy Show, as well as the Futurama
                          characters Philip J. Fry, Professor Farnsworth, Dr.
                          Zoidberg, and Zapp Brannigan. In commercials, he is
                          the current voice of the Red M&M and formerly voiced
                          Buzz for Honey Nut Cheerios. West also voices other
                          such established characters such as Elmer Fudd,
                          Popeye, Shaggy Rogers, Skeets, Tom, Muttley, and Woody
                          Woodpecker. He was a cast member on The Howard Stern
                          Show, during which time he was noted for his
                          impressions of Larry Fine, Marge Schott, George Takei,
                          and Jackie Martling.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='team-area'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-12'>
                  <div className='team-info-bg top-title'>
                    <h1 className='bio'>actor</h1>
                    <div className='character-button center'>
                      <a href='' className='character-link'>
                        Mason Heidger
                      </a>
                    </div>
                    <div className='character-title top-title-content'>
                      <div className='character'>
                        <h3>where do i know them</h3>
                        <p>
                          Batman v Superman: Dawn of Justice (2016), Chicago
                          P.D. (2014) and Notes from Melanie (2019)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='team-area'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-12'>
                  <div className='team-info-bg top-title'>
                    <h1 className='bio'>actor</h1>
                    <div className='character-button center'>
                      <a href='' className='character-link'>
                        Croix Provence
                      </a>
                    </div>
                    <div className='character-title top-title-content'>
                      <div className='character'>
                        <h3>where do i know them</h3>
                        <p>
                          Wikity Watch / Zoogla Boogla / The Monkey in Space Dad
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='team-area'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-12'>
                  <div className='team-info-bg top-title'>
                    <h1 className='bio'>actor</h1>
                    <div className='character-button center'>
                      <a href='' className='character-link'>
                        Phil Devone
                      </a>
                    </div>
                    <div className='character-title top-title-content'>
                      <div className='character'>
                        <h3>where do i know them</h3>
                        <p>
                          Affliction (2021), Dog Eat Dog (2016) and Blood
                          Immortal (2019).
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='team-area'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-12'>
                  <div className='team-info-bg top-title'>
                    <h1 className='bio'>actor</h1>
                    <div className='character-button center'>
                      <a href='' className='character-link'>
                        Phil Devone
                      </a>
                    </div>
                    <div className='character-title top-title-content'>
                      <div className='character'>
                        <h3>where do i know them</h3>
                        <p>
                          Affliction (2021), Dog Eat Dog (2016) and Blood
                          Immortal (2019).
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='team-area'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-12'>
                  <div className='team-info-bg top-title'>
                    <h1 className='bio'>actor</h1>
                    <div className='character-button center'>
                      <a href='' className='character-link'>
                        James Kenneth Graham
                      </a>
                    </div>
                    <div className='character-title top-title-content'>
                      <div className='character'>
                        <h3>where do i know them</h3>
                        <p></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='team-area'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-12'>
                  <div className='team-info-bg top-title'>
                    <h1 className='bio'>actor</h1>
                    <div className='character-button center'>
                      <a href='' className='character-link'>
                        Jeff McMahon
                      </a>
                    </div>
                    <div className='character-title top-title-content'>
                      <div className='character'>
                        <h3>where do i know them</h3>
                        <p></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='team-area'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-12'>
                  <div className='team-info-bg top-title'>
                    <h1 className='bio'>actor</h1>
                    <div className='character-button center'>
                      <a href='' className='character-link'>
                        Eric Vale
                      </a>
                    </div>
                    <div className='character-title top-title-content'>
                      <div className='character'>
                        <h3>where do i know them</h3>
                        <p>
                          Koichiro Iketani in the Initial D series, Trunks in
                          the Dragon Ball series, Sanji in One Piece, Kogoro
                          Akechi in Trickster, Keisuke Umehara in Big Windup!,
                          Huey Laforet in Baccano!, Tobari Durandal Kumohira in
                          Nabari no Ou, Jean Croce in Gunslinger Girl series,
                          Kisumi Shigino in Free! series, Kakeru Ryuen in
                          Classroom of the Elite, Solf J. Kimblee in Fullmetal
                          Alchemist, Kazuma in Noragami series, Tsunenaga Tamaki
                          in Deadman Wonderland, Qisha Tianling in Chaos Dragon,
                          Akechi in Rampo Kitan: Game of Laplace, Casshern in
                          Casshern Sins, Hayato Kujo in Aquarion Logos, America
                          and Canada in the Hetalia: Axis Powers series, Ferid
                          Bathory in the Seraph of the End series, Yuki Sohma in
                          Fruits Basket series, Tenko "Tomura Shigaraki" Shimura
                          in My Hero Academia, Loke in Fairy Tail and Phoenix
                          Wright from Ace Attorney.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='team-area'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-12'>
                  <div className='team-info-bg top-title'>
                    <h1 className='bio'>actor</h1>
                    <div className='character-button center'>
                      <a href='' className='character-link'>
                        Ross Marquand
                      </a>
                    </div>
                    <div className='character-title top-title-content'>
                      <div className='character'>
                        <h3>where do i know them</h3>
                        <p>
                          He has played Aaron on the television series The
                          Walking Dead since 2015, Red Skull and Ultron in
                          various projects connected to the Marvel Cinematic
                          Universe, and has voiced numerous characters on the
                          streaming television series Invincible (2021).
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='team-area'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-12'>
                  <div className='team-info-bg top-title'>
                    <h1 className='bio'>actor</h1>
                    <div className='character-button center'>
                      <a href='' className='character-link'>
                        Ross Marquand
                      </a>
                    </div>
                    <div className='character-title top-title-content'>
                      <div className='character'>
                        <h3>where do i know them</h3>
                        <p>
                          He has played Aaron on the television series The
                          Walking Dead since 2015, Red Skull and Ultron in
                          various projects connected to the Marvel Cinematic
                          Universe, and has voiced numerous characters on the
                          streaming television series Invincible (2021).
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {/* =========================center image ===================== */}
          <div className='team-area'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-12'>
                  <div className='team-info-bg top-title'>
                    <h1 className='bio'>actor</h1>
                    <div className='actor-image'>
                      <img src='assets/img/actors/1.png' alt='' />
                    </div>
                    <div className='character-button center'>
                      <a href='' className='character-link'>
                        Khary Payton
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='team-area'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-12'>
                  <div className='team-info-bg top-title'>
                    <h1 className='bio'>actor</h1>
                    <div className='actor-image'>
                      <img src='assets/img/actors/2.png' alt='' />
                    </div>
                    <div className='character-button center'>
                      <a href='' className='character-link'>
                        Sean Astin
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='team-area'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-12'>
                  <div className='team-info-bg top-title'>
                    <h1 className='bio'>actor</h1>
                    <div className='actor-image'>
                      <img src='assets/img/actors/3.png' alt='' />
                    </div>
                    <div className='character-button center'>
                      <a href='' className='character-link'>
                        ICE-T
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='team-area'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-12'>
                  <div className='team-info-bg top-title'>
                    <h1 className='bio'>actor</h1>
                    <div className='actor-image'>
                      <img src='assets/img/actors/4.png' alt='' />
                    </div>
                    <div className='character-button center'>
                      <a href='' className='character-link'>
                        David Hayter
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='team-area'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-12'>
                  <div className='team-info-bg top-title'>
                    <h1 className='bio'>actor</h1>
                    <div className='actor-image'>
                      <img src='assets/img/actors/5.png' alt='' />
                    </div>
                    <div className='character-button center'>
                      <a href='' className='character-link'>
                        Richard Horvitz
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='team-area'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-12'>
                  <div className='team-info-bg top-title'>
                    <h1 className='bio'>actor</h1>
                    <div className='actor-image'>
                      <img src='assets/img/actors/6.png' alt='' />
                    </div>
                    <div className='character-button center'>
                      <a href='' className='character-link'>
                        Eric Bauza
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='team-area'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-12'>
                  <div className='team-info-bg top-title'>
                    <h1 className='bio'>actor</h1>
                    <div className='actor-image'>
                      <img src='assets/img/actors/7.png' alt='' />
                    </div>
                    <div className='character-button center'>
                      <a href='' className='character-link'>
                        Steve Blum
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='team-area'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-12'>
                  <div className='team-info-bg top-title'>
                    <h1 className='bio'>actor</h1>
                    <div className='actor-image'>
                      <img src='assets/img/actors/8.png' alt='' />
                    </div>
                    <div className='character-button center'>
                      <a href='' className='character-link'>
                        Steve Blum
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='team-area'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-12'>
                  <div className='team-info-bg top-title'>
                    <h1 className='bio'>actor</h1>
                    <div className='actor-image'>
                      <img src='assets/img/actors/9.png' alt='' />
                    </div>
                    <div className='character-button center'>
                      <a href='' className='character-link'>
                        Jim Cummings
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='team-area'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-12'>
                  <div className='team-info-bg top-title'>
                    <h1 className='bio'>actor</h1>
                    <div className='actor-image'>
                      <img src='assets/img/actors/10.png' alt='' />
                    </div>
                    <div className='character-button center'>
                      <a href='' className='character-link'>
                        Vanessa Marshall
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='team-area'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-12'>
                  <div className='team-info-bg top-title'>
                    <h1 className='bio'>actor</h1>
                    <div className='actor-image'>
                      <img src='assets/img/actors/11.png' alt='' />
                    </div>
                    <div className='character-button center'>
                      <a href='' className='character-link'>
                        Townsend Coleman
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='team-area'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-12'>
                  <div className='team-info-bg top-title'>
                    <h1 className='bio'>actor</h1>
                    <div className='actor-image'>
                      <img src='assets/img/actors/12.png' alt='' />
                    </div>
                    <div className='character-button center'>
                      <a href='' className='character-link'>
                        Cam Clarke
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='team-area'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-12'>
                  <div className='team-info-bg top-title'>
                    <h1 className='bio'>actor</h1>
                    <div className='actor-image'>
                      <img src='assets/img/actors/13.png' alt='' />
                    </div>
                    <div className='character-button center'>
                      <a href='' className='character-link'>
                        Barry Gordon
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='team-area'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-12'>
                  <div className='team-info-bg top-title'>
                    <h1 className='bio'>actor</h1>
                    <div className='actor-image'>
                      <img src='assets/img/actors/14.png' alt='' />
                    </div>
                    <div className='character-button center'>
                      <a href='' className='character-link'>
                        Rob Paulsen
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='team-area'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-12'>
                  <div className='team-info-bg top-title'>
                    <h1 className='bio'>actor</h1>
                    <div className='actor-image'>
                      <img src='assets/img/actors/15.png' alt='' />
                    </div>
                    <div className='character-button center'>
                      <a href='' className='character-link'>
                        Maurice LaMarche
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='team-area'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-12'>
                  <div className='team-info-bg top-title'>
                    <h1 className='bio'>actor</h1>
                    <div className='actor-image'>
                      <img src='assets/img/actors/16.png' alt='' />
                    </div>
                    <div className='character-button center'>
                      <a href='' className='character-link'>
                        Carlos Alazraqui
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='team-area'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-12'>
                  <div className='team-info-bg top-title'>
                    <h1 className='bio'>actor</h1>
                    <div className='actor-image'>
                      <img src='assets/img/actors/17.png' alt='' />
                    </div>
                    <div className='character-button center'>
                      <a href='' className='character-link'>
                        Jess Harnell
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='team-area'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-12'>
                  <div className='team-info-bg top-title'>
                    <h1 className='bio'>actor</h1>
                    <div className='actor-image'>
                      <img src='assets/img/actors/18.png' alt='' />
                    </div>
                    <div className='character-button center'>
                      <a href='' className='character-link'>
                        Fred Tatasciore
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='team-area'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-12'>
                  <div className='team-info-bg top-title'>
                    <h1 className='bio'>actor</h1>
                    <div className='actor-image'>
                      <img src='assets/img/actors/19.png' alt='' />
                    </div>
                    <div className='character-button center'>
                      <a href='' className='character-link'>
                        Tom Kenny
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='team-area'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-12'>
                  <div className='team-info-bg top-title'>
                    <h1 className='bio'>actor</h1>
                    <div className='actor-image'>
                      <img src='assets/img/actors/20.png' alt='' />
                    </div>
                    <div className='character-button center'>
                      <a href='' className='character-link'>
                        Billy West
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='team-area'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-12'>
                  <div className='team-info-bg top-title'>
                    <h1 className='bio'>actor</h1>
                    <div className='actor-image'>
                      <img src='assets/img/actors/21.png' alt='' />
                    </div>
                    <div className='character-button center'>
                      <a href='' className='character-link'>
                        Mason Heidger
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='team-area'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-12'>
                  <div className='team-info-bg top-title'>
                    <h1 className='bio'>actor</h1>
                    <div className='actor-image'>
                      <img src='assets/img/actors/22.png' alt='' />
                    </div>
                    <div className='character-button center'>
                      <a href='' className='character-link'>
                        Croix Provence
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='team-area'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-12'>
                  <div className='team-info-bg top-title'>
                    <h1 className='bio'>actor</h1>
                    <div className='actor-image'>
                      <img src='assets/img/actors/23.png' alt='' />
                    </div>
                    <div className='character-button center'>
                      <a href='' className='character-link'>
                        Phil Devone
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='team-area'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-12'>
                  <div className='team-info-bg top-title'>
                    <h1 className='bio'>actor</h1>
                    <div className='actor-image'>
                      <img src='assets/img/actors/24.png' alt='' />
                    </div>
                    <div className='character-button center'>
                      <a href='' className='character-link'>
                        James Kenneth Graham
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='team-area'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-12'>
                  <div className='team-info-bg top-title'>
                    <h1 className='bio'>actor</h1>
                    <div className='actor-image'>
                      <img src='assets/img/actors/25.png' alt='' />
                    </div>
                    <div className='character-button center'>
                      <a href='' className='character-link'>
                        Jeff McMahon
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='team-area'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-12'>
                  <div className='team-info-bg top-title'>
                    <h1 className='bio'>actor</h1>
                    <div className='actor-image'>
                      <img src='assets/img/actors/26.png' alt='' />
                    </div>
                    <div className='character-button center'>
                      <a href='' className='character-link'>
                        Eric Vale
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='team-area'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-12'>
                  <div className='team-info-bg top-title'>
                    <h1 className='bio'>actor</h1>
                    <div className='actor-image'>
                      <img src='assets/img/actors/27.png' alt='' />
                    </div>
                    <div className='character-button center'>
                      <a href='' className='character-link'>
                        Ross Marquand
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Team;
