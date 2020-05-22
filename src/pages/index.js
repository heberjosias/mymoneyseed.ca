import React from "react";
/*import { Link } from "gatsby"*/

import {Hero, Intro, Button} from '../components/ui/General';
import Layout from "../components/layout/layout";
import SEO from "../components/layout/seo";
import HeroImage from '../components/img/hero';
import IntroImg from '../components/img/intro';


const IndexPage = () => {

return ( 

    <Layout>
    <SEO/>    
      <Hero>
        <div>
          <h1>My Money Seed</h1>
          <p>We are a community of financial professional on a mission to deliver financial education and revolutionize the financial service industry through a reliable system.</p>
          <Button>Contact</Button>
        </div>
        <HeroImage/>
      </Hero>
      <Intro>
        <p>Our purpose is to provide a general understanding about financial concepts and information with professionalism of a proper institution without the confusing and complex terms.</p>
        <IntroImg/>
      </Intro>  
  </Layout>

   );
}
 
export default IndexPage ;

