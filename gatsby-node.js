exports.createPages = async ({ actions, graphql, reporter }) => {
    const resultado = await graphql(`
        query {
            allDatoCmsBlog(filter:{ active: {eq:true} }){
                nodes {
                    slug
                }
            }
        }
    `);

    // console.log(resultado.data.allDatoCmsBlog.nodes);

    if(resultado.errors) {
        reporter.panic('No hubo resultados ', resultado.errors);
    }

    // Si hay paginas, crear los archivos
    const notes = resultado.data.allDatoCmsBlog.nodes;

    notes.forEach(note => {
        actions.createPage({
            path: note.slug,
            component: require.resolve('./src/components/notes.js'),
            context: {
                slug: note.slug
            }
        })
    })
    
}