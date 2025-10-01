import React from 'react'
import CMS from 'decap-cms-app'

const BlogPostPreview = ({ entry, widgetFor }) => {
  const data = entry.getIn(['data']).toJS()
  const body = widgetFor('body')
  
  return React.createElement('div', { className: 'blog-post-preview' }, [
    React.createElement('h1', { key: 'title' }, data.title),
    React.createElement('p', { key: 'date' }, 
      React.createElement('small', null, `Date: ${data.date}`)
    ),
    React.createElement('div', { key: 'tags', className: 'tags' },
      data.tags && data.tags.map((tag, index) => 
        React.createElement('span', { key: index, className: 'tag' }, tag)
      )
    ),
    React.createElement('div', { key: 'content', className: 'content' }, body)
  ])
}

// Initialize the CMS object
CMS.init()

// Register preview template
CMS.registerPreviewTemplate('blog', BlogPostPreview)