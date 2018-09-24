import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import { rhythm } from '../utils/typography'
import PostPreview from '../components/PostPreview'

class Archives extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <div
        css={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '78vh',
          width: '100%',
        }}
      >
        <Helmet title={siteTitle} />
        <h1 css={{ alignSelf: 'left', fontSize: 25, marginBottom: '1.8rem' }}>
          Archives
        </h1>
        <div css={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', '@media(max-width: 420px)': { justifyContent: 'center' } }}>
          {posts.map(post => {
            if (post.node.path !== '/404/') {
              return (
                <PostPreview
                  key={post.node.frontmatter.path}
                  post={post}
                  style={{ width: 200 }}
                />
              )
            }
          })}
        </div>
      </div>
    )
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
            cover
          }
        }
      }
    }
  }
`
