import React, { Component } from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import { rhythm, scale } from '../utils/typography'

function PostPreview({ post, style}) {
  const title = get(post, 'node.frontmatter.title') || post.node.path
  return (
    <div
      style={{ marginRight: rhythm(1 / 4), ...style}}
    >
        <Link style={{ 'boxShadow': 'none', 'color': 'inherit', 'textDecoration': 'none' }} to={post.node.frontmatter.path}>
          <img src={post.node.frontmatter.cover} />
          <div style={{'textAlign':'left'}}>
            <di style={{display:'flex', 'justifyContent': 'space-between'}}>
              <small>{post.node.frontmatter.date}</small>
              <small>{post.node.timeToRead} mins</small>
            </di>
            <p dangerouslySetInnerHTML={{ __html: post.node.excerpt }} />
          </div>
        </Link>
    </div>
  )
}

export default PostPreview
