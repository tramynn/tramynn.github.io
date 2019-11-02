import React from 'react'

class Footer extends React.Component {
  render() {
    return (
      <div id="footer">
        <div className="inner">
          <ul className="icons">
            <li>
              <a
                href="https://github.com/tramynn"
                target="_blank"
                className="icon fa-github"
              >
                <span className="label">Github</span>
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/tramynn"
                target="_blank"
                className="icon fa-linkedin"
              >
                <span className="label">Linkedin</span>
              </a>
            </li>
            <li>
              <a href="#" target="_blank" className="icon fa-file">
                <span className="label">Resume</span>
              </a>
            </li>
            <li>
              <a
                href="mailto:tramynn.dev@gmail.com"
                className="icon fa-envelope-o"
              >
                <span className="label">Email</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Footer
