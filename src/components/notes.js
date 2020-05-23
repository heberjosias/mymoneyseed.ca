import React from 'react';
import {graphql } from "gatsby";
import styled from '@emotion/styled';
import Image from 'gatsby-image';

import Layout from "../components/layout/layout";
import SEO from "../components/layout/seo";
import Contact from '../components/contact';

const Container = styled.div`
    @media (max-width: 768px) {            
        padding: 0 5%;
    }
    padding: 0 18%;
    text-align: center;  
    p{
        text-align:left;
    }      
`;

const Img = styled(Image)`
    @media (max-width: 768px) {            
        width:100%;
    }
    width:80%;
    margin:0 auto;
    border-radius:4px;
    box-shadow: 0px 1px 2px 1px rgba(0,0,0,.4);
`;

const Footer = styled.footer`
      text-align:center;
      padding: 2% 0;
`;

export const query = graphql`
    query($slug: String!){
        allDatoCmsBlog(filter:{ slug: {eq:$slug} }){
            nodes {
                title
                subtitle
                date
                image{
                fluid{
                    ...GatsbyDatoCmsFluid
                }
              }
            text            
            }
        }
    }
`

const NoteTemplate = ({data: {allDatoCmsBlog: {nodes} }}) => {

    const {title, subtitle, date, image, text } = nodes[0];

    return (
        <Layout>
        <SEO/> 
        <Container>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <Img
                fluid={image.fluid}
                alt="My Money Seed"
            />   
            <h3>{date}</h3>
            <p>{text}</p>
        </Container>        
        <Contact/>
        <Footer>        
            <p>© {new Date().getFullYear()} My Money Seed</p>
        </Footer>
        </Layout>
      );
}
 
export default NoteTemplate;

