import React from 'react'
import {Link} from 'react-router'
import {prefixLink} from 'gatsby-helpers'
import Helmet from 'react-helmet'
import {config} from 'config'

class ArticlePreviews extends React.Component {
    render() {

        const posts = this.props.posts.map((post) => {

            const path = post.path
            const postPreview = post.preview

            // Cleanse and format the strings from pathname
            const escapedLink = path.substring(7, path.length - 1) // get rid of 'posts/' and trailing slash
            const splitLink = escapedLink.split('---')
            const rawDateArray = splitLink[0].split('-')
            const rawTitleArray = splitLink[1].split('_')

            const dateArray = [rawDateArray[2], rawDateArray[1], rawDateArray[0].substring(2)]
            const title = rawTitleArray.join(' ')

            const dates = dateArray.map((date) => {

              const random = Math.random().toString(36).substring(3,11)

                return (
                    <div className="numberCircle" key={dateArray.join() + random}>
                      <span>{date}</span>
                    </div>
                )
            })

            return (
                <div className="articlePreview" key={title}>
                  <div className="title">
                    <h2>{title}</h2>
                    {dates}
                  </div>
                  <p>{postPreview}</p>
                  <Link to={path}>Read more...</Link>
                </div>
            )

        })

        return (
          <div>
            {posts}
          </div>
        )
    }
}
export default class Index extends React.Component {
    render() {

        let posts = []
        this.props.route.pages.map((page) => {
            // Check if page could be a post by its starter string
            if (page.path.substring(0, 7) == '/posts/') {
                console.log(page.path)
                posts.push({path:page.path,preview:page.data.preview})
            }
        })
        console.log(posts)

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
                <ArticlePreviews posts={posts}/>
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
            </div>
        )
    }
}
