export const typeDefs = `
  type Channel {
    id: ID!  # ! defines param is required
    name: String
  }
  type Query {
    channels: [Channel] # [] defines array
  }
`;