import React from "react";
import Image from 'gatsby-image';

import {Hero, Intro, Button} from '../components/ui/General';
import Layout from "../components/layout/layout";
import SEO from "../components/layout/seo";
import UseImg from '../hooks/use-img';

import NotesPrincipal from '../components/notesPrincipal';

const IndexPage = () => {

  const images = UseImg();

return ( 

    <Layout>
    <SEO/>    
      <Hero>
        <div>
          <h1>My Money Seed</h1>
          <p>We are a community of financial professional on a mission to deliver financial education and revolutionize the financial service industry through a reliable system.</p>
          <Button>Contact</Button>
        </div>
        <Image
            fluid={images.hero.fluid}
            alt="My Money Seed"
        />        
      </Hero>
      <Intro>
        <p>Our purpose is to provide a general understanding about financial concepts and information with professionalism of a proper institution without the confusing and complex terms.</p>
        <Image
            fluid={images.intro.fluid}
            alt="My Money Seed"
        />        
      </Intro>  
      <NotesPrincipal/>
  </Layout>

   );
}
 
export default IndexPage ;

