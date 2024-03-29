import React from 'react'

const RecommendedLink = ({ url, title, description }) => (
  <p>
    <b>
      <u>
        <i>
          <a href={url} target="_blank">{title}</a>
        </i>
      </u>
    </b>
    <br />
    {description}
  </p>
)

export default RecommendedLink