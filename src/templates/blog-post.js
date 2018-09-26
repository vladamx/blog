import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import get from 'lodash/get'

import Bio from '../components/Bio'

import { rhythm, scale } from '../utils/typography'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <div
        style={{
          minHeight: '78vh',
        }}
      >
        <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
        <h1>{post.frontmatter.title}</h1>
        <p
          style={{
            ...scale(-1 / 5),
            display: 'block',
            marginBottom: rhythm(1),
            marginTop: rhythm(-1),
          }}
        >
          {post.frontmatter.date}
        </p>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <div css={styles.chatCta}>If you like what you read here come hang out with me on <a href="https://discord.gg/hPTaYm9">Discord</a></div>
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
      </div>
    )
  }
}

const styles = {
  chatCta: {
    padding: '0px 0px 15px 0px',
    fontWeight: 900,
    "> small": {
      fontWeigt: 100,
      color: '#eee'
    }
  },
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      timeToRead
      tableOfContents
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
