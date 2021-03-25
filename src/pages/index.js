import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
// import Lightbox from 'react-images'
import Gallery from '../components/Gallery'

// phazetune images
import pfull1 from '../assets/images/fulls/phazetune-guest-landing.png'
import pfull2 from '../assets/images/fulls/phazetune-user-landing.png'
import pfull3 from '../assets/images/fulls/phazetune-add-track.png'
import pfull4 from '../assets/images/fulls/phazetune-user-profile.png'
import pfull5 from '../assets/images/fulls/phazetune-chatrooms.png'
import pfull6 from '../assets/images/fulls/phazetune-genre.png'

// skinrou images
import sfull1 from '../assets/images/fulls/skinrou-guest-landing.png'
import sfull2 from '../assets/images/fulls/skinrou-user-login.png'
import sfull3 from '../assets/images/fulls/skinrou-create-routine.png'
import sfull4 from '../assets/images/fulls/skinrou-user-landing.png'
import sfull5 from '../assets/images/fulls/skinrou-age-20.png'
import sfull6 from '../assets/images/fulls/skinrou-user-settings.png'

// resolv images
import rfull1 from '../assets/images/fulls/resolv-guest-landing.png'
import rfull2 from '../assets/images/fulls/resolv-quiz-header.png'
import rfull3 from '../assets/images/fulls/resolv-quiz.png'
import rfull4 from '../assets/images/fulls/resolv-quiz-results.png'
import rfull5 from '../assets/images/fulls/resolv-conflict-types.png'
import rfull6 from '../assets/images/fulls/resolv-conflict-style-2.png'

// icons
import html5 from '../assets/images/icons/HTML5.png'
import css3 from '../assets/images/icons/CSS3.png'
import js from '../assets/images/icons/JavaScript.png'
import react from '../assets/images/icons/React.png'
import postgresql from '../assets/images/icons/PostgreSQL.png'
import redux from '../assets/images/icons/redux.png'
import sass from '../assets/images/icons/Sass.png'
import material from '../assets/images/icons/Material-ui.png'
import socket from '../assets/images/icons/socket-io.png'
import vsc from '../assets/images/icons/Vsc.png'
import jest from '../assets/images/icons/Jest.png'
import bootstrap from '../assets/images/icons/bootstrap.png'
import git from '../assets/images/icons/Git.png'

const SKINROU_IMAGES = [
  {
    id: '1',
    source: sfull1,
    thumbnail: sfull1,
    caption: 'Guest Landing',
    description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
  },
  {
    id: '2',
    source: sfull3,
    thumbnail: sfull3,
    caption: 'Create Routine',
    description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
  },
  // {
  //   id: '3',
  //   source: sfull3,
  //   thumbnail: sfull3,
  //   caption: 'Create Routine',
  //   description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
  // },
  // {
  //   id: '4',
  //   source: sfull4,
  //   thumbnail: sfull4,
  //   caption: 'User Landing',
  //   description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
  // },
  // {
  //   id: '5',
  //   source: sfull5,
  //   thumbnail: sfull5,
  //   caption: 'Skincare Routines for Age 20s',
  //   description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
  // },
  // {
  //   id: '6',
  //   source: sfull6,
  //   thumbnail: sfull6,
  //   caption: 'User Settings',
  //   description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
  // },
]
const PHAZETUNE_IMAGES = [
  {
    id: '1',
    source: pfull1,
    thumbnail: pfull1,
    caption: 'Guest Landing',
    description: '',
  },
  {
    id: '2',
    source: pfull2,
    thumbnail: pfull2,
    caption: 'Explore Page',
    description: 'Users can view all tracks and search for a specific genre.',
  },
  // {
  //   id: '3',
  //   source: pfull3,
  //   thumbnail: pfull3,
  //   caption: 'Quiz',
  //   description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
  // },
  // {
  //   id: '4',
  //   source: pfull4,
  //   thumbnail: pfull4,
  //   caption: 'Quiz Results',
  //   description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
  // },
  // {
  //   id: '5',
  //   source: pfull5,
  //   thumbnail: pfull5,
  //   caption: 'Conflict',
  //   description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
  // },
  // {
  //   id: '6',
  //   source: pfull6,
  //   thumbnail: pfull6,
  //   caption: 'Conflict',
  //   description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
  // },
]
const RESOLV_IMAGES = [
  {
    id: '1',
    source: rfull3,
    thumbnail: rfull3,
    caption: 'Quiz',
    description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
  },
  {
    id: '2',
    source: rfull5,
    thumbnail: rfull5,
    caption: 'Conflict Styles',
    description: 'One of 5 conflict styles.',
  },
  // {
  //   id: '3',
  //   source: rfull3,
  //   thumbnail: rfull3,
  //   caption: 'Create Routine',
  //   description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
  // },
  // {
  //   id: '4',
  //   source: rfull4,
  //   thumbnail: rfull4,
  //   caption: 'User Landing',
  //   description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
  // },
  // {
  //   id: '5',
  //   source: rfull5,
  //   thumbnail: rfull5,
  //   caption: 'Skincare Routines for Age 20s',
  //   description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
  // },
  // {
  //   id: '6',
  //   source: rfull6,
  //   thumbnail: rfull6,
  //   caption: 'User Settings',
  //   description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
  // },
]

