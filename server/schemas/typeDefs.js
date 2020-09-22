const { gql } = require("apollo-server-express");
module.exports = gql`
  type User {
    _id: ID
    username: String
    email: String
    savedBooks: [Book]
    bookCount: Int
  }
  input BookInput {
    author: String
    description: String
    title: String
    bookId: ID
    image: String
    link: String
  }
  type Book {
    bookId: String
    authors: [String]
    description: String
    image: String
    link: String
    title: String
  }
  type Query {
    me: User
  }
  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(input: BookInput!): User
    login(email: String!, password: String!): Auth
    removeBook(bookId: String!): User
  }
  type Auth {
    token: ID!
    user: User
  }
`;
