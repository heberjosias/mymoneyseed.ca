import styled from '@emotion/styled';

export const Hero = styled.div`
    padding: 0 5%;    
    display: grid;
    @media (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
      column-gap: 2rem;
      align-items:center;
      } 
    h1{      
      @media (min-width: 768px) {
        margin: 0 auto auto auto;
      } 
    } 
    p{
      width: 100%;  
      padding: 0 0 1rem 0;      
      @media (min-width: 768px) {
        width: 70%;
      } 
    }
`;

export const Logo = styled.div`
      max-width:300px;  
      padding:0;
      margin:0;
`;

export const Intro = styled.div`
    padding: 0 5%;
    @media (min-width: 768px) {
      padding: 0 25%;
    }     
    text-align:center;    
`;

export const Analytics = styled.div`
    padding: 5% 5% 4% 5%; 
    align-items:center;        
    @media (min-width: 768px) {
      display:grid;
      grid-template-columns: repeat(2,1fr);
      column-gap: 2rem; 
    } 
`;

export const AnalyticsImg = styled.div`
    @media (max-width: 768px) {
      display:none;
}`;

export const Finance = styled.div`
    padding: 0 5%;
    @media (min-width: 768px) {
      padding: 0 25%;
    }     
    text-align:center;    
`;

export const CTA = styled.div`
    padding: 4% 5% 4% 5%; 
    align-items:center;        
    @media (min-width: 768px) {
      display:grid;
      grid-template-columns: repeat(2,1fr);
      column-gap: 2rem; 
    } 
    h4{
      font-weight: 400;
    }
    p{
      font-weight: 600;
    }
`;

export const Form = styled.div`
      padding: 0% 5% 2% 5%;
      @media (min-width: 768px) {            
        padding: 0% 10% 2% 10%;
      }
      h2{
        text-align:center;
      }
      div{
        display:grid;
        grid-template-columns: repeat(2,1fr);
        gap:1rem;
        padding: 0 0 1rem 0;
      }
      form{
        padding: 0%;
        @media (min-width: 768px) {            
          padding: 1% 10% 0 10%;
        }
        input{
          width: 100%;
          padding:1rem;
          border:none;
          font-size:1rem;
          color:#03989E;
          background-color:#F4F4F4;
          border-radius: 2px; 
        }
        label{
          display:none;
        }
      }
`;

export const InputSubmit = styled.input`
  padding: 4px 40px 4px 40px;
  background:#F7F7F7;
  color: #03989E;
  border: 1px solid #03989E;        
  border-radius: 2px; 
  box-shadow: 0px 1px 2px 1px rgba(0,0,0,.2);
  text-transform: uppercase;
  font-size: 1.2rem;  
  font-weight: 600;
  font-family: 'Montserrat', sans-serif;  
  &:hover{
      background: #03989E;
      border: 1px solid #03989E;
      color:#ffffff;   
      cursor:pointer;
      box-shadow: 2px 2px 4px rgba(153,153,153,.5);
      -webkit-box-shadow: 2px 2px 4px rgba(153,153,153,.5);
      -moz-box-shadow: 2px 2px 4px rgba(153,153,153,.5);
  }   
`;


export const Button = styled.a`
      padding: 4px 40px 4px 40px;
      background:#F7F7F7;
      color: #03989E;
      border: 1px solid #03989E;        
      border-radius: 2px; 
      box-shadow: 0px 1px 2px 1px rgba(0,0,0,.2);
      text-transform: uppercase;
      font-size: 1.2rem;    
      cursor:pointer;
      @media (min-width: 768px) {            
          margin-top: 1.5rem; 
      }
      &:hover{
          background: #03989E;
          border: 1px solid #03989E;
          color:#ffffff;   
          box-shadow: 0px 1px 2px 1px rgba(0,0,0,.2);
      }
`;

export const Footer = styled.footer`
      text-align:center;
`;