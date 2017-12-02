import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import { Container } from 'react-responsive-grid'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

import '../css/main.css'
import 'font-awesome/css/font-awesome.css'

import { rhythm, scale } from '../utils/typography'

class Template extends React.Component {
  render() {
    const { children, location } = this.props
    const title = get(this.props, 'data.site.siteMetadata.title')

    return (
      <Container
        style={{
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}>
        <Navigation data={{location, title}} />
        {children()}
        <Footer />
      </Container>
    )
  }
}

Template.propTypes = {
  children: React.PropTypes.func,
  location: React.PropTypes.object,
  route: React.PropTypes.object,
}

export const Query = graphql`
  query GetTitle {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default Template
