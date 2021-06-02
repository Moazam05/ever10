import React from "react"
import styled from 'styled-components'
import {graphql, Link} from "gatsby"
import {MDXRenderer} from "gatsby-plugin-mdx"

import SEO from './../components/seo/seo'
import Layout1 from './../components/layout/layout-1'
// noinspection ES6UnusedImports
import * as styles from 'gatsby-remark-mathjax-ssr/mathjax.css'
import FeaturedImage from "./featuredImage";
import { ThemeToggler } from 'gatsby-plugin-dark-mode'


const colors = {
  grey100: '#ECECED',
  grey200: '#CFCFD1',
  grey300: '#B2B3B5',
  grey400: '#78797E',
  grey500: '#3E4047',
  grey600: '#383A40',
  grey700: '#25262B',
  grey800: '#1C1D20',
  grey900: '#131315',

  white: '#ffffff',
  yellow: '#ffdc4e',
  lightBlue: '#697980',
}

const HeroContainer = styled.div`
  position: relative;
  display: table;
  width: 100%;
  height: 400px;
  overflow: hidden;
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;
`

const PhotoCredit = styled.span`
 display: inline;
 color: #ffffff;
 opacity: 0.5;
 background-color: #000;
 text-align: right;
 padding: 4px;
 white-space: nowrap;
 position: absolute;
 bottom: 0px;
 right: 0px;
`

const TitleContainer = styled.div`
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  width: 100%;
`
const HeroTitle = styled.h1`
  font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 800;
  font-size: 55px;
  margin: 10px 50px;
  color: ${colors.white};
  text-shadow: 1px 1px 4px rgba(34, 34, 34, 0.85);
`

const HeroSubTitle = styled.h2`
  margin: 10px 50px;
  color: ${colors.white};
  text-shadow: 1px 1px 4px rgba(34, 34, 34, 0.85);
`

const BlogPostTemplate = ({data, pageContext, location}) => {
  const post = data.mdx
  const siteTitle = data.site.siteMetadata.title
  const {previous, next} = pageContext
  //const featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid

  return (
      <Layout1 location={location} title={siteTitle} mainClass="blogContainer">
        <SEO
            title={post.frontmatter.title}
            description={post.frontmatter.description || post.excerpt}
        />
        {/*<HeroContainer style={{backgroundImage: `url("${featuredImgFluid.src}")`}}>*/}
        {/*  <TitleContainer>*/}
        {/*    <HeroTitle>{post.frontmatter.title}</HeroTitle>*/}
        {/*    {post.frontmatter.subtitle && (<HeroSubTitle>{post.frontmatter.subtitle}</HeroSubTitle>)}*/}
        {/*  </TitleContainer>*/}
        {/*  {post.frontmatter.photoCredit && (<PhotoCredit>{post.frontmatter.photoCredit}</PhotoCredit>)}*/}
        {/*</HeroContainer>*/}
        <ThemeToggler>
          {({ theme, toggleTheme }) => (
              <button className="theme-toggle m-1" onClick={e => toggleTheme(theme === 'dark' ? 'light' : 'dark')}>
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                     strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5"/>
                  <line x1="12" y1="1" x2="12" y2="3"/>
                  <line x1="12" y1="21" x2="12" y2="23"/>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                  <line x1="1" y1="12" x2="3" y2="12"/>
                  <line x1="21" y1="12" x2="23" y2="12"/>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                </svg>
              </button>
          )}
        </ThemeToggler>
        <div className="container">
          <div className="row" style={{ display: `block` }}>
            <div className="col-12">
              <div className="blog-article">
                <article className="ever-10-single-blog-post">
                  <header>
                    <h1>
                      {post.frontmatter.title}
                    </h1>
                    <p>
                      Published on: <span>{post.frontmatter.date}</span>
                    </p>
                    {post.frontmatter.featuredImage && (<FeaturedImage featuredImage={post.frontmatter.featuredImage} photoCredit={post.frontmatter.photoCredit}/>)}
                  </header>
                  <MDXRenderer>{post.body}</MDXRenderer>
                  <hr/>
                </article>
              </div>

              <div className="row ever-10-single-blog-post-next-previous">
                <div className="col-6 text-left prev-blog">
                  {previous && (
                      <Link to={"/blog" + previous.fields.slug} rel="prev">
                        ← {previous.frontmatter.title}
                      </Link>
                  )}
                </div>
                <div className="col-6 text-right next-blog">
                  {next && (
                      <Link to={"/blog" + next.fields.slug} rel="next">
                        {next.frontmatter.title} →
                      </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout1>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        photoCredit
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 1200,  maxHeight: 400, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
