# CMS Integration Guide

This blog is prepared for integration with Strapi CMS. While the blog currently works with local markdown files, you can easily integrate it with a headful CMS like Strapi for better content management.

## Option 1: Current Setup (Markdown Files)

The blog currently uses local markdown files stored in the `content/blog/` directory. This approach is:
- ✅ Simple and lightweight
- ✅ Version-controlled content
- ✅ No database required
- ✅ Perfect for developers

## Option 2: Strapi CMS Integration

To integrate with Strapi CMS, follow these steps:

### 1. Install Strapi Locally

```bash
# Create a new Strapi project
npx create-strapi-app gatsby-blog-cms --quickstart

# Or install globally
npm install -g @strapi/strapi
strapi new gatsby-blog-cms --quickstart
```

### 2. Configure Content Types

In your Strapi admin panel:

1. Create a "Blog Post" content type with these fields:
   - `title` (Text)
   - `slug` (Text, unique)
   - `content` (Rich Text or Markdown)
   - `excerpt` (Text)
   - `publishedAt` (Date)
   - `tags` (Relation to Tags collection)
   - `featuredImage` (Media)

2. Create a "Tag" content type:
   - `name` (Text)
   - `slug` (Text, unique)

### 3. Update Gatsby Configuration

The `gatsby-source-strapi` plugin is already installed. Update your `gatsby-config.js`:

```javascript
module.exports = {
  plugins: [
    // ... other plugins
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 1000,
        collectionTypes: [
          {
            singularName: `blog-post`,
            queryParams: {
              populate: {
                featuredImage: '*',
                tags: '*',
              },
            },
          },
          {
            singularName: `tag`,
          },
        ],
      },
    },
  ],
}
```

### 4. Update GraphQL Queries

Replace markdown queries with Strapi queries:

```javascript
// Example for homepage
export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allStrapiBlogPost(sort: { publishedAt: DESC }, limit: 6) {
      nodes {
        id
        title
        slug
        excerpt
        publishedAt(formatString: "MMMM DD, YYYY")
        tags {
          name
          slug
        }
        featuredImage {
          url
          alternativeText
        }
      }
    }
  }
`
```

### 5. Update Page Templates

Modify your templates to work with Strapi data:

```javascript
// src/templates/blog-post.js
const BlogPostTemplate = ({ data }) => {
  const post = data.strapieBlogPost
  
  return (
    <Layout
      pageTitle={post.title}
      pageDescription={post.excerpt}
    >
      <article className="blog-post fade-in">
        <header>
          <div style={{ marginBottom: '1rem' }}>
            {post.tags?.map(tag => (
              <span key={tag.id} className="tag">
                {tag.name}
              </span>
            ))}
          </div>
          <h1>{post.title}</h1>
          <div className="blog-meta">
            <span>{post.publishedAt}</span>
          </div>
        </header>
        
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>
    </Layout>
  )
}
```

## Option 3: Other CMS Options

This blog can also be integrated with:

### Contentful
```bash
yarn add gatsby-source-contentful
```

### WordPress
```bash
yarn add gatsby-source-wordpress
```

### Sanity
```bash
yarn add gatsby-source-sanity
```

### Ghost
```bash
yarn add gatsby-source-ghost
```

## Recommendation

For most use cases, I recommend:

1. **Start with Markdown** (current setup) - Perfect for developers and simple blogs
2. **Upgrade to Strapi** - When you need a user-friendly content management interface
3. **Consider Contentful** - For enterprise-level projects with multiple content creators

The current markdown setup is production-ready and perfect for personal blogs, technical documentation, and developer portfolios.

## Migration Path

If you want to migrate from markdown to a CMS later:

1. Export your existing markdown content
2. Set up your chosen CMS
3. Import content via CMS API or admin interface
4. Update Gatsby configuration and queries
5. Test and deploy

The glassmorphism design and all UI components will work seamlessly with any CMS integration!