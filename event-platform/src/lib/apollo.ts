import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4orkmtb12gs01w7cx5a3n52/master',
    cache: new InMemoryCache()
})