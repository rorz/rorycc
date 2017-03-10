import React from 'react'
import { Container } from 'react-responsive-grid'
import { Link } from 'react-router'
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
      <div>
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
              <Link to={prefixLink('/')} activeClassName="active" className="navItem">Blog</Link>
              <Link to={prefixLink('/code/')} className="navItem">Code</Link>
              <Link to={prefixLink('/music/')} className="navItem">Music</Link>
              <Link to={prefixLink('/about/')} className="navItem">About</Link>
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
