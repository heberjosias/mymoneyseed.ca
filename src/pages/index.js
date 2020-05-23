import React from "react";
import Image from 'gatsby-image';

import {Logo, Hero, Intro, Analytics, AnalyticsImg, Finance, CTA, Form, InputSubmit, Button, Footer} from '../components/ui/General';
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
          <Logo>
            <Image
                fluid={images.logo.fluid}
                alt="My Money Seed"
            />               
          </Logo>
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
      <Analytics>
        <AnalyticsImg>
          <Image
              fluid={images.analytics.fluid}
              alt="My Money Seed"
          />       
        </AnalyticsImg>
        <div>
          <p>According to recent surveys, North America are facing serious financial challenges.</p>
          <strong>In Canada:</strong>
          <p>35% of Canadians do not have savings or investments.</p>
          <p>Only 27% of private sector workers have an employer-funded pension plan.</p>
          <p>The average savings in Registered Retirement Savings Plans ( RRSP) is only ($55,000)</p>
          <strong>The US picture is even gloomier:</strong>
          <p>33%, or more than 77 million, of American’s don´t pay their bills on time</p>
          <p>39% carry credit card debt from month to month</p>
          <p>Only 59% of adults say they have savings </p>

        </div>
      </Analytics>
      <Finance>
          <Image
              fluid={images.finance.fluid}
              alt="My Money Seed"
          />   
        <p>We need to change, and the task won´t be easy. But we need understanding first. The old days of passive dependence have to end. A new era of proactivist and financial freedom must begin.</p>
        <p>We this financial moment, we want to explain finances as how a friend would talk to another friend. We want to make it simple, using common language for common people.</p>
        <p>Our wish is to get your attention and interest into financial matters and for you to obtain some basics of how money works. Like many of us, once you enter the gate of financial knowledge, you´ll discover that it´s doable to understand, plan, and build a financial foundation for you and your family.</p>
      </Finance>
      <CTA id="work">
        <div>
          <h2>How we work?</h2>
          <h4>We believe that financial education is a right for all people, so through a series of free workshops we help people learn:</h4>
          <h4>How to increase their cash flow</h4>
          <p>Debt management</p>
          <p>Build a financial foundation</p>
          <p>Proper protection</p>
          <p>Retirement Planning</p>
          <p>Asset accumulation </p>
          <p>Wealth preservation</p>
        </div>
        <Image
              fluid={images.cta.fluid}
              alt="My Money Seed"
          /> 
      </CTA>
      <Form id="contact">
        <h2>Are you interested in taking any of our free workshops?</h2>
        <form>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name*"
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email*"
            />
            <label htmlFor="name">Email</label>
            <input
              type="text"
              id="phone"
              name="phone"
              placeholder="Phone*"
            />
            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              name="city"
              placeholder="City, State, Province*"
            />  
          </div>   
          <InputSubmit
            type="submit"
            value="Send"
          />                         
        </form>
      </Form>
      <NotesPrincipal id="blog"></NotesPrincipal>
      <Footer>        
        <p>© {new Date().getFullYear()} My Money Seed</p>
      </Footer>
  </Layout>

   );
}
 
export default IndexPage ;

