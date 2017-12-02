import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import { rhythm } from '../utils/typography'

class Archives extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return <div css={{ display: 'flex', flexDirection: 'column',  minHeight: '78vh' }}>
        <Helmet title={siteTitle} />
        <h1 css={{ alignSelf: 'left', fontSize: 25, marginBottom: '1.8rem' }}>
          Archives
        </h1>
        <div>
          {posts.map(post => {
            if (post.node.path !== '/404/') {
              const title = get(post, 'node.frontmatter.title') || post.node.path
              return <div key={post.node.frontmatter.path}>
                  <h2 style={{ marginBottom: rhythm(1 / 4) }}>
                    <Link style={{ boxShadow: 'none' }} to={post.node.frontmatter.path}>
                      {post.node.frontmatter.title}
                    </Link>
                  </h2>
                  <small>{post.node.frontmatter.date}</small>
                  <p dangerouslySetInnerHTML={{ __html: post.node.excerpt }} />
                </div>
            }
          })}
        </div>
      </div>
  }
}

Archives.propTypes = {
  route: React.PropTypes.object,
}

export default Archives

export const pageQuery = graphql`
  query ArchivesQuery {
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
          }
        }
      }
    }
  }
`
