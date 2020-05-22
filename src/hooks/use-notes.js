import { useStaticQuery, graphql } from "gatsby";

const UseNotes = () => {

    const data = useStaticQuery(
    graphql`
        query{
            allDatoCmsBlog(filter:{ active: {eq:true} }){
            nodes{
                id
                title
                subtitle
                date
                image{
                    fluid{
                        ...GatsbyDatoCmsFluid
                    }
                }
                text
                slug
            }
        }
    }  
    `);

    return data.allDatoCmsBlog.nodes.map(note => ({
        id: note.id,
        title: note.title,
        subtitle: note.subtitle,
        date: note.date,
        image: note.image,
        text: note.text,
        slug: note.slug
    }))

}
 
export default UseNotes;