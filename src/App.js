import React, { Component } from 'react';
import { ApolloProvider, graphql } from 'react-apollo';
import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import { mockNetworkInterfaceWithSchema } from 'apollo-test-utils';
// import {ApolloClient} from 'apollo-client';
// import {HttpLink} from 'apollo-link-http';
// import {InMemoryCache} from 'apollo-cache-inmemory'
import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';
import { typeDefs } from './schema';
import logo from './logo.svg';
import './App.css';

const schema = makeExecutableSchema({ typeDefs });
addMockFunctionsToSchema({ schema });

const mockNetworkInterface = mockNetworkInterfaceWithSchema({ schema });

const client = new ApolloClient({
  networkInterface: mockNetworkInterface,
  // link: new HttpLink({ uri: '/graphql'}),
  // cache: new InMemoryCache()
});


const channelsListQuery = gql`
  query ChannelsListQuery {
    channels {
      id
      name
    }
  }
`

const ChannelsList = ({ data: {loading, error, channels}}) => {
  if (loading) return <p>loading...</p>;
  if (error) return <p>{error.message}</p>;
  return (
    <ul>
      {
        channels.map( ch => <li key={ch.id}>{ch.name}</li>)
      }
    </ul>
  );
}

const ChannelsListWithApollo = graphql(channelsListQuery)(ChannelsList)

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            {/* <p>
              Edit <code>src/App.js</code> and save to reload.
            </p> */}
            {/* <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a> */}
            <h2>hello apollo</h2>
          </header>
          <ChannelsListWithApollo />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
