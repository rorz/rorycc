import React from 'react'
import { Container } from 'react-responsive-grid'
import { IndexLink, Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Headroom from 'react-headroom'
import '../css/markdown-styles'
import '../css/pagestyles.scss'
import Footer from '../components/footer'

import { rhythm } from '../utils/typography'

module.exports = React.createClass({
  propTypes () {
    return {
      children: React.PropTypes.any,
    }
  },
  render () {
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh'
      }}>
        <Headroom
          wrapperStyle={{
            marginBottom: rhythm(1),
          }}
          style={{
            background: '#222',
          }}
        >
          <Container
            style={{
              maxWidth: 960,
              paddingTop: 0,
              padding: `${rhythm(1)} ${rhythm(3/4)}`,
            }}
          >
            <nav className="navbar">
              <Link
                to={prefixLink('/')}
                className="retro-title"
              >
                <div className="numberCircle yellow"><span>RO</span></div><div className="numberCircle yellow"><span>RY</span></div><div className="numberCircle blue"><span>CC</span></div>
              </Link>
              <IndexLink to={prefixLink('/')} activeClassName="active" className="navItem">Blog</IndexLink>
              <Link to={prefixLink('/code/')} activeClassName="active" className="navItem">Code</Link>
              <Link to={prefixLink('/music/')} activeClassName="active" className="navItem">Music</Link>
              <Link to={prefixLink('/about/')} activeClassName="active" className="navItem">About</Link>
            </nav>
          </Container>
        </Headroom>
        <Container
          style={{
            maxWidth: 960,
            padding: `${rhythm(1)} ${rhythm(3/4)}`,
            paddingTop: 0,
          }}
        >
          {this.props.children}
        </Container>
        <Footer />
      </div>
    )
  },
})
