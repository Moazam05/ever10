import Img from "gatsby-image";
import React from "react";

const FeaturedImage = ({featuredImage, photoCredit}) => {
  const featuredImgFluid = featuredImage.childImageSharp.fluid

  return (<div className="featured-image">
    <Img fluid={featuredImgFluid}/>
    {photoCredit && (<span className="caption">{photoCredit}</span>)}
  </div>)
}

export default FeaturedImage