import React from 'react'
import {Link} from 'react-router'
import {prefixLink} from 'gatsby-helpers'
import Helmet from 'react-helmet'
import {config} from 'config'

export default class Index extends React.Component {
    render() {
        return (
            <div>
              <Helmet title={config.siteTitle} meta={[
                {
                        "name": "description",
                        "content": "Sample"
                }, {
                        "name": "keywords",
                        "content": "sample, something"
                }
              ]}/>
              <h1 style={{
                    padding: '10px',
                    color: 'white',
                    backgroundColor: 'black',
                    textDecoration: 'underline',
                    display: 'inline-block'
              }}>
                Rory's Blog
              </h1>
              <div className="articlePreview">
                <div className="title">
                  <h2>Building FormCharm</h2>
                  <div className="numberCircle">
                    <span>10</span>
                  </div>
                  <div className="numberCircle">
                    <span>03</span>
                  </div>
                  <div className="numberCircle">
                    <span>17</span>
                  </div>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <Link>Read more...</Link>
              </div>
              <div className="articlePreview">
                <div className="title">
                  <h2>My First Blog Post</h2>
                  <div className="numberCircle">
                    <span>10</span>
                  </div>
                  <div className="numberCircle">
                    <span>02</span>
                  </div>
                  <div className="numberCircle">
                    <span>16</span>
                  </div>
                </div>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <Link>Read more...</Link>
              </div>
            </div>
        )
    }
}
