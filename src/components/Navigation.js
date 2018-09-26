import React, { Component } from 'react'
import Link from 'gatsby-link'

import { rhythm, scale } from '../utils/typography'
import Logo from './Logo'
import Discord from './discord.svg'

class Navigation extends Component {
  render() {
    const { location, title } = this.props.data

    let header
    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }
    if (location.pathname === rootPath) {
      header = <div css={{ display: 'flex', justifyContent: 'space-between' }}>
      <Logo title={title} />
      <ul css={{padding: 0, margin: 0, display: 'flex', 'listStyleType': 'none', '> li': {height: 30, 'marginTop': 13}}}>
        <li>
          <Link style={{padding: 19}} to="/archives">Posts</Link>
        </li>
      </ul>
    </div>
    } else {
      header = (
        <div css={{ display: 'flex', justifyContent: 'space-between' }}>
          <Logo title={title} />
          <ul css={{padding: 0, margin: 0, display: 'flex', 'listStyleType': 'none', '> li': {height: 30, 'marginTop': 13}}}>
          <li>
            <a style={{padding: 19}} href="https://discord.gg/hPTaYm9" target="_blank">Chat</a>
          </li>
          </ul>
        </div>
      )
      {
        /* <h3 style={{ fontFamily: 'Montserrat, sans-serif', marginTop: 0, marginBottom: rhythm(1) }}>
          <Link style={{ boxShadow: 'none', textDecoration: 'none', color: 'inherit', fontSize: 21 }} to={'/'}>
            <i className="fa fa-arrow-left" />
          </Link>
        </h3> */
      }
    }

    return <div>{header}</div>
  }
}

export default Navigation
