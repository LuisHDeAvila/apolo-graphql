import { ApolloServer } from 'apollo-server'

const typeDefs = `
type Query {
    hello: String
}
`

const resolvers = {
    Query: {
        hello: () => 'hello world'
    }
}
async function startApolloServer(){
    const server = new ApolloServer({
        typeDefs,
        resolvers
    })
    const {url} = await server.listen()
    console.log('Server is running on', url)
}

startApolloServer()