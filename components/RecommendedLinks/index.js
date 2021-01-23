import React from 'react'
import RecommendedLink from '../RecommendedLink'
import links from './links'

const RecommendedLinks = () => (
    <div>
    <h2>
    Recommended
  </h2>
  
  {links.map(({ url, title, description }) => (
    <RecommendedLink
    url={url}
    title={title}
    description={description}
  />
  ))}
  </div>
)

export default RecommendedLinks