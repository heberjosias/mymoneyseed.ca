import { useStaticQuery, graphql } from "gatsby";

const UseImg = () => {

    const data = useStaticQuery(
    graphql`
        query{
            allDatoCmsHome(filter:{ slug: {eq:"home"} }){
            nodes{
                id
                hero{
                    fluid{
                        ...GatsbyDatoCmsFluid
                    }
                }
                intro{
                    fluid{
                        ...GatsbyDatoCmsFluid
                    }
                }
                analytics{
                    fluid{
                        ...GatsbyDatoCmsFluid
                    }
                }              
                finance{
                    fluid{
                        ...GatsbyDatoCmsFluid
                    }
                }      
                cta{
                    fluid{
                        ...GatsbyDatoCmsFluid
                    }
                }                            
                slug
            }
        }
    }  
    `);

    return data.allDatoCmsHome.nodes[0]

}
 
export default UseImg;