const { gql } = require("apollo-server-express");
module.exports = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    savedBooks: [Book]
    bookCount: Int
  }
  type Book {
    _id: ID
    authors: String
    description: String
    image: String
    link: String
    title: String
  }
  type Query {
    me: User
    users: [User]
    user(username: String, _id: String): User
    books(title: String!): [Book]
    book(_id: ID!): Book
  }
  type Mutations {
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(username: String!, bookId: ID!): Book
    login(email: String!, password: String!): Auth
    removeUser(userId: String!): Auth
  }

  type Auth {
    token: ID!
    user: User
  }
`;
