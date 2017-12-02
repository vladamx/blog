import React, { Component } from 'react'
import Link from 'gatsby-link'

import { rhythm, scale } from '../utils/typography'
import Logo from './Logo'

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
          <Link to="/archives" css={{ paddingTop: 17 }}>
            Archives
          </Link>
        </div>
    } else {
      header = <Logo title={title} />
      {/* <h3 style={{ fontFamily: 'Montserrat, sans-serif', marginTop: 0, marginBottom: rhythm(1) }}>
          <Link style={{ boxShadow: 'none', textDecoration: 'none', color: 'inherit', fontSize: 21 }} to={'/'}>
            <i className="fa fa-arrow-left" />
          </Link>
        </h3> */}
    }

    return (
      <div>
      { header }
      </div>)
  }
}

export default Navigation
