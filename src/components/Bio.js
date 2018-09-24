import React from 'react'
// Using glamor and glamorous for styling
import glamorous from 'glamorous'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile.jpg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'center',
        }}>
        <img
          src={profilePic}
          alt={`Photo of Vladimir`}
          style={{
            alignSelf: 'center',
            marginRight: rhythm(1 / 4),
            borderRadius: '50%',
            marginBottom: 20,
            width: rhythm(6),
            height: rhythm(5),
          }}
        />
        <div
          css={{
            display: 'flex',
            justifyContent: 'center',
            '> div': {
              margin: 15,
            },
            '> div a': {
              fontSize: 30,
            },
          }}>
          <div>
            <a href="https://www.linkedin.com/in/vladamx/"  target="_blank">
              <i className="fa fa-linkedin" />
            </a>
          </div>
          <div>
            <a data-tip="You need to have email client installed." href="mailto:vladamx.dev@gmail.com" target="_top">
              <i className="fa fa-envelope" />
            </a>
          </div>
          <div>
            <a href="https://twitter.com/vladamxx" target="_blank">
              <i className="fa fa-twitter" />
            </a>
          </div>
        </div>
        <p>
          Hi, I'm Vladimir Milojevic.<br />
          This blog is all about software engineering. <br />
          It's aim is to both document my learning journey and help others.
        </p>
      </div>
    )
  }
}

export default Bio
