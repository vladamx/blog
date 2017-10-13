import React from 'react'

// Using glamor and glamorous for styling
import glamorous from 'glamorous'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.jpg'
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
            marginBottom: 20,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        <p>
          Hi, I'm Vladimir Milojevic.<br />
          This blog is all about software engineering. <br />
          It's aim is to both document my learning journey and help others.
        </p>
        <div
          css={{
            display: 'flex',
            'justify-content': 'center',
            '> div': {
              margin: 15,
            },
            '> div a': {
              fontSize: 30,
            },
          }}>
          <div>
            <a href="https://twitter.com/kylemathews">
              <i className="fa fa-twitter" />
            </a>
            <p>Find out what is latest on my mind!</p>
          </div>
          <div>
            <a href="https://twitter.com/kylemathews">
              <i className="fa fa-linkedin" />
            </a>
            <p>Find out more about me!</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Bio
