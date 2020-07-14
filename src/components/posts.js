import React from "react"
import { Link } from "gatsby"

export default ({ data }) => {
  return (
    <div className="container posts">
      {data.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <Link to={node.fields.slug} key={node.fields.slug}>
            <article className="post">
              <h3>{title}</h3>
              <time>{node.frontmatter.date}</time>
              <section>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
              </section>
            </article>
          </Link>
        )
      })}
    </div>
  )
}
