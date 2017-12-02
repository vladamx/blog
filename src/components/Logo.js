import React, { Component } from 'react'
import Link from 'gatsby-link'

import { rhythm, scale } from '../utils/typography'

function Logo({ title }) {
  return (
    <h1 style={{ ...scale(1.5), marginBottom: rhythm(1.5), marginTop: 0 }}>
      <Link
        style={{ boxShadow: 'none', textDecoration: 'none', color: 'inherit' }}
        to={'/'}
      >
        {title}
      </Link>
    </h1>
  )
}

export default Logo