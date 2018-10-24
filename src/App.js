import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
// import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
// import { mockNetworkInterfaceWithSchema } from 'apollo-test-utils';
import { HttpLink } from 'apollo-link-http';
// import { ApolloLink } from 'apollo-link';
import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
// import { typeDefs } from './schema';
import './App.css';
import ChannelsListWithApollo from './components/ChannelsListWithApollo';

const client = new ApolloClient({
  link: new HttpLink({ uri: 'http://localhost:3001/graphql' }),
  cache: new InMemoryCache()
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <div className="navbar">React + GraphQL Tutorial</div>
          <ChannelsListWithApollo />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
