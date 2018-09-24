import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import ReactTooltip from 'react-tooltip'

import Bio from '../components/Bio'
import { rhythm } from '../utils/typography'
import FeaturedPosts from '../components/FeaturedPosts';
class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <div
        css={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '78vh',
        }}
      >
        <Helmet title={siteTitle} />
        <Bio />
        <FeaturedPosts posts={posts} />
        <ReactTooltip effect="solid"/>
      </div>
    )
  }
}

BlogIndex.propTypes = {
  route: React.PropTypes.object,
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          frontmatter {
            path
            date(formatString: "DD MMMM, YYYY")
          }
          frontmatter {
            title
            featured
            cover
          }
        }
      }
    }
  }
`
