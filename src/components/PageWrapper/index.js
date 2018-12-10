import React from 'react'
import propTypes from 'prop-types'


// an hoc to wrap a page's elements
const PageWrapper = ({children, className}) => (
  <div className={('app-page-wrapper ' + className).trim()}>
    {children}  
  </div>
)

PageWrapper.propTypes = {
    children: propTypes.node.isRequired,
    className: propTypes.string,
}

PageWrapper.defaultProps = {
  className: ''
}

export default PageWrapper