class HomeIndex extends React.Component {
  render() {
    const siteTitle = 'Tramy Nguyen'
    const siteDescription = 'A collection of my skills and projects.'

    return (
      <Layout>
        <Helmet>
          <title>{siteTitle}</title>
          <meta name="description" content={siteDescription} />
        </Helmet>

        <div id="main">
          <section id="one">
            <header className="major">
              <h2>About Me</h2>
            </header>
            <p>
              A curious and future-forward developer dedicated to solving
              problems, creating beautiful user interfaces and experiences, and
              writing dynamic clean code. I am a graduate of California State
              University, Long Beach and a recent graduate from DevMountain, a
              full-stack web development coding bootcamp. I am currently a
              Mentor at DevMountain seeking to further my skills and hone my
              technical abilities in order to grow as a developer.
              {/* I am currently seeking
              opportunities to further my skills and hone my technical abilities
              in order to grow as a developer. */}
            </p>
          </section>

          <section id="two">
            <header className="major">
              <h2>Projects</h2>
            </header>
            <h2>SKINROU</h2>A full stack skincare app where users can create,
            share, and discuss skincare routines among other skincare
            enthusiasts.
            <br /> -
            <p>
              <strong>The why:</strong> I felt there was no place to
              collectively view skincare routines so I chose to build an app to
              solve that problem.
              <br />
              <strong>Design Approach: </strong>I chose to go for a clean,
              fresh, minimalistic, and neutral look. By incorporating the colors
              of blue and green, the users will be able to associate the feeling
              of serenity when using my app.
              <br />
              <strong>Technologies:</strong>
              <ol>
                <li>
                  Front-end: React, Redux, Material-UI, SASS/SCSS, Axios,
                  React-router, and Cloudinary
                </li>
                <li>Back-end: Node.JS, Express, Bcrypt.JS, Massive </li>
                <li>Database: PostgreSQL</li>
                <li>Other: Socket.IO(Web Sockets)</li>
              </ol>
              <strong>Features:</strong>
              <ol>
                <li>
                  Users are able to create, view, edit, and delete their
                  skincare routines.
                </li>
                <li>
                  Users are able to chat with other users in a general chatroom.
                </li>
                <li>
                  Users are able to view skincare routines by skincare type
                  (normal, dry, sensitive, combination, and normal) and age
                  (15+, 20s, 30s, 40s, and 50+).
                </li>
                <li>Users are able to like/unlike a skincare routine.</li>
                <li>
                  Users are able to upload a profile picture and use it as their
                  avatar.
                </li>
                <li>
                  Users are able to view all skincare routines from newest to
                  oldest.
                </li>
              </ol>
              <strong>Challenges:</strong>
              <ol>
                <li>
                  Using React hooks to implement a chat feature while
                  understanding real-time, bidirectional and event-based
                  communication that Socket.IO uses.
                </li>
                <li>
                  Learning SASS/SCSS and Material-UI introduced me to new ways
                  of approaching design and structuring style files.
                </li>
                <li>
                  Making the app responsive meant I had to use media queries and
                  break points in order to make the app more accessible to
                  users.
                </li>
              </ol>
              <strong>Future Implementations:</strong>
              <ol>
                <li>Users are able to comment on skincare routines.</li>
                <li>Users are able to edit their personal information.</li>
                <li>Users are able to view popular skincare routines.</li>
              </ol>
            </p>
            <Gallery
              images={SKINROU_IMAGES.map(
                ({ id, source, thumbnail, caption, description }) => ({
                  source,
                  thumbnail,
                  caption,
                  // description,
                })
              )}
            />
            <ul className="actions">
              <a
                href="https://github.com/tramynn/skinrou"
                target="_blank"
                rel="noopener noreferrer"
                className="button"
              >
                Github Repo
              </a>
              <a
                href="https://skinrou.pro"
                target="_blank"
                rel="noopener noreferrer"
                className="button"
              >
                Live Website
              </a>
            </ul>
            {/* Group project */}
            <h2>PHAZETUNE</h2>
            A full stack music app where users can share music, connect with
            artists/producers, and develop a sense of community.
            <br /> -
            <p>
              <strong>The why: </strong>This was a group project and
              collectively we decided to build a social music app.
              <br />
              <strong>Design Approach: </strong>
              As a group, we decided to go with a dark mode theme and brand
              color of vibrant pink. We believed the color choices offered a
              good contrast and induces feeling of hope and inspiration when the
              user interacts with our app.
              <br />
              <strong>Technologies:</strong>
              <ol>
                <li>
                  Front-end: React, Redux, Material-UI, SASS/SCSS, Axios,
                  React-router, Cloudinary, and Wavesurfer.JS
                </li>
                <li>Back-end: Node.JS, Express, Bcrypt.JS, and Massive </li>
                <li>Database: PostgreSQL</li>
                <li>Other: Socket.IO(Web Sockets), Firebase</li>
              </ol>
              <strong>Features:</strong>
              <ol>
                <li>
                  Users are able to create, view, edit, and delete their music
                  track.
                </li>
                <li>
                  Users are able to chat with other users in a general, artists,
                  and producers chatroom.
                </li>
                <li>
                  Users are able to view all music tracks on the explore page
                  and by genre.
                </li>
                <li>
                  Users are able to upload a profile picture and edit their
                  personal information.
                </li>
              </ol>
              <strong>Challenges:</strong>
              <ol>
                <li>
                  Working in a group setting and learning how to adapt to my
                  team members' code style.
                </li>
                <li>Making pull requests and handling merge conflicts.</li>
              </ol>
              <strong>Future Implementations:</strong>
              <ol>
                <li>Users are able to favorite music tracks.</li>
                <li>Users are able to follow other users.</li>
                <li>
                  Users are able to view music tracks of who they're following.
                </li>
              </ol>
            </p>
            <Gallery
              images={PHAZETUNE_IMAGES.map(
                ({ id, source, thumbnail, caption, description }) => ({
                  source,
                  thumbnail,
                  caption,
                  // description,
                })
              )}
            />
            <ul className="actions">
              <a
                href="https://github.com/dm-group-phazetune/phazetune"
                target="_blank"
                rel="noopener noreferrer"
                className="button"
              >
                Github Repo
              </a>
              <a
                href="https://www.phazetune.com"
                target="_blank"
                rel="noopener noreferrer"
                className="button"
              >
                Live Website
              </a>
            </ul>
            {/* Third project */}
            <h2>RESOLV</h2>
            A 3/4 stack (No Database) educational app where users take an
            assessment to discover their conflict management style, learn about
            the five styles, and improve their communication skills.
            <br /> -
            <p>
              <strong>The why:</strong> With a background in mediation, I
              understand the importance of having effective communication skills
              and knowledge in dealing with conflict. Therefore, I chose to
              build a short quiz based on Reginald Adkins' (PhD) conflict
              management styles assessment.
              <br />
              <strong>Design Approach: </strong>I chose to go for a calm,
              collected, and harmonious look. By incorporating the colors of
              purple and white, the users will be able to associate the feeling
              of calmness when using my app.
              <br />
              <strong>Technologies:</strong>
              <ol>
                <li>Front-end: React and Axios</li>
                <li>Back-end: Node.JS and Express </li>
              </ol>
              <strong>Features:</strong>
              <ol>
                <li>
                  Users are able to take a 15 questionnaire and discover their
                  preferred conflict management style.
                </li>
                <li>
                  Users are able to view the five conflict management styles.
                </li>
              </ol>
              <strong>Challenges:</strong>
              <ol>
                <li>Implementing full CRUD/RESTful APIs without a database.</li>
                <li>Understanding the use of state and props in React.</li>
              </ol>
              <strong>Future Implementations:</strong>
              <ol>
                <li>Making the app full-stack with user authentication.</li>
                <li>
                  Users are able to store their quiz information in their
                  profile.
                </li>
              </ol>
            </p>
            <Gallery
              images={RESOLV_IMAGES.map(
                ({ id, source, thumbnail, caption, description }) => ({
                  source,
                  thumbnail,
                  caption,
                  // description,
                })
              )}
            />
            <ul className="actions">
              <a
                href="https://github.com/tramynn/resolv"
                target="_blank"
                rel="noopener noreferrer"
                className="button"
              >
                Github Repo
              </a>
            </ul>
          </section>

          <section id="two">
            <header className="major">
              <h2>Skills</h2>
            </header>
            <div className="icon">
              <img src={html5} alt="HTML5" width={100} />
            </div>
            <div className="icon">
              <img src={css3} alt="CSS3" width={100} />
            </div>
            <div className="icon">
              <img src={react} alt="React" width={100} />
              <p>React</p>
            </div>
            <div className="icon">
              <img src={js} alt="JavaScript" width={100} />
              <p>JavaScript</p>
            </div>
            <div className="icon">
              <img src={redux} alt="Redux" width={110} />
              <p>Redux</p>
            </div>
            <div className="icon">
              <img src={postgresql} alt="PostgreSQL" width={100} />
              <p>PostgreSQL</p>
            </div>
            <div className="icon">
              <img src={sass} alt="Sass/Scss" width={120} />
              <p>SASS/SCSS</p>
            </div>
            <div className="icon">
              <img src={material} alt="Material-UI" width={100} />
              <p>Material-UI</p>
            </div>
            <div className="icon">
              <img src={bootstrap} alt="Bootstrap" width={100} />
              <p>Bootstrap</p>
            </div>
            <div className="icon">
              <img src={socket} alt="Socket.IO" width={100} />
              <p>Socket.IO</p>
            </div>
            <div className="icon">
              <img src={vsc} alt="Visual Studio Code" width={100} />
              <p>Visual Studio Code</p>
            </div>
            <div className="icon">
              <img src={git} alt="Git" width={100} />
              <p>Git</p>
            </div>
            <div className="icon">
              <img src={jest} alt="Jest" width={90} />
              <p>Jest</p>
            </div>
          </section>

          {/* <section id="two">
            <h2>Resume</h2>

            <p>Here is my resume:</p>
          </section> */}

          <section id="three">
            <header className="major">
              <h2>Let's Connect!</h2>
            </header>
            <div className="row">
              {/* <div className="8u 12u$(small)">
                <form method="post" action="#">
                  <div className="row uniform 50%">
                    <div className="6u 12u$(xsmall)">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name"
                      />
                    </div>
                    <div className="6u 12u$(xsmall)">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                      />
                    </div>
                    <div className="12u">
                      <textarea
                        name="message"
                        id="message"
                        placeholder="Message"
                        rows="4"
                      ></textarea>
                    </div>
                  </div>
                </form>
                <ul className="actions">
                  <li>
                    <input type="submit" value="Send Message" />
                  </li>
                </ul>
              </div> */}
              <div className="4u 12u$(small)">
                <ul className="labeled-icons">
                  <li>
                    <h3 className="icon fa-map-pin">
                      <span className="label">Address</span>
                    </h3>
                    Dallas/Fort Worth, TX
                    <br />
                  </li>
                  <li>
                    <h3 className="icon fa-mobile">
                      <span className="label">Phone</span>
                    </h3>
                    714-916-6020
                  </li>
                  <li>
                    <h3 className="icon fa-envelope-o">
                      <span className="label">Email</span>
                    </h3>
                    <a href="#">tramynn.dev@gmail.com</a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <hr />
          <div>
            Design: <a href="http://html5up.net">HTML5 UP</a>
          </div>
        </div>
      </Layout>
    )
  }
}

export default HomeIndex
