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
      <div style={styles.container}>
        <img src={profilePic} alt={`Photo of Vladimir`} style={styles.logo} />
        <div
          css={styles.content}
        >
          <div>
            <a href="https://www.linkedin.com/in/vladamx/" target="_blank">
              <i className="fa fa-linkedin" />
            </a>
          </div>
          <div>
            <a href="https://twitter.com/vladamxx" target="_blank">
              <i className="fa fa-twitter" />
            </a>
          </div>
          <div>
            <a
              data-tip="You need to have email client installed."
              href="mailto:vladamx.dev@gmail.com"
              target="_top"
            >
              <i className="fa fa-envelope" />
            </a>
          </div>
        </div>
        <p>
          Hi, I'm Vladimir Milojevic.<br />
          Curious, ambitious, lifelong student of software engineering.<br />
          Content on this blog focuses on <strong>implicative knowledge</strong>, rather than <strong>factual</strong>.<br />
          For example, saying that JavaScript is the most popular programming language in the world means nothing. You miss to say why and what for.
          <br />
          <strong css={styles.chatCta}>If you like what you read here, or even if you don't like it, tell me how can i improve my writing. Either way, come hang out with me on </strong> <a href="https://discord.gg/hPTaYm9" target="_blank">Discord</a>

        </p>
      </div>
    )
  }
}
const styles = {
  chatCta: {
    fontWeight: 900,
  },
  content: {
    display: 'flex',
    justifyContent: 'center',
    '> div': {
      margin: 15,
    },
    '> div a': {
      fontSize: 30,
    },
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
  },
  logo: {
    alignSelf: 'center',
    marginRight: rhythm(1 / 4),
    borderRadius: '50%',
    marginBottom: 20,
    width: rhythm(6),
    height: rhythm(5),
  },
}

export default Bio
