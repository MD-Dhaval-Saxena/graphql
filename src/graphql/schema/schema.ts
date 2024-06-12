export const schema = `#graphqL

type User{
    _id:ID!
    name:String!
    email:String!
}

type Query{
    hello:String
    users:[User]
}


`;
