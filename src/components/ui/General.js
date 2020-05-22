import styled from '@emotion/styled';

export const Hero = styled.div`
    padding: 0 5%;    
    display: grid;
    @media (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
      column-gap: 2rem;
      align-items:center;
      } 
    p{
      width: 100%;  
      padding: 0 0 1.5rem 0;      
      @media (min-width: 768px) {
        width: 70%;
      } 
    }
`;

export const Intro = styled.div`
    padding: 0 5%;
    @media (min-width: 768px) {
      padding: 0 25%;
    }     
    text-align:center;    
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