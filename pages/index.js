import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import { config } from 'config'

export default class Index extends React.Component {
  render () {
    return (
      <div>
        <Helmet
          title={config.siteTitle}
          meta={[
            {"name": "description", "content": "Sample"},
            {"name": "keywords", "content": "sample, something"},
          ]}
        />
        <h1 style={{
          padding: '10px',
          color: 'white',
          backgroundColor: 'black',
          textDecoration: 'underline',
          display: 'inline-block'
        }}>
          Rory McMeekin
        </h1>
        <p>It's a static site build in React, with the GatsbyJS framework.</p>

      </div>
    )
  }
}
