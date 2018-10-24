import express from 'express';
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express';
import BodyParser from 'body-parser';
import { schema } from './src/schema';

const PORT = 3001;

const server = express();

// server.get('/', function (req, res) {
//   res.send('Hello World!');
// });

server.use('/graphql', BodyParser.json(), graphqlExpress({ schema }))
server.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }))

server.listen(PORT, () => console.log(`GraphQL Server is now running on http://localhost:${PORT}`));