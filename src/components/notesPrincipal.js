import React from 'react';
import styled from '@emotion/styled';

/*import {Button} from './ui/General';*/
import UseNotes from '../hooks/use-notes';
import NotePreview from './notePreview';

const Title = styled.h2`
    padding: 2% 0 0 0;
    text-align:center;
`;

const Container = styled.div`
    padding:0 5%;
    display:grid;
    row-gap:3rem;
    @media (min-width: 768px) {    
        padding:0 10% 4% 10%;    
        grid-template-columns: repeat(3,1fr);
        gap:3rem;
    }     
`;

const More = styled.div`
    padding: 10% 0 5% 0;
    text-align:center;
    @media (min-width: 768px) {        
        padding: 3% 0 5% 0;
    }     
`;

const NotesPrincipal = () => {

    const notes = UseNotes();

    return ( 
        <>
        <Title>Blog</Title>
        <Container>
        {notes.map(note => (
            <NotePreview
                key={note.id}
                note={note}
            />                    
        ))} 
        </Container>
        </>
     );
}
 
export default NotesPrincipal;