import React from 'react';
import Image from 'gatsby-image';
import { Link } from "gatsby"
import styled from '@emotion/styled';

const Note = styled.div`
    background:#F7F7F7;
    text-align:center;
    align-items:center;
    border-radius: 2px;
    border: 1px solid #F7F7F7;     
    box-shadow: 0px 1px 2px 1px rgba(0,0,0,.3);
    &:hover{
        transform: scale(1.1);
        transition-duration: 1seg;
    }
`;

const Img = styled(Image)`    
    box-shadow: 0px 0px 2px 1px rgba(0,0,0,.2);
`;

const NotePreview = ({note}) => {
    const {title, subtitle, date, image , slug} = note;
    return ( 
        <Link to={slug}>
            <Note>
                <h3>{title}</h3>
                <Img
                    fluid={image.fluid}
                    alt={title}
                    fadeIn="soft"
                />
                <h4>{subtitle}</h4>
                <h4>{date}</h4>
            </Note>
        </Link>
     );
}
 
export default NotePreview;