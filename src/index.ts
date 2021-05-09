import "reflect-metadata"
import { ApolloServer } from "apollo-server-express"
import { buildSchema,Query, Resolver } from "type-graphql"
import * as  Express from "express"

@Resolver()
class HelloResolver{
    @Query(() =>String,{nullable:false})
    async hello() { return "Hello world"}
}


const main = async () =>{
    const schema = await buildSchema({
        resolvers : [ HelloResolver ]
    })

    const apolloServer = new ApolloServer({schema})
    
    const app =Express()
    apolloServer.applyMiddleware({app})
    app.listen( 4000, () => {
        console.log(`> Express server running on  http://localhost:4000`)} )
}

main()
