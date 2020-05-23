import React from "react";
import PropTypes from "prop-types";
import styled from '@emotion/styled';
import { Link } from "gatsby";

const Heading = styled.header`
    margin:0;
    padding: 1% 5% 1% 5%;
    display:flex;
    justify-content:center;
    align-items:center;   
    background:#F7F7F7;
    a{
      font-size: 1.5rem;
      color:#03989E;
      margin:0 2rem;
      &:hover{                    
        color:#42afef;      
        text-decoration:underline;    
      }
      @media (max-width: 768px) {            
        display:none;
      }
    } 
`;

const Header = () => {
  return ( 
    <Heading>
        <Link to="/#work">
            <a>How we work?</a>
        </Link>          
        <Link to="/#contact">
          <a>Free workshops</a>
        </Link>          
        <Link to="/#blog">
          <a>Blog</a>
        </Link>                                 
    </Heading>
   );
}
 
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
