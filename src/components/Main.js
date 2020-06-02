import PropTypes from 'prop-types'
import React from 'react'
import heydj from '../images/heydj.jpg'
import fitvid from '../images/fitvid.jpg'
import ppenicka from '../images/ppenicka.jpg'

class Main extends React.Component {
  render () {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    function submit (event) {
      event.preventDefault();
      console.log('eveeeent', event);
    }

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
            }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Intro</h2>
          <span className="image main">
            <img src={ppenicka} alt="" />
          </span>
          <p>
            Hello and welcome to my portfolio website! My name is Petr and I'm a software engineer specialized in full-stack JavaScript technologies. This page aims at presenting projects that I have worked on and my professional profile. I will keep continuously updating it with new cool stuff that I work on.
          </p>
          <p>
            I am currently looking for a full-time position in the Barcelona area. If you are hiring and feel like I might be a good fit, don't hesitate to contact me!
          </p>

          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
            }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Hey DJ</h2>
          <p>
            Hey DJ is a web app that performs tracklist recognition in DJ sets using the ACRCloud music recognition API. You give it a recorded DJ set, it returns a list of tracks that the DJ played. I have built the whole application from the ground up and subsequently received a funding offer to get it into production, which is currently planned for Q3 2020.<br />
          </p>
          <p>
            GitHub: <a href="https://github.com/ppenicka/hey-dj">https://github.com/ppenicka/hey-dj</a><br />
            Tech stack: React, Node.js, Express, MongoDB, Mongoose, FFmpeg, ACRCloud API<br />
          </p>
          <span className="image main">
            <img src={heydj} alt="" />
          </span>
          <h2 className="major">FitVid Tracker</h2>
          <p>
            Fitvid Tracker is a web app that helps users organize personal workout plans based on YouTube videos. I have worked on this project as a member of a 4-person team. My contribution was implementing an API client to connect front-end to the back-end, the scheduling system, Google authentication, Redux state management, and a significant portion of the front-end logic.<br />
          </p>
          <p>
            GitHub: <a href="https://github.com/ppenicka/fitvid-tracker">https://github.com/ppenicka/fitvid-tracker</a><br />
            Tech stack: React, Redux, Node.js, Koa, MongoDB, Mongoose, Material UI<br />
          </p>
          <span className="image main">
            <img src={fitvid} alt="" />
          </span>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
            }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About Me</h2>
          <p>
            I am a full-stack software developer focused on JavaScript technologies, most notably React, Redux, Angular, Node.js, Express and Koa. Some of my other specializations include Linux administration, Bash scripting, MongoDB, PostgreSQL and Redis. I am a seasoned remote worker experienced in managing geographically distributed teams.
          </p>
          <p>
            Before switching to the software development path, I gained a proven track record of 12+ years in the software industry as a project manager and technical writer. Then I realized that instead of documenting software or coordinating teams that produce it, I'll get the most satisfaction out of writing the software myself. Since that moment I've done a lot of learning, developed two deployment-ready projects, and became competent to contribute with my coding skills in a full-time developer position.
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
            }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="https://formspree.io/mdowgend">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
                <input type="hidden" name="_next" value="//ppenicka.me" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://github.com/ppenicka"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
              </li>
              <li>
              <a
                href="https://www.linkedin.com/in/petr-penicka/"
                className="icon fa-linkedin"
              >
                <span className="label">LinkedIn</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
