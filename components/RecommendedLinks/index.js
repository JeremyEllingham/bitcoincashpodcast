import React from 'react'
import RecommendedLink from '../RecommendedLink'
import links from './links'

const RecommendedLinks = () => (
  <div style={{ textAlign: 'right' }}>
    <h2>
      Recommended
    </h2>
    
    {links.map(({ url, title, description }) => (
      <RecommendedLink
      key={`${url}`}
      url={url}
      title={title}
      description={description}
    />
    ))}
  </div>
)

export default RecommendedLinks