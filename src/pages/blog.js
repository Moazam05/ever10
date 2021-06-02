import React from "react"
import { Link, graphql } from "gatsby"
import Layout1 from '../components/layout/layout-1'
import SEO from '../components/seo/seo'

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMdx.edges

  return (
    <Layout1 title={siteTitle}>
      <SEO title="Blogs" />
      <div className="container mt-5 mb-5">
        <div className="row justify-content-center">
          <div className="col-md-10">
            {posts.map(({ node }) => {
              const title = node.frontmatter.title || node.fields.slug
              return (
                <article className="ever-10-blogs-article" key={node.fields.slug}>
                  <Link to={"/blog" + node.fields.slug}>
                    <h3>
                      {title}
                    </h3>
                    <small>{node.frontmatter.date}</small>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: node.frontmatter.description || node.excerpt,
                      }}
                    />
                    <p>Read More</p>
                  </Link>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </Layout1>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
