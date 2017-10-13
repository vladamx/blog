import React, { Component } from 'react'
import Link from 'gatsby-link'

import { rhythm, scale } from '../utils/typography'

class Navigation extends Component {
  render() {
    const { location, title } = this.props.data

    let header
    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }
    if (location.pathname === rootPath) {
      header = (
        <div
          css={{
            display: 'flex',
            justifyContent: 'space-between',
          }}>
          <h1
            style={{
              ...scale(1.5),
              marginBottom: rhythm(1.5),
              marginTop: 0,
            }}>
            <Link
              style={{
                boxShadow: 'none',
                textDecoration: 'none',
                color: 'inherit',
              }}
              to={'/'}>
              {title}
            </Link>
          </h1>
          <Link
            to="/articles"
            css={{
              paddingTop: 17,
            }}>
            All Articles
          </Link>
        </div>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: 'Montserrat, sans-serif',
            marginTop: 0,
            marginBottom: rhythm(1),
          }}>
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
              fontSize: 21,
            }}
            to={'/'}>
            <i className="fa fa-arrow-left" />
          </Link>
        </h3>
      )
    }

    return (
      <div>
      { header }
      </div>)
  }
}

export default Navigation
