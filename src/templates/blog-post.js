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
          {post.frontmatter.date} <br/>
          This post will take {post.timeToRead} mins out of your life if you are average reader
        </p>
        <p>
          <small>
            Terms of use: We live in a busy world. Our brains need to filter a lot more information than earlier and i understand that maybe you don't have the time to read the whole post even though it is best experienced in its entirety. With that being said feel free to skim it. I try to put helpful jumps to the most important parts of the post and to generally give my posts better structure. I am still improving on that - it's a never ending battle.
          </small>
        </p>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <div css={styles.chatCta}>Wow, you read the whole post. Thank you! If you like what you read, come hang out on <a href="https://discord.gg/hPTaYm9">Discord</a></div>
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
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
