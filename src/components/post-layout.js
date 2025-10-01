import * as React from "react"
import { Link } from "gatsby"
import * as postStyles from "../post.module.css"
import Seo from "../components/seo"

const PostLayout = ({
  headerTitle,
  title,
  description,
  date,
  tags,
  children,
}) => {
  return (
    <main>
      <Seo title={title} description={description} />
      <header>
        <Link className={postStyles.siteTitle} to="/">
          {headerTitle}
        </Link>
      </header>
      <section className={postStyles.article}>
        <div className={postStyles.articleHeader}>
          <h2 className={postStyles.articleTitle}>{title}</h2>
          <small className={postStyles.date}>{date}</small>
          <div className={postStyles.tags}>
            {tags?.map((tag, i) => (
              <Link key={i} to={`/tags/${tag}`} className={postStyles.tag}>
                {tag}
              </Link>
            ))}
          </div>
        </div>
        {children}
      </section>
      <footer>
        <p>&copy; {new Date().getFullYear()}</p>
      </footer>
    </main>
  )
}

export default PostLayout
