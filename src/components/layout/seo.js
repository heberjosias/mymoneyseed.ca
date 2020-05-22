
import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"

function SEO({lang, meta}) {

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title="My Money Seed"
      meta={[
        {
          name: `description`,
          content: 'We are a community of financial professional on a mission to deliver financial education and revolutionize the financial service industry through a reliable system.',
        },
        {
          property: `og:title`,
          content: 'My Money Seed',
        },
        {
          property: `og:description`,
          content: 'We are a community of financial professional on a mission to deliver financial education and revolutionize the financial service industry through a reliable system.',
        }
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: []
}

SEO.propTypes = {
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object)
}

export default SEO
