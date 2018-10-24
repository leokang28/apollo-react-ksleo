const channels = [
  {
    id: 1,
    name: 'soccer'
  },
  {
    id: 2,
    name: 'baseball',
  }
];

export const resolvers = {
  Query: {
    channels: () => {
      return channels;
    }
  },
  Mutation: {
    addChannel: (root, args) => {
      const newChannel = { id: channels.length + 1, name:args.name };
      channels.push(newChannel);
      return newChannel;
    }
  }
}