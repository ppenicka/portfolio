import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import '../assets/scss/main.scss'

const Layout = ({ children, location }) => {

  let content;

  if (location && location.pathname === '/') {
    content = (
      <div>
        {children}
      </div>
    )
  } else {
    content = (
      <div id="wrapper" className="page">
        <div>
          {children}
        </div>
      </div>
    )
  }

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <>
          <Helmet
            title={"Petr Penicka - Full-Stack Software Developer Focused on JavaScript Technologies"}
            meta={[
              { name: 'description', content: 'Portfolio website of Petr Penicka, full-stack software developer focused on JavaScript technologies, based in Barcelona, Catalonia, Spain.' },
              { name: 'keywords', content: 'Petr, Penicka, full-stack, developer, software, engineer, JavaScript, React, Node, Node.js, Express' },
            ]}
          >
            <html lang="en" />
          </Helmet>
          {content}
        </>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
