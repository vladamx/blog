import React, { Component } from 'react'
import Link from 'gatsby-link'
import PostPreview from './PostPreview';
function FeaturedPosts({ posts }) {
  return (
     <div>
          <div css={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between'
            }}>
            <h2 id="featured" css={{ alignSelf: 'center', fontSize: 20, marginBottom: '1.2rem' }}>
              Featured Posts
            </h2>
            <Link to="/archives" css={{ paddingRight: 7 }}>
              See All
            </Link>
          </div>
          <div
            css={{
              display: 'flex',
              justifyContent: 'flex-start',
              flexDirection: 'row',
              'flexWrap': 'wrap',
              '@media(max-width: 420px)': { justifyContent: 'center' }
            }}
          >
            {posts.filter(post => post.node.frontmatter.featured).map((post, index) => {

              if (post.node.path !== '/404/') {
               return (<PostPreview
                  key={post.node.frontmatter.path}
                  post={post}
                  style={{'width': 200}}
                />)
              }
            })}
          </div>
        </div>
  )
}

export default FeaturedPosts
