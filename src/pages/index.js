import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import Bio from '../components/Bio'
import { rhythm } from '../utils/typography'

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
        <div>
          <h2 css={{ alignSelf: 'center', fontSize: 20, marginBottom: '1.2rem' }}>
            Featured Articles
          </h2>
          <div
            css={{
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            {posts.filter(post => post.node.frontmatter.featured).map(post => {
              if (post.node.path !== '/404/') {
                const title = get(post, 'node.frontmatter.title') || post.node.path
                return (
                  <div
                    key={post.node.frontmatter.path}
                    style={{ marginRight: rhythm(1 / 4) }}
                  >
                    <img src={post.node.frontmatter.cover} />
                    <h2 style={{ marginBottom: rhythm(1 / 4) }}>
                      <Link style={{ boxShadow: 'none' }} to={post.node.frontmatter.path}>
                        {post.node.frontmatter.title}
                      </Link>
                    </h2>
                    <small>{post.node.frontmatter.date}</small>
                    <p dangerouslySetInnerHTML={{ __html: post.node.excerpt }} />
                  </div>
                )
              }
            })}
          </div>
        </div>
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
          }
        }
      }
    }
  }
`
